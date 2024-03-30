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
    const dbResponse = await get(ref(database, 'appointment/' + id));
    const result = mapAppointment(dbResponse);
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