import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cURR8cW2EUkTgpHLf5RiVW/NomadHair?type=design&node-id=1373-2386&mode=design&t=Tam1lO5jTVMPDVrw-4",
    },
    layout: "centered",
  },
  args: {
    label: "Label",
    selected: true,
    onClick: () => console.log("click"),
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};
