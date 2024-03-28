import { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverTrigger, PopoverContent } from "./popover";
import Button from "@/components/atoms/button";
import { within, userEvent, expect, screen } from "@storybook/test";

const meta: Meta<typeof Popover> = {
  title: "Molecules/Popover",
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-semibold">Popover content</h4>
          <p className=" text-sm text-neutral-70">
            “Lorem ipsum dolor sit amet, consec tetur adi piscing elit. Praesent
            tellus leo, vesti bulum a ipsum sed, suscipit sodales ex. Vestibulum
            id varius risus. Fusce tempus tellus sed.”
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /Open/i });

    expect(button).toBeInTheDocument();
    await userEvent.click(button);

    /** Ways to test modal in storybook
     * @link https://github.com/storybookjs/storybook/discussions/21971#discussioncomment-6153933
     */
    const popover = screen.getByRole("dialog");
    expect(popover).toBeInTheDocument();
  },
};
