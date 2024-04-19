"use client";

import { Card, CardContent, CardFooter } from "@/components/molecules/card";
import { CalendarIcon, ClockIcon } from "lucide-react";
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

import React from "react";
import { cn } from "@/lib/utils";
import useSWRMutation from "swr/mutation";
import { useToast } from "@/components/molecules/toast";

const cancelAppointment = async (
  url: string,
  { arg }: { arg: { timeSlotId: string; appointmentId: string } },
) => {
  const res = await fetch(url, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      ...arg,
    }),
  });

  if (!res.ok) {
    throw new Error("Could not delete the appointment. Please try again.");
  }
};

interface CancelDialogProps {
  timeSlotId: string;
  appointmentId: string;
  trigger: React.ReactNode;
}

const CancelDialog = ({
  timeSlotId,
  appointmentId,
  trigger,
}: CancelDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const { trigger: swrTrigger, isMutating } = useSWRMutation(
    "/api/my-appointments",
    cancelAppointment,
  );

  const handleClick = async () => {
    try {
      await swrTrigger({ timeSlotId, appointmentId });
      if (!isMutating) {
        setOpen(false);
        toast({
          title: "Your appointment has been cancelled!",
        });
      }
    } catch (e) {
      toast({
        title: "Oops! Something went wrong! Please try again.",
        intent: "danger",
      });
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <div className="flex flex-col items-center gap-4 py-4">
          <Image className="my-8" src={cancel_img} width={150} alt="cancel" />
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
          <Button disabled={isMutating} intent={"danger"} onClick={handleClick}>
            {isMutating ? "Processing..." : "Yes, cancel it."}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const EditDialog = ({
  trigger,
  appointment,
}: {
  trigger: React.ReactNode;
  appointment: any;
}) => {
  const [matches, setMatches] = useState(false);
  const [open, setOpen] = useState(false);

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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Appointment</DialogTitle>
          <DialogDescription>
            Change your appointment details.
          </DialogDescription>
        </DialogHeader>
        <AppointmentForm
          mode="edit"
          appointment={appointment}
          onClose={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className="p-6">
        <DrawerHeader>
          <DrawerTitle>Edit Appointment</DrawerTitle>
        </DrawerHeader>
        <AppointmentForm
          mode="edit"
          appointment={appointment}
          onClose={() => setOpen(false)}
        />
      </DrawerContent>
    </Drawer>
  );
};

interface AppointmentCardProps {
  type?: "upcoming" | "past";
  appointment: any;
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
          <CancelDialog
            appointmentId={appointment.appointmentId as string}
            timeSlotId={appointment.timeSlotId}
            trigger={
              <Button
                variant="ghost"
                size="sm"
                className="flex-1 md:w-32 md:flex-none"
              >
                Cancel
              </Button>
            }
          />
          <EditDialog
            trigger={
              <Button size="sm" className="flex-1 md:w-32 md:flex-none">
                Edit
              </Button>
            }
            appointment={appointment}
          />
        </CardFooter>
      ) : null}
    </Card>
  );
};
