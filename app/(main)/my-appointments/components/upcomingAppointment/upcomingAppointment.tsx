import React from "react";
import { AppointmentCard } from "../appointmentCard/appointmentCard";

export const UpcomingAppointment = (props: any) => {
  return (
    <section aria-labelledby="upcoming">
      <h2 id="upcoming" className="py-3 text-base font-bold">
        Upcoming
      </h2>
      
      {props.appointments?.map((appointment: any) => {
          return <AppointmentCard props={appointment}/>;
      })}
      
    </section>
  );
};
