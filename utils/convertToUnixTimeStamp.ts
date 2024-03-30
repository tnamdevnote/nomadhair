export function convertToUnixTimeStamp(date: string, time: string) {
  const combinedDateTimeString = date + "T" + time;
  const dateTime = new Date(combinedDateTimeString);
  const unixTimeStamp = dateTime.getTime() / 1000;
  return unixTimeStamp;
}
