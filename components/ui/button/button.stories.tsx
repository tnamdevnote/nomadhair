import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cURR8cW2EUkTgpHLf5RiVW/NomadHair?type=design&node-id=14-3411&mode=design&t=KenYMZb4HvGFGrwj-4",
    },
    layout: "centered",
  },
  args: {
    asChild: false,
  },
  argTypes: {
    intent: {
      options: ["primary", "secondary", "tertiary"],
      defaultValue: "primary",
      control: { type: "radio" },
    },
    variant: {
      options: ["contained", "outline", "text", "link"],
      defaultValue: "contained",
      control: { type: "select" },
    },
    size: {
      options: ["default", "lg", "md", "sm"],
      defaultValue: "md",
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    intent: "primary",
    variant: "contained",
  },
  render: ({ variant, intent, size }) => (
    <Button variant={variant} intent={intent} size={size}>
      Call To Action
    </Button>
  ),
};
export const Outline: Story = {
  args: {
    intent: "primary",
    variant: "outline",
  },
  render: ({ variant, intent, size }) => (
    <Button variant={variant} intent={intent} size={size}>
      Call To Action
    </Button>
  ),
};
export const Text: Story = {
  args: {
    intent: "primary",
    variant: "text",
  },
  render: ({ variant, intent, size }) => (
    <Button variant={variant} intent={intent} size={size}>
      Call To Action
    </Button>
  ),
};
export const Link: Story = {
  args: {
    intent: "primary",
    variant: "link",
  },
  render: ({ variant, intent, size }) => (
    <Button variant={variant} intent={intent} size={size}>
      Call To Action
    </Button>
  ),
};
