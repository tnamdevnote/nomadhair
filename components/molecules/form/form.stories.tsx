import { Meta, StoryObj } from "@storybook/react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
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
import { within, userEvent, expect } from "@storybook/test";
import { useToast } from "../toast";

const meta: Meta<typeof Form> = {
  title: "Molecules/Form",
  component: Form,
  decorators: (Story) => (
    <div className="flex min-h-96 w-full items-center justify-center">
      <Story />
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: () => {
    // define form validation schema
    const formSchema = z.object({
      name: z.string(),
    });
    // Infer types from the formSchema
    const form = useForm<z.infer<typeof formSchema>>({
      defaultValues: {
        name: "",
      },
      // Connect our schema to react-hook-form using zodResolver
      resolver: zodResolver(formSchema),
    });
    const { toast } = useToast();

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
        const res = await new Promise((resolve) => setTimeout(resolve, 2000));
        if (res) {
          throw new Error();
        }
        toast({
          title: "Submitted value",
          description: (
            <pre className="rounded-lg bg-neutral-10 p-6 text-neutral-70 md:w-[340px]">
              <code>{JSON.stringify(values, null, 2)}</code>
            </pre>
          ),
        });
        form.reset();
      } catch (e) {
        console.log(e);
      }
    };
    return (
      <Card>
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
            <Button
              disabled={form.formState.isSubmitting}
              type="submit"
              className="self-end"
            >
              {form.formState.isSubmitting ? "Loading..." : "Submit"}
            </Button>
          </form>
        </Form>
      </Card>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nameInput = canvas.getByLabelText("Name", { selector: "input" });

    expect(nameInput).toBeInTheDocument();

    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, "Taek Been Nam");

    const submitBtn = canvas.getByRole("button", { name: "Submit" });
    await userEvent.click(submitBtn);

    expect(nameInput).not.toHaveTextContent("Taek Been Nam");
  },
};

export const Validation: Story = {
  render: () => {
    // define form validation schema
    const formSchema = z.object({
      name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters long." }),
      email:
        z
          .string({
            required_error: "Email is required.",
          })
          .email({ message: "Please enter valid email." }) || null,
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
    const { toast } = useToast();

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
        const res = await new Promise((resolve) => setTimeout(resolve, 2000));
        if (res) {
          throw new Error();
        }
        toast({
          title: "Submitted value",
          description: (
            <pre className="rounded-lg bg-neutral-10 p-6 text-neutral-70 md:w-[340px]">
              <code className="w-full">{JSON.stringify(values, null, 2)}</code>
            </pre>
          ),
        });
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
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      error={!!fieldState.error}
                      placeholder="Enter email"
                      {...field}
                    />
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nameInput = canvas.getByLabelText("Name", { selector: "input" });
    const emailInput = canvas.getByLabelText("Email", { selector: "input" });

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();

    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, "T");

    await userEvent.clear(emailInput);
    await userEvent.type(emailInput, "This is an email");

    const submitBtn = canvas.getByRole("button", { name: "Submit" });
    await userEvent.click(submitBtn);

    const nameError = canvas.getByText(
      "Name must be at least 2 characters long.",
    );
    const emailError = canvas.getByText("Please enter valid email.");

    expect(nameError).toBeVisible();
    expect(emailError).toBeVisible();

    expect(nameInput).toBeInvalid();
    expect(emailInput).toBeInvalid();
  },
};
