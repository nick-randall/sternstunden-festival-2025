export const getReadableDETime = (time: string) => {
  const timeInGermany = new Date(time);
  timeInGermany.setHours(timeInGermany.getHours() + 2);
  const iso = timeInGermany.toISOString();
  const isotime = iso.slice(2, 16);
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
  return `${isotime} ${germanDay}`;
};
