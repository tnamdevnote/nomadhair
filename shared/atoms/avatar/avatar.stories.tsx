import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  args: {
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: ({ size }) => (
    <Avatar size={size}>
      <AvatarImage
        src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=3444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="profile"
      />
      <AvatarFallback />
    </Avatar>
  ),
};

export const Fallback: Story = {
  render: ({ size }) => (
    <Avatar size={size}>
      <AvatarImage src="unknown-path" alt="profile" />
      <AvatarFallback>TN</AvatarFallback>
    </Avatar>
  ),
};
