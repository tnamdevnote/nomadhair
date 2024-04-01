import React from "react";
import { AppointmentForm } from "../appointmentForm/appointmentForm";

const NewAppointment = () => {

  return (
    <section aria-labelledby="new-appointment" className="flex h-full flex-col">
      <h2 id="new-appointment" className="py-3 text-base font-bold">
        New Appointment
      </h2>
      <div className="h-full w-full rounded-2xl bg-white p-6 shadow-md">
        <AppointmentForm />
      </div>
    </section>
  );
};

export default NewAppointment;
