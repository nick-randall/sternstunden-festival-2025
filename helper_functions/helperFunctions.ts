export const getDayPlus24HourTimeString = (date: string) => {
  const dateObj = new Date(date);
  const day = dateObj.getDay();
  const germanDay = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"][day];

  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${germanDay} ${hours}:${formattedMinutes}`;
};