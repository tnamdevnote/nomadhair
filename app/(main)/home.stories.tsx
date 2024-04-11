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
      url: "https://www.figma.com/file/cURR8cW2EUkTgpHLf5RiVW/NomadHair?type=design&node-id=629-4896&mode=design&t=YvqownauNObC4p76-4",
    },
    layout: "fullscreen",
  },
  render: () => (
    <PageTemplate>
      <Home />
    </PageTemplate>
  ),
  /** Disabling test due to error related to importing firebase app */
  tags: ["no-tests"],
};

export default meta;
type Story = StoryObj<typeof Home>;

export const Default: Story = {};
