"use client";

import { Calendar } from "@/components/atoms/calendar";
import React, { useState } from "react";
import { mutate } from "swr";
import AppointmentTimeslots from "./appointmentTimeslots";

interface AppointmentDateTimePickerProps {
  availableDates?: string[];
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
        disabled={(date) => {
          console.log(date < new Date(), date);
          return new Date(date).getTime() < new Date().setHours(0, 0, 0, 0);
        }}
      />
      <AppointmentTimeslots currentDate={selectedDate} />
    </div>
  );
}

export default AppointmentDateTimePicker;
