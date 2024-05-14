import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import { KeyIcon, MailIcon, XIcon } from "lucide-react";
import { Button } from "../button";
import { useState } from "react";
import { within, expect, userEvent } from "@storybook/test";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  args: {
    type: "text",
    error: false,
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
        "Custom size prop. This property overrides native HTML size attributes on input.",
    },
    error: {
      control: "boolean",
      description:
        "A prop that accepts boolean values to indicate error on input",
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

export const InputDecorators: Story = {
  args: {
    type: "text",
    size: "md",
  },
  render: ({ type, placeholder, size }) => {
    const [textInput, setTextInput] = useState("Remove text input");
    return (
      <div className="flex flex-col gap-4 p-8">
        <Input
          type="email"
          placeholder="abcde@email.com"
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputDecoratorBtn = canvas.getByRole("button", { name: /clear/i });
    const inputWithDecorator = canvas.getByRole("textbox", {
      name: "form input",
    });

    expect(inputDecoratorBtn).toBeInTheDocument();
    expect(inputWithDecorator).toHaveValue("Remove text input");
    await userEvent.click(inputDecoratorBtn);
    expect(inputWithDecorator).toHaveValue("");

    await userEvent.type(inputWithDecorator, "Some placeholder text");
    expect(inputWithDecorator).toHaveValue("Some placeholder text");
    expect(inputWithDecorator).toHaveValue();
    await userEvent.tab();
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
