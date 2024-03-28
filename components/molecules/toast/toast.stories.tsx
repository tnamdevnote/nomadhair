import { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./toast";
import { Button } from "@/components/atoms/button";
import { useToast } from "./use-toast";
import { within, expect, userEvent } from "@storybook/test";

const meta: Meta<typeof Toast> = {
  title: "Molecules/Toast",
  component: Toast,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    intent: "default",
  },
  argTypes: {
    intent: {
      options: ["default", "danger"],
      control: { type: "radio" },
    },
  },
  /**
   * Disabling tests temporarily as there are accessibility issues with radix primitive toast components.
   * Re-implement test once this gets resolved.
   * Find out more here:
   * @link https://github.com/radix-ui/primitives/pull/2595
   */
  tags: ["no-tests"],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: ({ intent }) => {
    const { toast } = useToast();
    return (
      <div className="flex min-h-96 w-full items-center justify-center">
        <Button
          onClick={() => {
            toast({
              title: "Your appointment has been scheduled!",
              description: "Please check your e-mail for confirmation.",
              intent,
            });
          }}
        >
          Show Toast
        </Button>
      </div>
    );
  },
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);
  //   const button = canvas.getByRole("button", { name: "Show Toast" });

  //   expect(button).toBeInTheDocument();
  //   await userEvent.click(button);

  //   const toast = canvas.findByRole("status");
  // },
};
