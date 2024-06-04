"use client";

import { Calendar } from "@/components/atoms/calendar";
import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import AppointmentTimeslots from "./appointmentTimeslots";
import { formatISO } from "date-fns";

function AppointmentDateTimePicker() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    () => new Date(),
  );
  const {
    data: availableDates,
    isLoading,
    error,
  } = useSWR("api/timeslots", async () => {
    const res = await fetch("api/timeslots");
    return res.json();
  });
  console.log(availableDates);

  const handleSelect = (selectedDate: Date | undefined) => {
    setSelectedDate(selectedDate);
    mutate(`${selectedDate}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={(selectedDate) => handleSelect(selectedDate)}
        disabled={(date) => {
          {
            const UTCDate = formatISO(new Date(date), {
              representation: "date",
            });
            return !availableDates.includes(UTCDate);
          }
          // return new Date(date).getTime() < new Date().setHours(0, 0, 0, 0);
        }}
      />
      <AppointmentTimeslots currentDate={selectedDate} />
    </div>
  );
}

export default AppointmentDateTimePicker;
