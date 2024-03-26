import { Meta, StoryObj } from "@storybook/react";
import Label from "./label";
import { useState } from "react";
import { within, expect, userEvent } from "@storybook/test";
import Input from "../input";

const meta: Meta<typeof Label> = {
  title: "Atoms/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => (
    <fieldset className="flex flex-col gap-2">
      <Label htmlFor="username">Username</Label>
      <Input id="username" name="username" placeholder="Enter username" />
    </fieldset>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByLabelText("Username");
    const input = canvas.getByRole("textbox");

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    await userEvent.click(label);
    expect(input).toHaveFocus();
    await userEvent.tab();
  },
};
