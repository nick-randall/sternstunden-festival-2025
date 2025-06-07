export const getReadableDETime = (time: string) => {
  const timeInGermany = new Date(time);
  timeInGermany.setHours(timeInGermany.getHours() + 2);
  const iso = timeInGermany.toISOString();
  const isotime = iso.slice(11, 16);
  return isotime;
};

export const getReadableDETimeAndDayAbbr = (time: string) => {
  const timeInGermany = new Date(time);
  timeInGermany.setHours(timeInGermany.getHours() + 2);
  // Use getUTCDay to get the day of the week in UTC
  const day = timeInGermany.getUTCDay();
  const germanDay = ["SO", "MO", "DI", "MI", "DO", "FR", "SA"][day];
  const iso = timeInGermany.toISOString();
  const isotime = iso.slice(11, 16);
  return `${germanDay} ${isotime}`;
};

export const getDayStartTime = (stageWithEvents: StageWithEvents[]): Date => {
  let startDateTime = new Date(0);
  for (const stage of stageWithEvents) {
    for (const event of stage.events) {
      const eventStartDateTime = new Date(event.startDateTime);
      if (eventStartDateTime < startDateTime || startDateTime.getTime() === 0) {
        startDateTime = eventStartDateTime;
      }
    }
  }
  return startDateTime
};

export const getDayEndTime = (stageWithEvents: StageWithEvents[]): Date => {
  let endDateTime = new Date(0);
  for (const stage of stageWithEvents) {
    for (const event of stage.events) {
      const eventEndDateTime = new Date(event.endDateTime);
      if (eventEndDateTime > endDateTime) {
        endDateTime = eventEndDateTime;
      }
    }
  }
  return endDateTime;
};
