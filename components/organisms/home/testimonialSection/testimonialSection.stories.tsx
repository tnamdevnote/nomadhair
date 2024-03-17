import { Meta, StoryObj } from "@storybook/react";
import TestimonialSection from "./testimonialSection";

const meta: Meta<typeof TestimonialSection> = {
  title: "Organisms/Home/TestimonialSection",
  component: TestimonialSection,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cURR8cW2EUkTgpHLf5RiVW/NomadHair?type=design&node-id=622-2751&mode=design&t=YvqownauNObC4p76-4",
    },
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof TestimonialSection>;

export const Default: Story = {};
