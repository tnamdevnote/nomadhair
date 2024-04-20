import { Card, CardContent, CardFooter } from "@/components/molecules/card";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { Button } from "@/components/atoms/button";

import React from "react";
import EditDialog from "../editDialog/editDialog";
import CancelDialog from "../cancelDialog/cancelDialog";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getAppointments } from "@/lib/sanity/client";

export default async function UpcomingAppointments() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const appointments = await getAppointments(user?.id, "upcoming");

  // TODO: add logic for handling error and empty array state.
  return (
    <>
      {appointments.map(
        ({
          id,
          dateTime,
          address1,
          address2,
          city,
          state,
          zipCode,
          comment,
        }) => (
          <Card key={id}>
            <CardContent className="flex flex-col gap-4">
              <p className="inline-flex gap-2 text-base font-bold">
                <CalendarIcon />
                {new Date(dateTime).toDateString()}
              </p>
              <p className="inline-flex gap-2 text-base font-bold">
                <ClockIcon />
                {new Date(dateTime).toLocaleTimeString("en-US", {
                  timeStyle: "short",
                })}
              </p>
              <p className="text-sm">
                {[address1, address2, city, state, zipCode]
                  .filter((address) => address)
                  .join(", ")}
              </p>
              <p className="line-clamp-2 overflow-hidden text-ellipsis text-wrap text-sm">
                {comment}
              </p>
            </CardContent>
            <CardFooter className="inline-flex justify-end gap-4">
              <CancelDialog
                appointmentId={id}
                trigger={
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 md:w-32 md:flex-none"
                  >
                    Cancel
                  </Button>
                }
              />
              <EditDialog
                trigger={
                  <Button size="sm" className="flex-1 md:w-32 md:flex-none">
                    Edit
                  </Button>
                }
              />
            </CardFooter>
          </Card>
        ),
      )}
    </>
  );
}
