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
    intent: "primary",
    variant: "contained",
    asChild: false,
    size: "md",
  },
  argTypes: {
    intent: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "radio" },
    },
    variant: {
      options: ["contained", "outline", "text", "link"],
      control: { type: "select" },
    },
    size: {
      options: ["lg", "md", "sm"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
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
    variant: "link",
    asChild: true,
  },
  render: ({ variant, intent, size, asChild }) => (
    <Button variant={variant} intent={intent} size={size} asChild={asChild}>
      <a href="#">Call To Action</a>
    </Button>
  ),
};
