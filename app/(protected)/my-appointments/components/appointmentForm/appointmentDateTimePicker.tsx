"use client";

import { Calendar } from "@/components/atoms/calendar";
import { formatISO } from "date-fns";
import React, { useState } from "react";
import useSWR from "swr";

interface AppointmentDateTimePickerProps {
  availableDates: string[];
}

function AppointmentDateTimePicker({
  availableDates,
}: AppointmentDateTimePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const {
    data: availableHours,
    isLoading,
    error,
    mutate,
  } = useSWR(
    selectedDate ? `${selectedDate}` : null,
    async () => {
      const res = await fetch(`api/timeslots/${selectedDate}`);
      return res.json();
    },
    {},
  );

  const handleSelect = (selectedDate: Date | undefined) => {
    setSelectedDate(selectedDate);
    mutate();
  };

  console.log(selectedDate, isLoading, availableHours);
  return (
    <div className="flex h-full flex-col gap-8">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={(selectedDate) => handleSelect(selectedDate)}
        disabled={(selectedDate) => {
          const UTCDate = formatISO(new Date(selectedDate), {
            representation: "date",
          });
          return !availableDates.includes(UTCDate);
        }}
      />
      <div className="border-1 flex flex-grow flex-wrap border">
        {isLoading ? (
          <div>loading...</div>
        ) : (
          availableHours.map((hour: typeof availableHours) => (
            <div key={hour.id}>{hour.start}</div>
          ))
        )}
      </div>
    </div>
  );
}

export default AppointmentDateTimePicker;
