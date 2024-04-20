import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/molecules/dialog";
import { useToast } from "@/components/molecules/toast";
import React, { useState } from "react";
import useSWRMutation from "swr/mutation";
import { Button } from "@/components/atoms/button";
import cancel_img from "./cancel_img.svg";

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

export default function CancelDialog({
  timeSlotId,
  appointmentId,
  trigger,
}: CancelDialogProps) {
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
}
