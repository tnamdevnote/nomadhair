import { Meta, StoryObj } from "@storybook/react";
import Home from "./page";

const meta: Meta<typeof Home> = {
  title: "Pages/Home",
  component: Home,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cURR8cW2EUkTgpHLf5RiVW/NomadHair?type=design&node-id=629-4896&mode=design&t=YvqownauNObC4p76-4",
    },
    layout: "fullscreen",
  },
  /** Disabling the test since current version of storybook does not support dynamic server components.
   * This should be fixed in version 8.
   */
  tags: ["no-tests"],
};

export default meta;
type Story = StoryObj<typeof Home>;

export const Default: Story = {};
