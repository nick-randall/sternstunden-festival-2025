// import Flex from "@/components/Flex";
import { BASE_URL } from "@/helper_functions/constants";
import "../../styles/common.css";
import "../../styles/timetable.css";
// import {testData} from "./test_data"
import { getDayEndTime, getDayStartTime, getReadableDETime } from "@/helper_functions/helperFunctions";
import Link from "next/link";
import Image from "next/image";

const timeUnit = 30;

class EventOnGrid {
  artist: ArtistWithoutEvents;
  event: FestivalEvent;
  left: number;
  width: number;

  constructor(artist: ArtistWithoutEvents, dayStartTime: Date, event: FestivalEvent) {
    this.event = event;
    this.artist = artist;
    const eventStartTime = new Date(event.startDateTime);
    const startingAfterDayStart = eventStartTime.getTime() - dayStartTime.getTime();
    this.left = startingAfterDayStart / timeUnit / (1000 * 60); // convert to minutes
    const eventEndTime = new Date(event.endDateTime);
    const duration = eventEndTime.getTime() - eventStartTime.getTime();
    this.width = duration / timeUnit / (1000 * 60); // convert to minutes
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
    const interval = new Date(dayStartTime.getTime() + i * timeUnit * 60 * 1000);
    const formattedTime = getReadableDETime(interval.toISOString());
    timesEveryThirtyMinutes.push(formattedTime);
  }
  return timesEveryThirtyMinutes;
};

const Timetable = async () => {
  let stageEvents: StageWithEvents[] = [];
  let dayStartTime: Date | null = null;
  let dayEndTime: Date | null = null;
  let numThirtyMinuteIntervals = 0;
  try {
    console.log(`${BASE_URL}/get-stages-with-their-events`);
    const response = await fetch(`${BASE_URL}/get-stages-with-their-events`, { headers: { Accept: "application/json" } });
    const timetableData = await response.json();
    // const timetableData = testData;
    stageEvents = timetableData[0].stageEvents; // only grabbing first day's events for simplicity
    dayStartTime = getDayStartTime(stageEvents);
    dayEndTime = getDayEndTime(stageEvents);
    numThirtyMinuteIntervals = Math.ceil((dayEndTime.getTime() - dayStartTime.getTime()) / (1000 * 60 * 30));
  } catch (error) {
    const errorMessage = error as Error;
    console.error("Error fetching timetable dat a:", errorMessage.message);
  }

  return (
    <div className="timetable-page-wrapper">
      <h1>Timetable</h1>
      <div>Freitag</div>
      <div className="table-container">
        <table className="day-timetable">
          <thead>
            <tr>
              <th></th>
              {createTimeLabels(dayStartTime!, numThirtyMinuteIntervals).map(time => (
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
                  {stageRow.map((eventOnGrid, cellIndex) => (
                    <td key={cellIndex} className="event-cell">
                      {eventOnGrid && (
                        <div
                          className="event-box"
                          style={{
                            width: `${eventOnGrid.width * 100}%`,
                            left: `${eventOnGrid.getInnerLeftOffset() * 100}%`,
                          }}
                        >
                          <Link href={`/kuenstlerinnen/${eventOnGrid.artist.code}`}>{eventOnGrid.artist.name}</Link>
                          <div className="symbols-row">
                            {eventOnGrid.event.attributes.mit_gebardensprache && (
                              <div>
                                <Image src="/gebaerdensprache.png" alt="Symbol Gebärdensprache" height="25" width="25" />
                              </div>
                            )}
                            {eventOnGrid.event.attributes.mit_kurzvortrag && (
                              <div>
                                <Image src="/kurzvortrag.png" alt="Symbol Kurzvortrag" height="25" width="25" />
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </td>
                  ))}
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="legend-column">
        <div className="symbols-row">
          <Image src="/gebaerdensprache.png" alt="Symbol Gebärdensprache" height="25" width="25" />= Mit Übersetzung in Deutscher Gebärdensprache (DGS)
        </div>
         <div className="symbols-row">
          <Image src="/kurzvortrag.png" alt="Symbol Kurzvortrag" height="25" width="25" />= Mit Kurzvortrag
        </div>
      </div>
    </div>
  );
};
export default Timetable;
