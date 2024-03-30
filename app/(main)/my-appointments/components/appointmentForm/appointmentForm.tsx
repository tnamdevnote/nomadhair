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
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  date: z.string().min(1, "Required"),
  time: z.string().min(1, "Required"),
  address1: z.string().min(1, "Required"),
  address2: z.string().optional(),
  city: z.string().max(30).min(2, "State must contain at least 2 characters"),
  state: z.string().length(2, "State must contain exactly 2 characters"),
  zipCode: z.string().length(5, "Zip code must be 5 digits long."),
  note: z.string().max(50).optional(),
});

// const  handleSubmit = async (formData: any) => {
//   console.log(formData);
// }

export const AppointmentForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    // TODO: declaring defaultValues won't correctly validate empty form.
    defaultValues: {
      date: "",
      time: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
    },
    resolver: zodResolver(formSchema),
  });

  const { toast } = useToast();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // submit logic comes here
      fetch("/my-appointments/api", 
      { 
        method: 'PATCH', 
        body: JSON.stringify({
          ...values
        })
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
            Select your appointment date
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
            name="zipCode"
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
            name="note"
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
