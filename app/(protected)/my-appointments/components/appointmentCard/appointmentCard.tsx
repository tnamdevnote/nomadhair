import { Card, CardContent, CardFooter } from "@/components/molecules/card";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { Button } from "@/components/atoms/button";

import React from "react";
import { cn } from "@/lib/utils";
import EditDialog from "../editDialog/editDialog";
import CancelDialog from "../cancelDialog/cancelDialog";

interface AppointmentCardProps {
  type?: "upcoming" | "past";
  appointment: any;
}

export async function AppointmentCard({
  type = "upcoming",
  appointment,
}: AppointmentCardProps) {
  const { timeSlot, address1, city, state, zip, comment } = appointment;

  const date = timeSlot ? new Date(timeSlot.startTime * 1000) : null;
  const time = timeSlot ? new Date(timeSlot.startTime * 1000) : null;

  return (
    <Card className={cn({ "bg-neutral-10 shadow-none": type === "past" })}>
      <CardContent className="flex flex-col gap-4">
        <p className="inline-flex gap-2 text-base font-bold">
          <CalendarIcon />
          {date?.toDateString()}
        </p>
        <p className="inline-flex gap-2 text-base font-bold">
          <ClockIcon />
          {time?.toLocaleTimeString()}
        </p>
        <p className="text-sm">{[address1, city, state, zip].join(", ")}</p>
        {type === "past" ? (
          ""
        ) : (
          <p className="line-clamp-2 overflow-hidden text-ellipsis text-wrap text-sm">
            {comment}
          </p>
        )}
      </CardContent>
      {type === "upcoming" ? (
        <CardFooter className="inline-flex justify-end gap-4">
          <CancelDialog
            appointmentId={appointment.appointmentId as string}
            timeSlotId={appointment.timeSlotId}
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
            appointment={appointment}
          />
        </CardFooter>
      ) : null}
    </Card>
  );
}
