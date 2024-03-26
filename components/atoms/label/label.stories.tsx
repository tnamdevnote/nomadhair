import { Meta, StoryObj } from "@storybook/react";
import Label from "./label";
import { useState } from "react";
import { within, expect, userEvent } from "@storybook/test";

const meta: Meta<typeof Label> = {
  title: "Atoms/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};
