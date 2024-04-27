"use client";

import { Calendar } from "@/components/atoms/calendar";
import { formatISO } from "date-fns";
import React, { useState } from "react";
import useSWR from "swr";

interface NewAppointmentProps {
  availableDates: string[];
}

function NewAppointment({ availableDates }: NewAppointmentProps) {
  const [date, setDate] = useState<Date | undefined>(() => new Date());
  const { data, isLoading, mutate } = useSWR(`${date}`, async () => {
    const res = await fetch(`api/timeslots/${date}`);
    return res.json();
  });

  const handleSelect = (date: Date | undefined) => {
    setDate(date);
    mutate(date);
  };

  console.log(isLoading, data);
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
    </div>
  );
}

export default NewAppointment;
