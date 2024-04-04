import app, { database } from "@/server/initFirebase";
import { mapAppointment } from "@/server/mapper/appointmentMapper";
import { get, set, ref, child } from "firebase/database";
import { v4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";
import { dateTimeToUnixTimeStamp } from "@/lib/utils";
import { DayOfWeek } from "@/server/model/dayOfWeekEnum";
import { createTimeSlot } from "@/server/handler/timeSlotHandler";
import { mapTimeSlot } from "@/server/mapper/timeSlotMapper";
import { Appointment } from "@/server/model/appointment";
import { cookies } from "next/headers";

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

export async function GET(req: NextRequest) {
  const userId = cookies().get("id")?.value;
  const dbResponse = (await get(child(ref(database), "appointment/"))).val();
  const responseBody = await filterAppointments(dbResponse, userId);
  const response = NextResponse.json(responseBody, { status: 200 });
  return response;
}

export async function PATCH(req: NextRequest) {
  const userId = cookies().get("id")?.value;
  const payload = await req.json().then((data) => ({ ...data, userId }));
  // TODO: create time slot api and ui for this
  const startTime = dateTimeToUnixTimeStamp(payload.date, payload.time);
  const endTime = startTime + 3600; // 1 hour
  const dayOfWeek = DayOfWeek[new Date(startTime).getDay()];
  const timeSlot = mapTimeSlot({
    userId,
    startTime: startTime,
    endTime: endTime,
    dayOfWeek: dayOfWeek,
    reserved: true, // TODO: implement time slot reservation logic
  });
  const timeSlotId = await createTimeSlot(timeSlot);
  const appointmentObj = mapAppointment(payload);
  appointmentObj.timeSlotId = timeSlotId;

  const appointmentId = appointmentObj.appointmentId ?? v4();
  set(ref(database, "appointment/" + appointmentId), appointmentObj);
  const response = NextResponse.json(null, { status: 200 });
  return response;
}

export async function DELETE(req: NextRequest) {
  const { appointmentId, timeSlotId } = await req.json();
  const appointmentResponse = set(
    ref(database, "appointment/" + appointmentId),
    null,
  );
  const timeSlotResponse = set(ref(database, "timeSlot/" + timeSlotId), null);

  return NextResponse.json(
    { appointmentResponse, timeSlotResponse },
    { status: 200 },
  );
}
