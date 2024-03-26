import { Meta, StoryObj } from "@storybook/react";
import Input from "./input";
import { CalendarIcon } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: "text",
      description: "HTML input types",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Placeholder",
  },
};
