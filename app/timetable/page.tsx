import "../../styles/common.css";
import "../../styles/timetable.css";
// import {testData} from "./test_data"
import { getDayEndTime, getDayStartTime, getReadableDETime } from "@/helper_functions/helperFunctions";
import Link from "next/link";
import Image from "next/image";
import TimetableSwitcher from "@/components/TimetableSwitcher";
import Spacer from "@/components/Spacer";

const minutesPerCell = 30;

class EventOnGrid {
  artist: ArtistWithoutEvents;
  event: FestivalEvent;
  innerCellLeftOffset: number;
  cellIndex: number;
  numCellsWide: number;

  constructor(artist: ArtistWithoutEvents, dayStartTime: Date, event: FestivalEvent) {
    this.event = event;
    this.artist = artist;
    const eventStartTime = new Date(event.startDateTime);
    const startingAfterDayStart = eventStartTime.getTime() - dayStartTime.getTime();
    const startingAfterDayStartInMinutes = startingAfterDayStart / (1000 * 60); // convert to minutes
    const numThirtyMinuteIntervalsAfterDayStart = startingAfterDayStartInMinutes / minutesPerCell; // convert to number of 30-minute intervals
    this.cellIndex = Math.floor(numThirtyMinuteIntervalsAfterDayStart);
    this.innerCellLeftOffset = numThirtyMinuteIntervalsAfterDayStart - this.cellIndex;
    const eventEndTime = new Date(event.endDateTime);
    const durationInMilliseconds = eventEndTime.getTime() - eventStartTime.getTime();
    const durationInMinutes = durationInMilliseconds / (1000 * 60);
    const numCells = durationInMinutes / minutesPerCell; // convert to number of 30-minute intervals -- and therefore how many cells it occupies
    const borderCrossings = numCells - 1;
    this.numCellsWide = numCells + borderCrossings * 0.02; // each cell is 1 unit wide, and each border crossing adds 0.02 units
  }

  isInCell(cellIndex: number): boolean {
    return cellIndex >= this.cellIndex && cellIndex < this.cellIndex + 1;
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

const DayTimetable = ({ dayAndEvents }: { dayAndEvents: DayAndEvents }) => {
  const stageEvents = dayAndEvents.stageEvents;
  const dayStartTime = getDayStartTime(stageEvents);
  const dayEndTime = getDayEndTime(stageEvents);
  const dayDurationInMilliseconds = dayEndTime.getTime() - dayStartTime.getTime();
  const numThirtyMinuteIntervals = dayDurationInMilliseconds / (1000 * 60 * minutesPerCell);

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
            const stageRow = createStageRow(stageEvent, dayStartTime, numThirtyMinuteIntervals);
            return (
              <tr key={stageEvent.stage.id}>
                <td className="stage-name">{stageEvent.stage.name}</td>
                {stageRow.map((eventOnGrid, cellIndex) => {
                  return (
                    <td key={cellIndex} className="event-cell">
                      {eventOnGrid && (
                        <div
                          className="event-box"
                          style={{
                            width: `${eventOnGrid.numCellsWide * 100}%`,
                            left: `${eventOnGrid.innerCellLeftOffset * 100}%`,
                            backgroundColor: eventOnGrid.artist.attributes.astroprogramm ? "rgba(0, 140, 255, 0.322)" : "rgba(232, 0, 233, 0.16)",
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
                            {eventOnGrid.event.attributes.kinderprogramm && (
                              <Image src="/kinderprogramm.png" alt="Symbol Kinderprogramm" height={19} width={32} />
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
    console.error("Error fetching timetable data:", errorMessage.message);
  }

  const dayTimetables = daysAndTheirEvents.map((dayAndEvents: DayAndEvents) => (
    <DayTimetable key={dayAndEvents.day.id} dayAndEvents={dayAndEvents} />
  ));

  const dayNames = daysAndTheirEvents.map(day => day.day.name);

  return (
    <div className="timetable-page-wrapper">
      <h1>Timetable</h1>

      <TimetableSwitcher dayTimetables={dayTimetables} dayNames={dayNames} />
      <Spacer height={8} />
      <div className="legend-column">
        <div className="symbols-row">
          <Image src="/gebaerdensprache.png" alt="Symbol Gebärdensprache" height="25" width="25" />&nbsp;= Mit Übersetzung in Deutscher Gebärdensprache
          (DGS) durch Studierende des IDGS Hamburg.
        </div>
        <div className="symbols-row">
          <Image src="/kurzvortrag.png" alt="Symbol Kurzvortrag" height="25" width="25" />&nbsp;= Mit Kurzvortrag
        </div>
        <div className="symbols-row">
          <Image src="/kinderprogramm.png" alt="Symbol Kinderprogramm" height="19" width="32" />&nbsp;= (auch) für Kinder
        </div>
        <div className="symbols-row">
          <Image src="/musik_color.png" alt="Farbe Musikbox" height="19" width="19" />&nbsp;= Musikprogramm
        </div>
        <div className="symbols-row">
          <Image src="/astro_color.png" alt="Farbe Astrobox" height="19" width="19" />&nbsp;= Astroprogramm
        </div>

        <div>
          <br></br>Änderungen vorbehalten. Bitte prüft den Timetable tagesaktuell. Stand 03.07.
        </div>
      </div>
    </div>
  );
};
export default TimetablePage;

