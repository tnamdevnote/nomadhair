"use client";

import { Button } from "@/components/atoms/button";
import { Input, inputVariants } from "@/components/atoms/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/molecules/form";
import { cn, toDateInputValue } from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/molecules/toast";
import { Appointment } from "@/server/model/appointment";
import { unixToDateTimeStrings } from "@/lib/utils";
import { mutate } from "swr";

/**
 * Extracted async calls into its own functions to manage them separate from rendering logic.
 * We can potentially make them into server actions.
 */
async function patchAppointment(formValues: Partial<Appointment>) {
  const res = await fetch("/my-appointments/api", {
    method: "PATCH",
    body: JSON.stringify({
      ...formValues,
    }), // TODO: pass time slot ID intead of time
  });

  if (!res.ok) {
    throw new Error();
  }

  return Response.json(res);
}

async function sendEmail() {
  const res = await fetch("/my-appointments/api/email/", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    // This is a mock data. Replace with proper form values later.
    body: JSON.stringify({
      date: "2023-04-04",
      time: "14:30",
      comment: "This is a test email.",
    }),
  });

  return Response.json(res);
}

const formSchema = z.object({
  date: z.string().min(1, "Required"),
  time: z.string().min(1, "Required"),
  address1: z.string().min(1, "Required"),
  address2: z.string().optional(),
  city: z.string().max(30).min(2, "State must contain at least 2 characters"),
  state: z.string().length(2, "State must contain exactly 2 characters"),
  zip: z.string().length(5, "Zip code must be 5 digits long."),
  comment: z.string().max(50).optional(),
});

const INITIAL_FORM_VALUES: z.infer<typeof formSchema> = {
  date: "",
  time: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  comment: "",
};

interface AppointmentFormProps {
  id?: string;
  mode?: "create" | "edit";
  appointment?: Appointment;
}

/**
 * A client side form component that handles both creating and editing appointments.
 */
export const AppointmentForm = ({
  mode = "create",
  appointment,
}: AppointmentFormProps) => {
  const submitBtnLabel = (mode === "create" ? "Book" : "Edit") + " Appointment";
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues:
      mode === "edit" && !!appointment
        ? {
            date: appointment.timeSlot
              ? unixToDateTimeStrings(appointment.timeSlot?.startTime).date
              : "",
            time: appointment.timeSlot
              ? unixToDateTimeStrings(appointment.timeSlot?.startTime).time
              : "",
            address1: appointment.address1,
            address2: appointment.address2,
            city: appointment.city,
            state: appointment.state,
            zip: appointment.zip,
            comment: appointment.comment,
          }
        : INITIAL_FORM_VALUES,
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await patchAppointment({
        ...values,
        appointmentId: appointment?.appointmentId ?? undefined,
      });
      await sendEmail();
      // Re-validates the <AppointmentList /> successful submission.
      mutate("/my-appointments/api");
      toast({
        title: "Your appointment has been successfully booked!",
        intent: "success",
      });
      form.reset(INITIAL_FORM_VALUES);

      // TODO: close dialog/drawer upon successful submission.
    } catch (e) {
      toast({
        title: "Oops! Something went wrong! Please try again.",
        intent: "danger",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4"
      >
        <fieldset className="grid grid-cols-6 gap-2">
          <legend className="mb-2 text-sm font-bold text-primary-100">
            Appointment date
          </legend>
          <FormField
            control={form.control}
            name="date"
            render={({ field, fieldState }) => (
              <FormItem className="col-span-3">
                <FormLabel className="sr-only">Select Date</FormLabel>
                <FormControl>
                  <Input
                    className="h-8 md:h-10"
                    error={!!fieldState.error}
                    type="date"
                    min={toDateInputValue(new Date())}
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field, fieldState }) => (
              <FormItem className="col-span-3">
                <FormLabel className="sr-only">Select Time</FormLabel>
                <FormControl>
                  <Input
                    className="h-8 md:h-10"
                    error={!!fieldState.error}
                    type="time"
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>
        <fieldset className="grid grid-cols-6 gap-x-2">
          <legend className="mb-2 text-sm font-bold text-primary-100">
            Address
          </legend>
          <FormField
            control={form.control}
            name="address1"
            render={({ field, fieldState }) => (
              <FormItem className="col-span-6">
                <FormLabel className="sr-only">Address 1</FormLabel>
                <FormControl>
                  <Input
                    className="h-8 md:h-10"
                    error={!!fieldState.error}
                    placeholder="Address 1"
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address2"
            render={({ field, fieldState }) => (
              <FormItem className="col-span-6">
                <FormLabel className="sr-only">Address 2</FormLabel>
                <FormControl>
                  <Input
                    className="h-8 md:h-10"
                    error={!!fieldState.error}
                    placeholder="Address 2"
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field, fieldState }) => (
              <FormItem className="col-span-3">
                <FormLabel className="sr-only">City</FormLabel>
                <FormControl>
                  <Input
                    className="h-8 md:h-10"
                    error={!!fieldState.error}
                    placeholder="City"
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field, fieldState }) => (
              <FormItem className="col-span-3">
                <FormLabel className="sr-only">State</FormLabel>
                <FormControl>
                  <Input
                    className="h-8 md:h-10"
                    error={!!fieldState.error}
                    placeholder="State"
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zip"
            render={({ field, fieldState }) => (
              <FormItem className="col-span-6">
                <FormLabel className="sr-only">Zip Code</FormLabel>
                <FormControl>
                  <Input
                    className="h-8 md:h-10"
                    type="number"
                    error={!!fieldState.error}
                    placeholder="Zip Code"
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>
        <fieldset>
          <legend className="mb-2 text-sm font-bold text-primary-100">
            Note
          </legend>
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Note</FormLabel>
                <FormControl>
                  <textarea
                    className={cn(
                      inputVariants(),
                      "h-16 outline-none focus-visible:ring-2 focus-visible:ring-primary-100 focus-visible:ring-offset-2",
                    )}
                    placeholder="Anything I should know before the visit?"
                    {...field}
                  ></textarea>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="self-end"
        >
          {form.formState.isSubmitting ? "Processing..." : submitBtnLabel}
        </Button>
      </form>
    </Form>
  );
};
