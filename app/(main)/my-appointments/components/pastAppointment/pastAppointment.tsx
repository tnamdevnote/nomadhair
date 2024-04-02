import { Card, CardContent } from "@/components/molecules/card";
import { CalendarIcon, ClockIcon } from "lucide-react";
import React from "react";

const pastApppointmentCard = (props: any) => {
  return (
    <Card className="bg-neutral-10" key={props.appointmentId}>
      <CardContent className="flex flex-col gap-2">
        <p className="inline-flex gap-2 text-base font-bold">
          <CalendarIcon />
          {props.date}
        </p>
        <p className="inline-flex gap-2 text-base font-bold">
          <ClockIcon />
          {props.time}
        </p>
        <p className="text-sm">{props.address}</p>
      </CardContent>
    </Card>
  );
}

export const PastAppointment = (props: any) => {
  return (
    <section aria-labelledby="past" className="mt-8 font-bold">
      <h2 id="past" className="py-3 text-base">
        Past
      </h2>
      <div className="flex h-full flex-col gap-4">
        {/* {props.appointments.map((appointment: any) => {
          return pastApppointmentCard(appointment);
        })} */}
      </div>
    </section>
  );
};
