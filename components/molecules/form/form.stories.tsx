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
import { Card } from "../card";
import Separator from "@/components/atoms/separator";

const meta: Meta<typeof Form> = {
  title: "Molecules/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: () => {
    // define form validation schema
    const formSchema = z.object({
      name: z.string().optional(),
      email: z.string().optional(),
    });
    // Infer types from the formSchema
    const form = useForm<z.infer<typeof formSchema>>({
      defaultValues: {
        name: "",
        email: "",
      },
      // Connect our schema to react-hook-form using zodResolver
      resolver: zodResolver(formSchema),
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
        const res = await new Promise((resolve) => setTimeout(resolve, 3000));
        if (!res) {
          throw new Error();
        }
        console.log(values);
      } catch (e) {
        console.log(e);
      }
    };
    return (
      <Card>
        <h2 className="text-lg">Contact Info</h2>
        <Separator />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-56 flex-col gap-8 md:w-96"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      error={!!fieldState.error}
                      placeholder="Enter name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={form.formState.isSubmitting} type="submit">
              {form.formState.isSubmitting ? "Loading..." : "Submit"}
            </Button>
          </form>
        </Form>
      </Card>
    );
  },
};
