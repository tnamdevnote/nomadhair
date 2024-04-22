import { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "./datePicker";

const meta: Meta<typeof DatePicker> = {
  title: "Molecules/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {};
