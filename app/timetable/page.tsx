// import Flex from "@/components/Flex";
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
  let days: {
    stageEvents: StageWithEvents[];
    day: {
      id: 1;
      name: string;
      startDateTime: string;
      endDateTime: string;
    };
  }[] = [];
  try {
    const response = await fetch(`https://sternstunde.fly.dev/get-stages-with-their-events`, {
      headers: { Accept: "application/json" },
      method: "POST",
    });
    days = await response.json();
    // const days = testData;
  } catch (error) {
    const errorMessage = error as Error;
    console.error("Error fetching timetable dat a:", errorMessage.message);
  }

  return (
    <div className="timetable-page-wrapper">
      <h1>Timetable</h1>
      <div className="table-container">
        {days.map((day, index) => {
          return <Day key={`day ${index}`} day={day} />;
        })}
      </div>
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
export default Timetable;

const Day = ({
  day,
}: {
  day: {
    stageEvents: StageWithEvents[];
    day: {
      id: 1;
      name: string;
      startDateTime: string;
      endDateTime: string;
    };
  };
}) => {
  // const stages = stageEvents.map(stage => ({
  //   name: stage.stage.name,
  //   events: createStageRow(stage, dayStartTime, numThirtyMinuteIntervals),
  // }));
  const stageEvents = day.stageEvents; // only grabbing first day's events for simplicity
  const dayStartTime = getDayStartTime(stageEvents);
  const dayEndTime = getDayEndTime(stageEvents);
  const numThirtyMinuteIntervals = Math.ceil((dayEndTime.getTime() - dayStartTime.getTime()) / (1000 * 60 * 30));

  const timeLabels = createTimeLabels(dayStartTime, numThirtyMinuteIntervals);

  return (
    <div>
      {day.day.name && <h2 className="day-title">{day.day.name}</h2>}
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
            width: `${eventOnGrid.width * 100}%`,
            left: `${eventOnGrid.getInnerLeftOffset() * 100}%`,
          }}
        >
          <Link href={`/kuenstlerinnen/${eventOnGrid.artist.code}`}>
            {eventOnGrid.artist.name}
          </Link>
          <div className="symbols-row">
            {eventOnGrid.event.attributes.mit_gebardensprache && (
              <Image
                src="/gebaerdensprache.png"
                alt="Symbol Gebärdensprache"
                height={25}
                width={25}
              />
            )}
            {eventOnGrid.event.attributes.mit_kurzvortrag && (
              <Image
                src="/kurzvortrag.png"
                alt="Symbol Kurzvortrag"
                height={25}
                width={25}
              />
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
