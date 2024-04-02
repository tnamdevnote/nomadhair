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
    <>
      <Card>
        <div className="flex w-full items-center gap-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-8 w-20 flex-grow" />
        </div>
        <CardContent className="flex flex-col gap-2">
          <Skeleton className="h-6 w-full " />
          <Skeleton className="h-6 w-full " />
          <Skeleton className="h-6 w-full " />
        </CardContent>
      </Card>
    </>
  ),
};
