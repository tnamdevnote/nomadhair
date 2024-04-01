import { unixToDateTimeStrings } from "@/lib/utils";
import { getTimeSlot } from "@/server/handler/timeSlotHandler";
import { database } from "@/server/initFirebase";
import { mapAppointment } from "@/server/mapper/appointmentMapper";
import { get, set, ref, remove } from "firebase/database";
import { NextRequest, NextResponse } from "next/server";


export async function PATCH(req: NextRequest) {
    const pathElements = req.nextUrl.pathname.split("/");
    const id = pathElements[pathElements.length - 1]
    const payload = await req.json();
    set(ref(database, 'appointment/' + id), {
        userId: payload.userId,
        timeSlotId: payload.timeSlotId,
        customerDetailId: payload.customerDetailId,
        comment: payload.comment
    });
    const response = new NextResponse(null, {status: 200});
    return response;
}

export async function GET(req: NextRequest) {
    const pathElements = req.nextUrl.pathname.split("/");
    const id = pathElements[pathElements.length - 1]
    const dbResponse = (await get(ref(database, 'appointment/' + id))).val();
    const appointmentObj = mapAppointment(dbResponse);
    const timeSlotObj = await getTimeSlot(appointmentObj.timeSlotId);
    const { date, time } = unixToDateTimeStrings(timeSlotObj.startTime);
    const result = {
        date,
        time,
        userId: appointmentObj.userId,
        address1: appointmentObj.address1,
        address2: appointmentObj.address2,
        city: appointmentObj.city,
        state: appointmentObj.state,
        zip: appointmentObj.zip,
        note: appointmentObj.comment,

    }
    console.log(result)
    const response = NextResponse.json({result}, {status: 200});
    return response;
}

export async function DELETE(req: NextRequest) {
    const pathElements = req.nextUrl.pathname.split("/");
    const id = pathElements[pathElements.length - 1]
    await remove(ref(database, 'appointment/' + id));
    const response = new NextResponse(null, {status: 200});
    return response;
}