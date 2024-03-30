import React from "react";
import { Card, CardContent, CardFooter } from "@/components/molecules/card";
import { CalendarIcon, ClockIcon, EditIcon } from "lucide-react";
import { Button } from "@/components/atoms/button";

export const AppointmentCard = () => {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <p className="inline-flex gap-2 text-base font-bold">
          <CalendarIcon />
          Monday, 12 June
        </p>
        <p className="inline-flex gap-2 text-base font-bold">
          <ClockIcon />
          12:30PM
        </p>
        <p className="text-sm">3201 Burton Street SE</p>
        <p className="line-clamp-2 overflow-hidden text-ellipsis text-wrap text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tellus leo, vestibulum a ipsum sed, suscipit sodales ex.{" "}
        </p>
      </CardContent>
      <CardFooter className="inline-flex justify-end gap-4">
        <Button
          variant="ghost"
          size="sm"
          className="flex-1 md:w-32 md:flex-none"
        >
          Cancel
        </Button>
        <Button
          icon={<EditIcon />}
          variant="ghost"
          size="sm"
          className="flex-1 md:w-32 md:flex-none"
        >
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
};
