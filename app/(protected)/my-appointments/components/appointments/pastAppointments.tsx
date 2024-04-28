import { Card, CardContent } from "@/components/molecules/card";
import { CalendarIcon, ClockIcon } from "lucide-react";

import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getAppointments } from "@/lib/sanity/client";

export default async function PastAppointments() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const appointments = await getAppointments(user?.id, "past");

  // TODO: add logic for handling error and empty array state.
  return (
    <>
      {appointments.map(
        ({
          id,
          timeslotId,
          date,
          time,
          address1,
          address2,
          city,
          state,
          zipCode,
        }) => (
          <Card key={id} className="bg-neutral-10 shadow-none">
            <CardContent className="flex flex-col gap-4">
              <p className="inline-flex gap-2 text-base font-bold">
                <CalendarIcon />
                {new Date(date).toDateString()}
              </p>
              <p className="inline-flex gap-2 text-base font-bold">
                <ClockIcon />
                {new Date(`${date} ${time}`).toLocaleTimeString("en-US", {
                  timeStyle: "short",
                })}
              </p>
              <p className="text-sm">
                {[address1, address2, city, state, zipCode]
                  .filter((address) => address)
                  .join(", ")}
              </p>
            </CardContent>
          </Card>
        ),
      )}
    </>
  );
}
