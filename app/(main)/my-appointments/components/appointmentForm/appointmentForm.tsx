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
import { useToast } from "@/components/molecules/toast";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useSWR from 'swr';

async function getAppointment(id: string) {
  const res = await fetch(`/my-appointments/api/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch appointment.");
  }

  return res.json();
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

interface AppointmentFormProps {
  id?: string;
  type: 'new' | 'edit';
}

export const AppointmentForm = ({type = 'new'}: AppointmentFormProps) => {

  const { toast } = useToast();
  const [cookies, setCookies, removeCookies] = useCookies(["id"]);
  const { data, isLoading, error } = useSWR('dbe3c254-e02f-4583-b3ea-60819d92237f', getAppointment)

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      date: type === 'new' ? "" : data?.result.date,
      time: type === 'new' ? "" : data?.result.time,
      address1: type === 'new' ? "" : data?.result.address1,
      address2: type === 'new' ? "" : data?.result.address2,
      city: type === 'new' ? "" : data?.result.city,
      state: type === 'new' ? "" : data?.result.state,
      zip: type === 'new' ? "" : data?.result.zip,
      comment: type === 'new' ? "" : data?.result.comment
    },
    resolver: zodResolver(formSchema),
  });


  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const result = await fetch("/my-appointments/api", 
      { 
        method: 'PATCH', 
        body: JSON.stringify({
          ...values,
          userId: cookies.id
        }) // TODO: pass time slot ID intead of time
      });

      if (!result.ok) {
        throw new Error()
      }
      
      // TODO: needs refactor
      await fetch("/my-appointments/api/email/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        // This is a mock data. Replace with proper form values later.
        body: JSON.stringify({
          date: "2023-04-04",
          time: "14:30",
          comment: "This is a test email.",
        }),
      });

      toast({
        title: "Your appointment has been successfully booked!",
        description: (
          <pre className="rounded-lg bg-neutral-10 p-6 text-neutral-70 md:w-[340px]">
            <code className="w-full">{JSON.stringify(values, null, 2)}</code>
          </pre>
        ),
      });
      form.reset({});
    } catch (e) {
      toast({
        title: "Oops! Something went wrong! Please try again.",
        description: "",
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
                  <Input error={!!fieldState.error} type="date" {...field} />
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
                  <Input error={!!fieldState.error} type="time" {...field} />
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
          {form.formState.isSubmitting ? "Processing..." : "Book Appointment"}
        </Button>
      </form>
    </Form>
  );
};
