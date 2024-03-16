import { Meta, StoryObj } from "@storybook/react";
import AboutSection from "./aboutSection";

const meta: Meta<typeof AboutSection> = {
  title: "Organisms/Home/AboutSection",
  component: AboutSection,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cURR8cW2EUkTgpHLf5RiVW/NomadHair?type=design&node-id=622-2108&mode=design&t=YvqownauNObC4p76-11",
    },
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof AboutSection>;

export const Default: Story = {};
