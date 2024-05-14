import { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "./select";

const meta: Meta<typeof Select> = {
  title: "Molecules/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => {
    return (
      <Select>
        <SelectTrigger aria-label="Select">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="Profile">Profile</SelectItem>
          <SelectItem value="My Appointment">My appointments</SelectItem>
          <SelectItem value="Sign Out">Sign Out</SelectItem>
        </SelectContent>
      </Select>
    );
  },
};
