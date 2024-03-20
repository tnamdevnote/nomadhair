import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { PlusIcon, icons } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
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
      options: ["contained", "outline", "ghost"],
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

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
  render: ({ variant, intent, size }) => (
    <Button variant={variant} intent={intent} size={size}>
      Call To Action
    </Button>
  ),
};

export const Icon: Story = {
  render: ({ variant, intent, size }) => (
    <div className="inline-flex gap-4">
      <Button icon={<PlusIcon />} variant={variant} intent={intent} size={size}>
        Call To Action
      </Button>
      <Button
        icon={<PlusIcon />}
        variant={variant}
        intent={intent}
        size={size}
      />
    </div>
  ),
};
