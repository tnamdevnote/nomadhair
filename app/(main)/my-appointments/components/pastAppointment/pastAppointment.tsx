import { Card, CardContent } from "@/components/molecules/card";
import { CalendarIcon, ClockIcon } from "lucide-react";
import React from "react";

export const PastAppointment = () => {
  return (
    <section aria-labelledby="past" className="mt-8 font-bold">
      <h2 id="past" className="py-3 text-base">
        Past
      </h2>
      <div className="flex h-full flex-col gap-4">
        <Card className="bg-neutral-10">
          <CardContent className="flex flex-col gap-2">
            <p className="inline-flex gap-2 text-base font-bold">
              <CalendarIcon />
              Monday, 12 June
            </p>
            <p className="inline-flex gap-2 text-base font-bold">
              <ClockIcon />
              12:30PM
            </p>
            <p className="text-sm">3201 Burton Street SE</p>
          </CardContent>
        </Card>
        <Card className="bg-neutral-10">
          <CardContent className="flex flex-col gap-2">
            <p className="inline-flex gap-2 text-base font-bold">
              <CalendarIcon />
              Monday, 12 June
            </p>
            <p className="inline-flex gap-2 text-base font-bold">
              <ClockIcon />
              12:30PM
            </p>
            <p className="text-sm">3201 Burton Street SE</p>
          </CardContent>
        </Card>
        <Card className="bg-neutral-10">
          <CardContent className="flex flex-col gap-2">
            <p className="inline-flex gap-2 text-base font-bold">
              <CalendarIcon />
              Monday, 12 June
            </p>
            <p className="inline-flex gap-2 text-base font-bold">
              <ClockIcon />
              12:30PM
            </p>
            <p className="text-sm">3201 Burton Street SE</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
