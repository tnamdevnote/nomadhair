import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { get, set, ref, child } from "firebase/database";
import { mapTimeSlot } from "@/server/mapper/timeSlotMapper";
import { mapAppointment } from "@/server/mapper/appointmentMapper";
import { database } from "@/server/initFirebase";
import { Appointment } from "@/server/model/appointment";

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

export const filterAppointments = async (response: any, userId?: string) => {
  const appointmentIds = Object.keys(response);
  const pastAppointments: Appointment[] = [];
  const upcomingAppointments: Appointment[] = [];
  for (let appointmentId of appointmentIds) {
    if (response[appointmentId].userId !== userId) continue;
    let appointment = mapAppointment(response[appointmentId]);
    appointment.appointmentId = appointmentId;

    let timeSlotResponse = (
      await get(ref(database, "timeSlot/" + appointment.timeSlotId))
    ).val();
    let timeSlot = mapTimeSlot(timeSlotResponse);
    appointment.timeSlot = timeSlot;

    let timeNow = Math.floor(Date.now() / 1000);
    if (timeSlot.startTime < timeNow) {
      pastAppointments.push(appointment);
    } else {
      upcomingAppointments.push(appointment);
    }
  }
  return { pastAppointments, upcomingAppointments };
};
