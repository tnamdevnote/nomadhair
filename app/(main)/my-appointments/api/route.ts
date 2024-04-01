import { database } from "@/server/initFirebase";
import { mapAppointment } from "@/server/mapper/appointmentMapper";
import { get, set, ref } from "firebase/database";
import { v4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";
import { dateTimeToUnixTimeStamp } from "@/lib/utils";
import { DayOfWeek } from "@/server/model/dayOfWeekEnum";
import { createTimeSlot } from "@/server/handler/timeSlotHandler";
import { mapTimeSlot } from "@/server/mapper/timeSlotMapper";

export async function PATCH(req: NextRequest) {
    const payload = await req.json();
    // TODO: create time slot api and ui for this
    const startTime = dateTimeToUnixTimeStamp(payload.date, payload.time);
    const endTime = startTime + 3600 // 1 hour
    const dayOfWeek = DayOfWeek[new Date(startTime).getDay()];
    const timeSlot = mapTimeSlot({
        startTime: startTime,
        endTime: endTime,
        dayOfWeek: dayOfWeek,
        userId: "ba4a497b-ed12-41e2-ae0d-bf52d69f8b4d",
        reserved: true // TODO: implement time slot reservation logic
    })
    const timeSlotId = await createTimeSlot(timeSlot);

    const guid = v4();
    const appointmentObj = mapAppointment(payload);
    appointmentObj.timeSlotId = timeSlotId;

    set(ref(database, 'appointment/' + guid), appointmentObj);
    const response = NextResponse.json(null, {status: 200});
    return response;
}

export async function GET(req: NextRequest) {
    const dbResponse = await get(ref(database, 'appointment/'));
    const result = [];
    for (let item in dbResponse) {
        result.push(mapAppointment(item));
    }
    const response = NextResponse.json({appointments: [...result]}, {status: 200});
    return response;
}