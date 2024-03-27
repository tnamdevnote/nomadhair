import { Meta, StoryObj } from "@storybook/react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { useForm } from "react-hook-form";
import Input from "@/components/atoms/input";
import Button from "@/components/atoms/button";

const meta: Meta<typeof Form> = {
  title: "Molecules/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
};

const formSchema = z.object({
  address1: z.string().min(2).max(50),
  // address2: z.string().min(2).max(50),
  // city: z.string().min(2).max(50),
  // state: z.string().min(2).max(2),
  // zipCode: z.number().min(5).max(5),
});

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: () => {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
      console.log(values);
    };
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="address1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address1</FormLabel>
                <FormControl>
                  <Input placeholder="Address 1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
  },
};
