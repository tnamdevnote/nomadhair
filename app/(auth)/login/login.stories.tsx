import { Meta, StoryObj } from "@storybook/react";
import Login from "./page";
import PageTemplate from "@/components/templates/pageTemplate";

const meta: Meta<typeof Login> = {
  title: "Pages/Login",
  component: Login,
  tags: ["no-tests"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cURR8cW2EUkTgpHLf5RiVW/NomadHair?type=design&node-id=697-4904&mode=design&t=aPgvYbeiZPF9N8Fj-4",
    },
    layout: "fullscreen",
  },
  render: () => (
    <PageTemplate type="header">
      <Login />
    </PageTemplate>
  ),
};

export default meta;
type Story = StoryObj<typeof Login>;

export const Default: Story = {};
