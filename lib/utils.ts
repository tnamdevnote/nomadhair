import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function dateTimeToUnixTimeStamp(date: string, time: string) {
  const combinedDateTimeString = date + "T" + time;
  const dateTime = new Date(combinedDateTimeString);
  const unixTimeStamp = dateTime.getTime() / 1000;
  return unixTimeStamp;
}

export function unixToDateTimeStrings(unixTimeStamp: number) {
  const dateTime = new Date(unixTimeStamp * 1000);
  const date = dateTime.toLocaleDateString();
  const time = dateTime.toLocaleTimeString();

  return {date, time}
}