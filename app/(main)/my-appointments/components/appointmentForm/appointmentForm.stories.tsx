import { Meta, StoryObj } from "@storybook/react";
import { AppointmentForm } from "./appointmentForm";

const meta: Meta<typeof AppointmentForm> = {
  title: "Pages/MyAppointMents/AppointmentForm",
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
    <div className="my-24 max-w-lg">
      <AppointmentForm />
    </div>
  ),
};
