import { Meta, StoryObj } from "@storybook/react";
import HeroSection from "../app/(main)/components/heroSection/heroSection";

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
  /** Disabling the test since current version of storybook does not support dynamic server components.
   * This should be fixed in version 8.
   */
  tags: ["no-tests"],
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  render: () => <HeroSection />,
};
