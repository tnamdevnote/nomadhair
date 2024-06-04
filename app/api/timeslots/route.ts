import { getAvailableDate } from "@/lib/sanity/client";

export async function GET() {
  const res = await getAvailableDate();
  return Response.json(res, { status: 200 });
}
