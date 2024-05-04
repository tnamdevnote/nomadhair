import { Meta, StoryObj } from "@storybook/react";
import { AppointmentForm } from "./appointmentForm";

const meta: Meta<typeof AppointmentForm> = {
  title: "Pages/MyAppointments/AppointmentForm",
  component: AppointmentForm,
  // decorators: (Story) => (
  //   <div className="flex min-h-96 w-full max-w-2xl items-center justify-center">
  //     <Story />
  //   </div>
  // ),
  parameters: {
    layout: "fullscreen",
  },
  /**
   * Disabling tests temporarily as there are accessibility issues with react-day-picker components.
   * Re-implement test once this gets resolved.
   * https://github.com/gpbl/react-day-picker/issues/1688
   */
  tags: ["no-tests"],
};

export default meta;
type Story = StoryObj<typeof AppointmentForm>;

export const Default: Story = {
  render: () => (
    <div className="mx-auto flex min-h-screen w-full max-w-2xl items-center justify-center p-8 md:w-[672px]">
      <AppointmentForm />
    </div>
  ),
  // TODO: Add interaction testing
};
