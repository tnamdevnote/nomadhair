import { Meta, StoryObj } from "@storybook/react";
import HeroSection from "./heroSection";

const meta: Meta<typeof HeroSection> = {
  title: "Pages/Home/HeroSection",
  component: HeroSection,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cURR8cW2EUkTgpHLf5RiVW/NomadHair?type=design&node-id=622-1959&mode=design&t=YvqownauNObC4p76-11",
    },
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {};
