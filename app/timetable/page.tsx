// import Flex from "@/components/Flex";
import "../../styles/common.css";
import "../../styles/timetable.css";
// import {testData} from "./test_data"
import { getDayEndTime, getDayStartTime, getReadableDETime } from "@/helper_functions/helperFunctions";
import Link from "next/link";
import Image from "next/image";
import TimetableSwitcher from "@/components/TimetableSwitcher";

const minutesPerCell = 30;

class EventOnGrid {
  artist: ArtistWithoutEvents;
  event: FestivalEvent;
  left: number;
  numCellsWide: number;

  constructor(artist: ArtistWithoutEvents, dayStartTime: Date, event: FestivalEvent) {
    this.event = event;
    this.artist = artist;
    const eventStartTime = new Date(event.startDateTime);
    const startingAfterDayStart = eventStartTime.getTime() - dayStartTime.getTime();
    const startingAfterDayStartInMinutes = startingAfterDayStart / (1000 * 60); // convert to minutes
    this.left = startingAfterDayStartInMinutes / minutesPerCell; // convert to minutes
    const eventEndTime = new Date(event.endDateTime);
    const durationInMilliseconds = eventEndTime.getTime() - eventStartTime.getTime();
    const durationInMinutes = durationInMilliseconds / (1000 * 60);
    const numCells = durationInMinutes / minutesPerCell; // convert to number of 30-minute intervals -- and therefore how many cells it occupies
    const borderCrossings = numCells - 1;
    this.numCellsWide = numCells + borderCrossings * 0.02; // each cell is 1 unit wide, and each border crossing adds 0.02 units
  }

  getInnerLeftOffset(): number {
    return this.left - Math.floor(this.left);
  }
  isInCell(cellIndex: number): boolean {
    return cellIndex >= this.left && cellIndex < this.left + 1;
  }
}

const createStageRow = (stage: StageWithEvents, dayStartTime: Date, numThirtyMinuteIntervals: number) => {
  const stageRow: (EventOnGrid | undefined)[] = [];
  const eventsOnGrid: EventOnGrid[] = stage.events.map(event => new EventOnGrid(event.artist, dayStartTime, event));
  for (let i = 0; i < numThirtyMinuteIntervals; i++) {
    let eventInCell: EventOnGrid | undefined = undefined;
    for (const eventOnGrid of eventsOnGrid) {
      if (eventOnGrid.isInCell(i)) {
        eventInCell = eventOnGrid;
        break;
      }
    }
    stageRow.push(eventInCell);
  }
  return stageRow;
};

const createTimeLabels = (dayStartTime: Date, numThirtyMinuteIntervals: number): string[] => {
  const timesEveryThirtyMinutes: string[] = [];
  for (let i = 0; i <= numThirtyMinuteIntervals; i++) {
    const interval = new Date(dayStartTime.getTime() + i * minutesPerCell * 60 * 1000);
    const formattedTime = getReadableDETime(interval.toISOString());
    timesEveryThirtyMinutes.push(formattedTime);
  }
  return timesEveryThirtyMinutes;
};

const TimetablePage = async () => {
  let daysAndTheirEvents: DayAndEvents[] = [];
  try {
    const response = await fetch(`https://sternstunde.fly.dev/get-stages-with-their-events`, {
      headers: { Accept: "application/json" },
      method: "POST",
    });
    daysAndTheirEvents = await response.json();
    // const days = testData;
  } catch (error) {
    const errorMessage = error as Error;
    console.error("Error fetching timetable dat a:", errorMessage.message);
  }

  const dayTimetables = daysAndTheirEvents.map((dayAndEvents: DayAndEvents) => (
    <DayTimetable key={dayAndEvents.day.id} dayAndEvents={dayAndEvents} />
  ));

  const dayNames = daysAndTheirEvents.map(day => day.day.name);

  return (
    <div className="timetable-page-wrapper">
      <h1>Timetable</h1>

      <TimetableSwitcher dayTimetables={dayTimetables} dayNames={dayNames} />

      <div className="legend-column">
        <div className="symbols-row">
          <Image src="/gebaerdensprache.png" alt="Symbol Gebärdensprache" height="25" width="25" />= Mit Übersetzung in Deutscher Gebärdensprache
          (DGS)
        </div>
        <div className="symbols-row">
          <Image src="/kurzvortrag.png" alt="Symbol Kurzvortrag" height="25" width="25" />= Mit Kurzvortrag
        </div>
      </div>
    </div>
  );
};
export default TimetablePage;

const DayTimetable = ({ dayAndEvents }: { dayAndEvents: DayAndEvents }) => {
  const stageEvents = dayAndEvents.stageEvents;
  const dayStartTime = getDayStartTime(stageEvents);
  const dayEndTime = getDayEndTime(stageEvents);
  const numThirtyMinuteIntervals = Math.ceil((dayEndTime.getTime() - dayStartTime.getTime()) / (1000 * 60 * 30));

  const timeLabels = createTimeLabels(dayStartTime, numThirtyMinuteIntervals);

  return (
    <div>
      <table className="day-timetable">
        <thead>
          <tr>
            <th></th>
            {timeLabels.map(time => (
              <th key={time} className="time-label">
                {time}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {stageEvents.map(stageEvent => {
            const stageRow = createStageRow(stageEvent, dayStartTime!, numThirtyMinuteIntervals);
            return (
              <tr key={stageEvent.stage.id}>
                <td className="stage-name">{stageEvent.stage.name}</td>
                {stageRow.map((eventOnGrid, cellIndex) => {
                  const isStart = eventOnGrid && Math.floor(eventOnGrid.left) === cellIndex;

                  return (
                    <td key={cellIndex} className="event-cell">
                      {isStart && (
                        <div
                          className="event-box"
                          style={{
                            width: `${eventOnGrid.numCellsWide * 100}%`,
                            left: `${eventOnGrid.getInnerLeftOffset() * 100}%`,
                            backgroundColor: eventOnGrid.artist.attributes.astroprogramm ? "rgb(232, 0, 233, 0.16)" : "rgb(238, 224, 248, 0.6)",
                          }}
                        >
                          <Link href={`/kuenstlerinnen/${eventOnGrid.artist.code}`}>{eventOnGrid.artist.name}</Link>
                          <div className="symbols-row">
                            {eventOnGrid.event.attributes.mit_gebardensprache && (
                              <Image src="/gebaerdensprache.png" alt="Symbol Gebärdensprache" height={25} width={25} />
                            )}
                            {eventOnGrid.event.attributes.mit_kurzvortrag && (
                              <Image src="/kurzvortrag.png" alt="Symbol Kurzvortrag" height={25} width={25} />
                            )}
                          </div>
                        </div>
                      )}
                    </td>
                  );
                })}
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
