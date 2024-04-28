"use client";

import { Calendar } from "@/components/atoms/calendar";
import { TIMESLOT_QUERYResult } from "@/lib/sanity/sanity.types";
import { formatISO } from "date-fns";
import React, { useState } from "react";
import useSWR from "swr";

interface AppointmentDateTimePickerProps {
  availableDates: string[];
}

function AppointmentDateTimePicker({
  availableDates,
}: AppointmentDateTimePickerProps) {
  const [date, setDate] = useState<Date | undefined>(() => new Date());
  const {
    data: availableTimeslots,
    isLoading,
    mutate,
  } = useSWR(`${date}`, async () => {
    const res = await fetch(`api/timeslots/${date}`);
    return res.json();
  });

  const handleSelect = (date: Date | undefined) => {
    setDate(date);
    mutate(date);
  };

  console.log(isLoading, availableTimeslots);
  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={(date) => handleSelect(date)}
        disabled={(date) => {
          const UTCDate = formatISO(new Date(date), {
            representation: "date",
          });
          return !availableDates.includes(UTCDate);
        }}
      />
      {availableTimeslots?.map((timeslot: typeof availableTimeslots) => (
        <div key={timeslot.id}>{timeslot.start}</div>
      ))}
    </div>
  );
}

export default AppointmentDateTimePicker;
