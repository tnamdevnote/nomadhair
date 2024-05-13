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
import { useState } from "react";
import { AppointmentForm } from "../appointmentForm/appointmentForm";
import { Button } from "@/components/atoms/button";
import { PlusIcon } from "lucide-react";

/**
 * Renders `<AppointmentForm />` in `<Dialog />`.
 * On mobile view, it renders the form in `<Drawer />`.
 */
export default function NewAppointmentDialog() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <Button
            className="hidden md:absolute md:right-16 md:top-0 md:flex"
            icon={<PlusIcon />}
          >
            New Appointment
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>New Appointment</DialogTitle>
            <DialogDescription>
              Change your appointment details.
            </DialogDescription>
          </DialogHeader>
          <AppointmentForm onClose={() => setDialogOpen(false)} />
        </DialogContent>
      </Dialog>
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
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
            <DrawerTitle>New Appointment</DrawerTitle>
          </DrawerHeader>
          <div className="p-2">
            <AppointmentForm onClose={() => setDrawerOpen(false)} />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
