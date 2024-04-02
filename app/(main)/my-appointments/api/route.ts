import app, { database } from "@/server/initFirebase";
import { mapAppointment } from "@/server/mapper/appointmentMapper";
import {
  get,
  set,
  ref,
  child,
  query,
  equalTo,
  orderByKey,
  orderByChild,
} from "firebase/database";
import { v4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";
import { dateTimeToUnixTimeStamp } from "@/lib/utils";
import { DayOfWeek } from "@/server/model/dayOfWeekEnum";
import { createTimeSlot } from "@/server/handler/timeSlotHandler";
import { mapTimeSlot } from "@/server/mapper/timeSlotMapper";
import { Appointment } from "@/server/model/appointment";
import { cookies } from "next/headers";

interface Appointments {
  pastAppointments: Appointment[];
  upcomingAppointments: Appointment[];
}

const filterAppointments = async (response: any, userId?: string) => {
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

export async function PATCH(req: NextRequest) {
  const payload = await req.json();
  // TODO: create time slot api and ui for this
  const startTime = dateTimeToUnixTimeStamp(payload.date, payload.time);
  const endTime = startTime + 3600; // 1 hour
  const dayOfWeek = DayOfWeek[new Date(startTime).getDay()];
  const timeSlot = mapTimeSlot({
    startTime: startTime,
    endTime: endTime,
    dayOfWeek: dayOfWeek,
    userId: "ba4a497b-ed12-41e2-ae0d-bf52d69f8b4d",
    reserved: true, // TODO: implement time slot reservation logic
  });
  const timeSlotId = await createTimeSlot(timeSlot);

  const guid = v4();
  const appointmentObj = mapAppointment(payload);
  appointmentObj.timeSlotId = timeSlotId;

  set(ref(database, "appointment/" + guid), appointmentObj);
  const response = NextResponse.json(null, { status: 200 });
  return response;
}

export async function GET(req: NextRequest) {
  // const userId = req.nextUrl.searchParams.get("userId");
  const userId = cookies().get("id");
  const dbResponse = (await get(child(ref(database), "appointment/"))).val();
  const responseBody = await filterAppointments(dbResponse, userId?.value);
  const response = NextResponse.json(responseBody, { status: 200 });
  return response;
}
