import { Meta, StoryObj } from "@storybook/react";
import { About } from "..";

const meta: Meta<typeof About> = {
  title: "Organisms/Home/About",
  component: About,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cURR8cW2EUkTgpHLf5RiVW/NomadHair?type=design&node-id=14-3607&mode=design&t=HCQxtNJl3gSDcBsd-4",
    },
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof About>;

export const Default: Story = {};
