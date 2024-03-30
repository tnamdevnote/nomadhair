import { database } from "@/server/initFirebase";
import { mapAppointment } from "@/server/mapper/appointmentMapper";
import { get, set, ref } from "firebase/database";
import { v4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
    const payload = await req.json();
    const guid = v4();
    console.log(payload);
    // set(ref(database, 'appointment/' + guid), {
    //     userId: payload.userId,
    //     timeSlotId: payload.timeSlotId,
    //     customerDetailId: payload.customerDetailId,
    //     comment: payload.comment
    // });
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