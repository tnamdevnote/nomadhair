import { Meta, StoryObj } from "@storybook/react";
import { AppointmentForm } from "./appointmentForm";

const meta: Meta<typeof AppointmentForm> = {
  title: "Pages/MyAppointments/AppointmentForm",
  component: AppointmentForm,
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
type Story = StoryObj<typeof AppointmentForm>;

export const Default: Story = {
  render: () => (
    <div className="my-auto flex min-h-screen w-full max-w-lg items-center justify-center p-8">
      <AppointmentForm />
    </div>
  ),
  // TODO: Add interaction testing
};
