"use client";

import { Calendar } from "@/components/atoms/calendar";
import { formatISO } from "date-fns";
import React, { useState } from "react";
import { mutate } from "swr";
import AppointmentTimeslots from "./appointmentTimeslots";

interface AppointmentDateTimePickerProps {
  availableDates: string[];
}

function AppointmentDateTimePicker({
  availableDates,
}: AppointmentDateTimePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    () => new Date(),
  );

  const handleSelect = (selectedDate: Date | undefined) => {
    setSelectedDate(selectedDate);
    mutate(`${selectedDate}`);
  };

  return (
    <div>
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
      <div className="flex gap-4 p-3">
        <AppointmentTimeslots currentDate={selectedDate} />
      </div>
    </div>
  );
}

export default AppointmentDateTimePicker;
