import { Story, type Preview } from "@storybook/react";
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";

import "../app/globals.css";
import { Montserrat, Quicksand } from "next/font/google";
import { Toaster } from "../components/molecules/toast";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

import React from "react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={` ${quicksand.className} ${montserrat.variable}`}>
        <Story />
        <Toaster />
      </div>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
    },
  },
};

export default preview;
