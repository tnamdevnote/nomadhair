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
import { useToast } from "@/components/molecules/toast";
import { FormSchema } from "@/lib/formSchema";
import { cn, formatToDisplayDate, formatToDisplayTime } from "@/lib/utils";
import AppointmentDateTimePicker from "../appointmentDateTimePicker/appointmentDateTimePicker";
import { APPOINTMENT_QUERYResult } from "@/lib/sanity/sanity.types";
import { SplitContainer } from "@/components/templates/container";
import { useRouter } from "next/navigation";

/**
 * Extracted async calls into its own functions to manage them separate from rendering logic.
 * We can potentially make them into server actions.
 */
async function createAppointment(formValues: z.infer<typeof FormSchema>) {
  const res = await fetch("/api/my-appointments", {
    method: "POST",
    body: JSON.stringify({
      ...formValues,
    }),
  });

  return Response.json(res);
}

async function editAppointment(
  formValues: z.infer<typeof FormSchema>,
  appointmentId: string,
) {
  const res = await fetch("/api/my-appointments", {
    method: "PATCH",
    body: JSON.stringify({
      id: appointmentId,
      formValues,
    }),
  });

  return Response.json(res);
}

async function sendEmail(formValues: z.infer<typeof FormSchema>) {
  const { timeslot, address1, address2, city, state, zipCode, comment } =
    formValues;
  const location = [address1, address2, city, state, zipCode].join(", ");
  const res = await fetch("/api/email", {
    method: "POST",
    headers: { "Content-type": "application/json" },

    body: JSON.stringify({
      date: formatToDisplayDate(timeslot.date),
      time: formatToDisplayTime(timeslot.time),
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
  appointment?: APPOINTMENT_QUERYResult[0];
  onClose?: () => void;
}

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
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues:
      mode === "edit" && !!appointment
        ? {
            timeslot: {
              id: appointment.timeslotId,
              date: appointment.date,
              time: appointment.time,
            },
            address1: appointment.address1,
            address2: appointment.address2,
            city: appointment.city,
            state: appointment.state,
            zipCode: appointment.zipCode,
            comment: appointment.comment,
          }
        : INITIAL_FORM_VALUES,
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      mode === "edit" && !!appointment
        ? await editAppointment(values, appointment.id)
        : await createAppointment({ ...values });
      await sendEmail(values);

      onClose ? onClose() : null;
      router.refresh();
      toast({
        title: `Your appointment has been successfully ${mode === "create" ? "booked" : "updated"}!`,
        intent: "success",
      });
      form.reset(INITIAL_FORM_VALUES);
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
        <div className="max-h-[400px] overflow-auto md:max-h-none">
          <SplitContainer className="md:items-start md:p-4">
            <SplitContainer.Left className="w-full">
              <fieldset className="flex-1">
                <legend className="mb-2">Appointment date</legend>
                <FormField
                  control={form.control}
                  name="timeslot"
                  render={() => (
                    <FormItem>
                      <FormLabel className="sr-only">
                        Pick your appointment date
                      </FormLabel>
                      <AppointmentDateTimePicker />
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </fieldset>
            </SplitContainer.Left>
            <SplitContainer.Right>
              <fieldset className="mb-4 flex flex-1 flex-wrap gap-2">
                <legend className="mb-2">Address</legend>
                <FormField
                  control={form.control}
                  name="address1"
                  render={({ field, fieldState }) => (
                    <FormItem className="h-16  w-full">
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
                    <FormItem className="h-16  w-full">
                      <FormLabel className="sr-only">
                        Address details (optional)
                      </FormLabel>
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
                    <FormItem className="h-16  w-full">
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
                    <FormItem className="h-16  flex-1">
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
                    <FormItem className="h-16 flex-1">
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
                <legend className="mb-2">Comment</legend>
                <FormField
                  control={form.control}
                  name="comment"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="sr-only">
                        Comment (optional)
                      </FormLabel>
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
            </SplitContainer.Right>
          </SplitContainer>
        </div>
        <Button
          className="ml-auto"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Processing..." : submitBtnLabel}
        </Button>
      </form>
    </Form>
  );
};
