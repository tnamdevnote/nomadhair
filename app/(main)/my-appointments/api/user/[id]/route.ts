import { database } from "@/server/initFirebase";
import { mapCustomerDetail } from "@/server/mapper/customerDetailMapper";
import { get, ref, set } from "firebase/database";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    const pathElements = req.nextUrl.pathname.split("/");
    const userId = pathElements[pathElements.length - 1];
    const dbResponse = await get(ref(database, 'customerDetail/' + userId));
    const customerDetail = mapCustomerDetail(dbResponse.val());
    const response = NextResponse.json({customerDetail: customerDetail}, {status: 200});
    console.log(response.body);
    return response;
}