import { Meta, StoryObj } from "@storybook/react";
import { AppointmentCard } from "..";

/** TODO: Do more research if this story belongs in app directory */

const meta: Meta<typeof AppointmentCard> = {
  title: "Pages/MyAppointments/AppointmentCard",
  component: AppointmentCard,
};

export default meta;
type Story = StoryObj<typeof AppointmentCard>;

export const Default: Story = {};
