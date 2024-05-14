"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/molecules/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/molecules/drawer";
import { useEffect, useState } from "react";
import { AppointmentForm } from "../appointmentForm/appointmentForm";
import { APPOINTMENT_QUERYResult } from "@/lib/sanity/sanity.types";

/**
 * Renders `<AppointmentForm />` in `<Dialog />`.
 * On mobile view, it renders the form in `<Drawer />`.
 */
export default function EditDialog({
  trigger,
  appointment,
}: {
  trigger: React.ReactNode;
  appointment: APPOINTMENT_QUERYResult[0];
}) {
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
      <DialogContent className="max-w-2xl">
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
}
