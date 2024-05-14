import { Meta, StoryObj } from "@storybook/react";
import Footer from "./footer";

const meta: Meta<typeof Footer> = {
  title: "Organisms/Footer",
  component: Footer,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cURR8cW2EUkTgpHLf5RiVW/NomadHair?type=design&node-id=31-11761&mode=design&t=gIhuvkWnNQkvRvYW-4",
    },
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;
export const Default: Story = {};
