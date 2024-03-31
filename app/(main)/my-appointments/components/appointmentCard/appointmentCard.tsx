"use client";

import { Card, CardContent, CardFooter } from "@/components/molecules/card";
import { CalendarIcon, ClockIcon, EditIcon } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/molecules/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
  DrawerTitle,
} from "@/components/molecules/drawer";
import { AppointmentForm } from "../appointmentForm/appointmentForm";
import { DialogDescription } from "@radix-ui/react-dialog";

export const AppointmentCard = () => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    window.addEventListener("resize", () => setMatches(media.matches));
    return () =>
      window.removeEventListener("resize", () => setMatches(media.matches));
  }, [matches]);

  const editAppointment = matches ? (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          icon={<EditIcon />}
          variant="ghost"
          size="sm"
          className="flex-1 md:w-32 md:flex-none"
        >
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Appointment</DialogTitle>
          <DialogDescription>
            Change your appointment details.
          </DialogDescription>
        </DialogHeader>
        <AppointmentForm />
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          icon={<EditIcon />}
          variant="ghost"
          size="sm"
          className="flex-1 md:w-32 md:flex-none"
        >
          Edit
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-6">
        <DrawerHeader>
          <DrawerTitle>Edit Appointment</DrawerTitle>
        </DrawerHeader>
        <AppointmentForm />
      </DrawerContent>
    </Drawer>
  );

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
        {editAppointment}
      </CardFooter>
    </Card>
  );
};
