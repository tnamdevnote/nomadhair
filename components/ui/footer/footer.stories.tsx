import { Meta, StoryObj } from "@storybook/react";
import Footer from "./footer";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cURR8cW2EUkTgpHLf5RiVW/NomadHair?type=design&node-id=14-3607&mode=design&t=HCQxtNJl3gSDcBsd-4",
    },
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;
export const Default: Story = {};
