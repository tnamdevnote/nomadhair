import { Meta, StoryObj } from "@storybook/react";
import PageTemplate from "./pageTemplate";
import Fallback from "@/components/ui/fallback/fallback";
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

type PageTemplateProps = {
  type?: "default" | "sticky-header" | "basic";
};

function DummyComponent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export const Default: Story = {};
