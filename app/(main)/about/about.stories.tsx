import { Meta, StoryObj } from "@storybook/react";
import About from "./page";
import PageTemplate from "@/components/templates/pageTemplate";

/** TODO: Do more research if this story belongs in app directory */

const meta: Meta<typeof About> = {
  title: "Pages/About",
  component: About,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cURR8cW2EUkTgpHLf5RiVW/NomadHair?type=design&node-id=664-4897&mode=design&t=YvqownauNObC4p76-4",
    },
    layout: "fullscreen",
  },
  render: () => (
    <PageTemplate>
      <About />
    </PageTemplate>
  ),
};

export default meta;
type Story = StoryObj<typeof About>;

export const Default: Story = {};
