import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";
import { useState } from "react";

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
    label: "Badge",
    selected: false,
    size: "sm",
    onClick: undefined,
  },
  argTypes: {
    label: {
      type: "string",
    },
    selected: {
      control: "boolean",
      if: { arg: "onClick" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    onClick: {
      type: "function",
      description: "Optional click handler. Enables `selected` prop.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

/**
 * Badge with `onClick` prop defined change appearance on focus, hover, and click.
 */
export const Clickable: Story = {
  args: {
    label: "Clickable",
    onClick: () => console.log("clicked"),
  },
  render: ({ label, selected, onClick }) => {
    return <Badge label={label} selected={selected} onClick={onClick} />;
  },
};
