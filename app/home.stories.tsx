import { Meta, StoryObj } from "@storybook/react";
import Home from "./page";
import PageTemplate from "@/components/templates/pageTemplate";

/** TODO: Do more research if this story belongs in app directory */

const meta: Meta<typeof Home> = {
  title: "Pages/Home",
  component: Home,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cURR8cW2EUkTgpHLf5RiVW/NomadHair?type=design&node-id=452-1385&mode=design&t=EF0keZzMIRMZCfPk-4",
    },
    layout: "fullscreen",
  },
  render: () => (
    <PageTemplate>
      <Home />
    </PageTemplate>
  ),
};

export default meta;
type Story = StoryObj<typeof Home>;

export const Default: Story = {};
