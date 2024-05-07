"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/molecules/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/molecules/drawer";
import { useEffect, useState } from "react";
import { AppointmentForm } from "../appointmentForm/appointmentForm";
import { Button } from "@/components/atoms/button";
import { PlusIcon } from "lucide-react";

/**
 * Renders `<AppointmentForm />` in `<Dialog />`.
 * On mobile view, it renders the form in `<Drawer />`.
 */
export default function NewAppointmentDialog({
  trigger,
}: {
  trigger: React.ReactNode;
  appointment?: any;
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
          <DialogTitle>New Appointment</DialogTitle>
          <DialogDescription>
            Change your appointment details.
          </DialogDescription>
        </DialogHeader>
        <AppointmentForm onClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          aria-label="New Appointment"
          icon={<PlusIcon />}
          size="lg"
          className="fixed bottom-12 right-8 shadow-lg shadow-neutral-100/50 md:hidden"
        />
      </DrawerTrigger>
      <DrawerContent className="p-6">
        <DrawerHeader>
          <DrawerTitle>Edit Appointment</DrawerTitle>
        </DrawerHeader>
        <div className="p-2">
          <AppointmentForm onClose={() => setOpen(false)} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
