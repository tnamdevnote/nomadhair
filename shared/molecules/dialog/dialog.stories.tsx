import { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./dialog";
import { Button } from "@/shared/atoms/button";
import { within, userEvent, expect, screen } from "@storybook/test";

const meta: Meta<typeof Dialog> = {
  title: "Molecules/Dialog",
  component: Dialog,
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Show dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmation</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to delete your account? This action cannot be
          undone and you will be unable to recover any data.
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"ghost"}>Cancel</Button>
          </DialogClose>
          <Button intent={"danger"}>Yes, delete it!</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const button = canvas.getByRole("button", { name: "Show dialog" });

    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
  },
};
