"use client";

import React, { useState } from "react";
import { Popover } from "../popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "@/components/atoms/button";
import { Calendar } from "@/components/atoms/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export function DatePicker() {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="w-full rounded-md border border-neutral-15"
          icon={<CalendarIcon size={16} />}
          variant="outline"
        >
          {date ? format(date, "PPP") : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mt-2">
        <Calendar
          className="rounded-xl border shadow"
          mode="single"
          selected={date || new Date()}
          onSelect={setDate}
        />
      </PopoverContent>
    </Popover>
  );
}
