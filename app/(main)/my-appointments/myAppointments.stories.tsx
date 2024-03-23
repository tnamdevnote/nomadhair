import { Meta, StoryObj } from "@storybook/react";
import MyAppointments from "./page";
import PageTemplate from "@/components/templates/pageTemplate";

const meta: Meta<typeof MyAppointments> = {
  title: "Pages/MyAppointments",
  component: MyAppointments,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cURR8cW2EUkTgpHLf5RiVW/NomadHair?type=design&node-id=664-4897&mode=design&t=YvqownauNObC4p76-4",
    },
    layout: "fullscreen",
  },
  render: () => (
    <PageTemplate>
      <MyAppointments />
    </PageTemplate>
  ),
};

export default meta;
type Story = StoryObj<typeof MyAppointments>;

export const Default: Story = {};
