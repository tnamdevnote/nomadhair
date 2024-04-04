import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function dateTimeToUnixTimeStamp(date: string, time: string) {
  const combinedDateTimeString = date + "T" + time;
  const dateTime = new Date(combinedDateTimeString);
  const unixTimeStamp = dateTime.getTime() / 1000;
  return unixTimeStamp;
}

export function unixToDateTimeStrings(unixTimeStamp: number) {
  const dateTime = new Date(unixTimeStamp * 1000);
  const date = dateTime.toISOString().slice(0, 10);
  const time = dateTime.toTimeString().slice(0, 5);

  return { date, time };
}

export function toDateInputValue(date: Date) {
  const dateArr = new Date(date).toLocaleDateString().split("/");
  const year = dateArr[dateArr.length - 1];
  const month = parseInt(dateArr[0]) < 10 ? "0" + dateArr[0] : dateArr[0];
  const day = parseInt(dateArr[1]) < 10 ? "0" + dateArr[1] : dateArr[1];
  return year + "-" + month + "-" + day;
}
