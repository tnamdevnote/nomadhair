import { Meta, StoryObj } from "@storybook/react";
import PageTemplate from ".";
import * as React from "react";

const meta: Meta<typeof PageTemplate> = {
  title: "Templates/PageTemplate",
  component: PageTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cURR8cW2EUkTgpHLf5RiVW/NomadHair?type=design&node-id=14-3607&mode=design&t=HCQxtNJl3gSDcBsd-4",
    },
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof PageTemplate>;

export const Default: Story = {};
