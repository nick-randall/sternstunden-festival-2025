export const getDayPlus24HourTimeString = (date: string) => {
  const dateObj = new Date(date);
  const day = dateObj.getDay();
  const germanDay = ["SO", "MO", "DI", "MI", "DO", "FR", "SA"][day];

  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${germanDay} ${hours}:${formattedMinutes}`;
};

