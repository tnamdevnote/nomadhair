import { Meta, StoryObj } from "@storybook/react";
import Input from "./input";
import { CalendarIcon, KeyIcon, MailIcon, XIcon } from "lucide-react";
import Button from "../button";
import { useState } from "react";

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
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
      description:
        "Custom size props. This property overrides native HTML size attributes on input.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Placeholder",
    size: "md",
  },
};

export const InputAdornments: Story = {
  args: {
    type: "text",
    size: "md",
  },
  render: ({ type, placeholder, size }) => {
    const [textInput, setTextInput] = useState("Remove text input");
    return (
      <div className="flex flex-col gap-4">
        <Input
          type="email"
          placeholder="Enter email"
          size={size}
          before={<MailIcon />}
        />
        <Input
          type="password"
          placeholder="Enter password"
          size={size}
          before={<KeyIcon />}
        />
        <Input
          aria-label="form input"
          type={type}
          size={size}
          placeholder="Type something and remove"
          value={textInput}
          after={
            <Button
              aria-label="clear"
              variant="ghost"
              size="sm"
              icon={<XIcon />}
              className="p-0"
              onClick={() => setTextInput("")}
            />
          }
          onChange={(e) => setTextInput(e.target.value)}
        />
      </div>
    );
  },
};

export const OnError: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
    size: "md",
    value: "This is a password",
    error: true,
  },
};
