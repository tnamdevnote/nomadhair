import { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./calendar";
import { useState } from "react";

const meta: Meta<typeof Calendar> = {
  title: "Atoms/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  render: ({ disabled }) => {
    const [date, setDate] = useState<Date | undefined>(() => new Date());
    return (
      <Calendar
        className="rounded-xl border shadow"
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={disabled}
        footer={date?.toDateString()}
      />
    );
  },
  /**
   * Disabling tests temporarily as there are accessibility issues with react-day-picker components.
   * Re-implement test once this gets resolved.
   * https://github.com/gpbl/react-day-picker/issues/1688
   */
  tags: ["no-tests"],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {};
