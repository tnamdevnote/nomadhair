import { Meta, StoryObj } from "@storybook/react";
import Header from "./header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cURR8cW2EUkTgpHLf5RiVW/NomadHair?type=design&node-id=14-3607&mode=design&t=HCQxtNJl3gSDcBsd-4",
    },
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: "Taek",
    },
  },
};
export const LoggedOut: Story = {};
