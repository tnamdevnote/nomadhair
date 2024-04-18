import { Meta, StoryObj } from "@storybook/react";
import Header from "../components/organisms/header";
import { within, userEvent, expect } from "@storybook/test";

const meta: Meta<typeof Header> = {
  title: "Organisms/Header",
  component: Header,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/cURR8cW2EUkTgpHLf5RiVW/NomadHair?type=design&node-id=14-3607&mode=design&t=HCQxtNJl3gSDcBsd-4",
    },
    layout: "fullscreen",
  },
  render: () => (
    <div style={{ minHeight: "100px" }}>
      <Header isAuthenticated={true} />
    </div>
  ),
  /** Disabling test due to error related to importing firebase app */
  tags: ["no-tests"],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iphonex",
    },
  },
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);
  //   const mobileNavButton = canvas.getByRole("button", {
  //     name: /Toggle Menu/i,
  //   });

  //   expect(mobileNavButton).toBeInTheDocument();
  //   await userEvent.click(mobileNavButton);

  //   const mobileNavMenu = await canvas.findByRole("navigation");
  //   const navItem = await canvas.findByRole("link", { name: /About/i });
  //   expect(mobileNavMenu).toBeVisible();
  //   expect(navItem).toBeVisible();

  //   await userEvent.click(navItem);
  //   expect(mobileNavMenu).not.toBeVisible();
  // },
};
