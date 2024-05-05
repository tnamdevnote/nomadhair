import { getAvailableTimeSlot } from "@/lib/sanity/client";
import { formatISO } from "date-fns";
import { NextRequest } from "next/server";

/** GET available timeslots for a given date */
export async function GET(
  req: NextRequest,
  { params }: { params: { date: Date } },
) {
  // Convert incoming date value to "YYYY-MM-DD" format.
  const formattedDate = formatISO(new Date(params.date), {
    representation: "date",
  });

  const res = await getAvailableTimeSlot(formattedDate);
  return Response.json(res, { status: 200 });
}
