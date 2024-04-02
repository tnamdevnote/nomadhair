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

export const AppointmentCard = ({appointment}: {appointment: Appointment}) => {
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

  const cancelAppointment = (appointmentId: string) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex-1 md:w-32 md:flex-none"
        >
          Cancel
        </Button>
      </DialogTrigger>
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
          <Button intent={"danger"}>Yes, cancel it.</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );

  const editAppointment = (appointmentId: string) => matches ? (
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
        <AppointmentForm type="edit" id={appointmentId} />
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
        <AppointmentForm type="edit" id={appointmentId}/>
      </DrawerContent>
    </Drawer>
  );

  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <p className="inline-flex gap-2 text-base font-bold">
          <CalendarIcon />
          {/* {props.props.date} */}
        </p>
        <p className="inline-flex gap-2 text-base font-bold">
          <ClockIcon />
          {/* {props.props.time} */}
        </p>
        <p className="text-sm">
          {/* {props.props.address1} */}
          </p>
        <p className="line-clamp-2 overflow-hidden text-ellipsis text-wrap text-sm">
          {/* {props.props.comment}{" "} */}
        </p>
      </CardContent>
      <CardFooter className="inline-flex justify-end gap-4">
        {/* {cancelAppointment(props.props.appointmentId)}
        {editAppointment(props.props.appointmentId)} */}
      </CardFooter>
    </Card>
  );
};
