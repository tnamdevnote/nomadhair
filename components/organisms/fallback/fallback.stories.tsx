import { Meta, StoryObj } from "@storybook/react";
import Fallback from "./fallback";
import NotFound from "./notfound";
import Error from "./error";

const meta: Meta<typeof Fallback> = {
  title: "Organisms/Fallback",
  component: Fallback,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cURR8cW2EUkTgpHLf5RiVW/NomadHair?type=design&node-id=452-1385&mode=design&t=EF0keZzMIRMZCfPk-4",
    },
    layout: "center",
  },
};

export default meta;
type Story = StoryObj<typeof Fallback>;
export const Status404: Story = {
  args: {
    image: <NotFound className="aspect-auto h-48 lg:h-72" />,
    title: "Oops! Looks like you are lost.",
    body: "The page you are looking for doesn’t exits.",
    buttonText: "Back To Home",
  },
};
export const Status500: Story = {
  args: {
    image: <Error className="aspect-auto h-48 lg:h-72" />,
    title: "Oops! Something went wrong. ",
    body: "Please try again later.",
    buttonText: "Back To Home",
  },
};
