import { Meta, StoryObj } from "@storybook/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import { Container } from "@/components/templates/container";

const meta: Meta<typeof Carousel> = {
  title: "Molecules/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  args: {
    orientation: "horizontal",
  },
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: ({ orientation }) => (
    <Container>
      <Carousel orientation={orientation} className="w-full max-w-md">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="flex aspect-square items-center justify-center rounded-lg bg-primary-90 p-6 text-white">
                {index}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  ),
};

export const Responsive: Story = {
  render: ({ orientation }) => (
    <Container>
      <Carousel orientation={orientation} className="w-full max-w-md">
        <CarouselContent className="-ml-4 p-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="flex aspect-square items-center justify-center rounded-lg bg-primary-90 p-6 text-white">
                {index}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: ({ orientation }) => (
    <Container>
      <Carousel orientation={orientation} className="w-full max-w-md">
        <CarouselContent className="-ml-4 p-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="flex aspect-square items-center justify-center rounded-lg bg-primary-90 p-6 text-white">
                {index}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  ),
};
