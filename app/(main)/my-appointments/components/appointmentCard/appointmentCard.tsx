"use client";

import { Card, CardContent, CardFooter } from "@/components/molecules/card";
import { CalendarIcon, ClockIcon, Edit, EditIcon } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
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
import Image from "next/image";
import cancel_img from "./cancel_img.svg";
import { Appointment } from "@/server/model/appointment";

import React from "react";
import { cn } from "@/lib/utils";

const CancelDialog = ({ children }: { children: React.ReactNode[] }) => {
  const [openDialogButton, cancelAppointmentButton] = children;
  return (
    <Dialog>
      <DialogTrigger asChild>{openDialogButton}</DialogTrigger>
      <DialogContent>
        <div className="flex flex-col items-center gap-4">
          <Image className="my-8" src={cancel_img} width={200} alt="cancel" />
          <DialogHeader>
            <DialogTitle>Cancel appointment</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Would you like to cancel your appointment?
          </DialogDescription>
        </div>
        <DialogFooter className="gap-2">
          <DialogClose asChild>
            <Button variant={"ghost"}>No, keep it.</Button>
          </DialogClose>
          {cancelAppointmentButton}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const EditDialog = ({ children }: { children: React.ReactNode[] }) => {
  const [matches, setMatches] = useState(false);
  const [button, appointmentForm] = children;

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    window.addEventListener("resize", () => setMatches(media.matches));
    return () =>
      window.removeEventListener("resize", () => setMatches(media.matches));
  }, [matches]);

  return matches ? (
    <Dialog>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Appointment</DialogTitle>
          <DialogDescription>
            Change your appointment details.
          </DialogDescription>
        </DialogHeader>
        {appointmentForm}
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer>
      <DrawerTrigger asChild>{button}</DrawerTrigger>
      <DrawerContent className="p-6">
        <DrawerHeader>
          <DrawerTitle>Edit Appointment</DrawerTitle>
        </DrawerHeader>
        {appointmentForm}
      </DrawerContent>
    </Drawer>
  );
};

interface AppointmentCardProps {
  type?: "upcoming" | "past";
  appointment: Appointment;
}

export const AppointmentCard = ({
  type = "upcoming",
  appointment,
}: AppointmentCardProps) => {
  const { timeSlot, address1, city, state, zip, comment } = appointment;

  const date = timeSlot ? new Date(timeSlot.startTime * 1000) : null;
  const time = timeSlot ? new Date(timeSlot.startTime * 1000) : null;

  return (
    <Card className={cn({ "bg-neutral-10 shadow-none": type === "past" })}>
      <CardContent className="flex flex-col gap-4">
        <p className="inline-flex gap-2 text-base font-bold">
          <CalendarIcon />
          {date?.toDateString()}
        </p>
        <p className="inline-flex gap-2 text-base font-bold">
          <ClockIcon />
          {time?.toLocaleTimeString()}
        </p>
        <p className="text-sm">{[address1, city, state, zip].join(", ")}</p>
        {type === "past" ? (
          ""
        ) : (
          <p className="line-clamp-2 overflow-hidden text-ellipsis text-wrap text-sm">
            {comment}
          </p>
        )}
      </CardContent>
      {type === "upcoming" ? (
        <CardFooter className="inline-flex justify-end gap-4">
          <CancelDialog>
            <Button
              variant="ghost"
              size="sm"
              className="flex-1 md:w-32 md:flex-none"
            >
              Cancel
            </Button>
            <Button intent={"danger"}>Yes, cancel it.</Button>
          </CancelDialog>
          <EditDialog>
            <Button size="sm" className="flex-1 md:w-32 md:flex-none">
              Edit
            </Button>
            <AppointmentForm mode="edit" appointment={appointment} />
          </EditDialog>
        </CardFooter>
      ) : null}
    </Card>
  );
};
