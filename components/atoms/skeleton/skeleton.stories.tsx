import { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./skeleton";
import { Card, CardContent, CardHeader } from "@/components/molecules/card";

const meta: Meta<typeof Skeleton> = {
  title: "Atoms/Skeleton",
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => (
    <div className="flex w-full items-center gap-4">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div>
        <Skeleton className="mb-2 h-4 w-32 flex-grow" />
        <Skeleton className="h-4 w-32 flex-grow" />
      </div>
    </div>
  ),
};
