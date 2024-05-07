import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { get, set, ref, child } from "firebase/database";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Convert incoming date string to UTC format. This only returns date portion. */
export function formatToDisplayDate(date: string): string {
  const res = new Date(date).toUTCString().slice(0, 16);

  return res;
}

/** Convert incoming date string to HH:mm AM/PM format*/
export function formatToDisplayTime(time: string): string {
  const res = format(new Date(`${time}`), "p");

  return res;
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
