"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { cn } from "@/lib/utils";
import { useToast } from "@/components/molecules/toast";
import { FormSchema } from "@/lib/formSchema";
import AppointmentDateTimePicker from "../appointmentDateTimePicker/appointmentDateTimePicker";
import { format } from "date-fns";

/**
 * Extracted async calls into its own functions to manage them separate from rendering logic.
 * We can potentially make them into server actions.
 */
async function createAppointment(formValues: any) {
  const res = await fetch("/api/my-appointments", {
    method: "POST",
    body: JSON.stringify({
      ...formValues,
    }),
  });

  if (!res.ok) {
    throw new Error();
  }

  return Response.json(res);
}

async function sendEmail(formValues: z.infer<typeof FormSchema>) {
  const { timeslot, address1, address2, city, state, zipCode, comment } =
    formValues;
  const location = [address1, address2, city, state, zipCode].join(", ");
  const res = await fetch("/api/email", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    // This is a mock data. Replace with proper form values later.
    body: JSON.stringify({
      date: new Date(timeslot.date).toUTCString().slice(0, 16),
      time: format(new Date(`${timeslot.date} ${timeslot.time}`), "p"),
      location,
      comment,
    }),
  });

  return Response.json(res);
}

const INITIAL_FORM_VALUES: z.infer<typeof FormSchema> = {
  timeslot: { id: "", date: "", time: "" },
  address1: "",
  address2: "",
  city: "",
  state: "",
  zipCode: "",
  comment: "",
};

interface AppointmentFormProps {
  id?: string;
  mode?: "create" | "edit";
  appointment?: any;
  onClose?: () => void;
}

const AVAILABLE_DATES = ["2024-05-06", "2024-05-02", "2024-05-13"];

/**
 * A client side form component that handles both creating and editing appointments.
 */
export const AppointmentForm = ({
  mode = "create",
  appointment,
  onClose,
}: AppointmentFormProps) => {
  const submitBtnLabel = (mode === "create" ? "Book" : "Edit") + " Appointment";
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: INITIAL_FORM_VALUES,
    // mode === "edit" && !!appointment
    //   ? {
    //       date: appointment.timeSlot
    //         ? unixToDateTimeStrings(appointment.timeSlot?.startTime).date
    //         : "",
    //       time: appointment.timeSlot
    //         ? unixToDateTimeStrings(appointment.timeSlot?.startTime).time
    //         : "",
    //       address1: appointment.address1,
    //       address2: appointment.address2,
    //       city: appointment.city,
    //       state: appointment.state,
    //       zipCode: appointment.zipCode,
    //       comment: appointment.comment,
    //     }
    //   : INITIAL_FORM_VALUES,
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      const res = await createAppointment({ ...values });

      if (res.ok) {
        await sendEmail(values);
        onClose ? onClose() : null;
        toast({
          title: `Your appointment has been successfully ${mode === "create" ? "booked" : "updated"}!`,
          intent: "success",
        });
        form.reset(INITIAL_FORM_VALUES);
      }
    } catch (error) {
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
        className="flex w-full flex-col gap-8"
      >
        <div className="max-h-[400px] overflow-auto p-2 md:max-h-none">
          <div className="flex flex-col gap-2 md:flex-row">
            <fieldset className="flex-1">
              <legend className="mb-2 text-sm font-bold text-primary-100">
                Appointment date
              </legend>
              <FormField
                control={form.control}
                name="timeslot"
                render={() => (
                  <FormItem>
                    <FormLabel className="sr-only">
                      Pick your appointment date
                    </FormLabel>
                    <AppointmentDateTimePicker
                      availableDates={AVAILABLE_DATES}
                    />
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </fieldset>
            <div className="flex flex-1 flex-col">
              <fieldset className="flex flex-col gap-2">
                <legend className="mb-2 text-sm font-bold text-primary-100">
                  Address
                </legend>
                <FormField
                  control={form.control}
                  name="address1"
                  render={({ field, fieldState }) => (
                    <FormItem>
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
                  name="zipCode"
                  render={({ field, fieldState }) => (
                    <FormItem className="col-span-6">
                      <FormLabel className="sr-only">Zip code</FormLabel>
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
                  Comment
                </legend>
                <FormField
                  control={form.control}
                  name="comment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Comment</FormLabel>
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
            </div>
          </div>
        </div>
        <Button
          className="ml-auto"
          type="submit"
          disabled={form.formState.isSubmitting || !form.formState.isValid}
        >
          {form.formState.isSubmitting ? "Processing..." : submitBtnLabel}
        </Button>
      </form>
    </Form>
  );
};
