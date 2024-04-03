import { Meta, StoryObj } from "@storybook/react";
import { AppointmentCard } from "..";

/** TODO: Add User Flow test using MSW */

const meta: Meta<typeof AppointmentCard> = {
  title: "Pages/MyAppointments/AppointmentCard",
  component: AppointmentCard,
};

export default meta;
type Story = StoryObj<typeof AppointmentCard>;

export const Default: Story = {
  args: {
    type: "upcoming",
    appointment: {
      userId: "user1",
      timeSlotId: "timeslot1",
      appointmentId: "appointment1",
      address1: "123 Nowhere Street",
      address2: "105",
      city: "Chicago",
      state: "IL",
      zip: "606120",
      comment: "Hi there~!",
      timeSlot: {
        userId: "user1",
        reserved: true,
        dayOfWeek: "tues",
        startTime: 1713286680,
        endTime: 1713290280,
      },
    },
  },
  render: ({ type, appointment }) => (
    <div className="md:w-96">
      <AppointmentCard type={type} appointment={appointment} />
    </div>
  ),
};

// TODO: add tests for loading, empty states.
