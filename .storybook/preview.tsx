import { Story, type Preview } from "@storybook/react";
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";

import "../app/globals.css";
import { poppins, inter } from "../lib/font.ts";

import React from "react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={`${poppins.className} ${inter.className}`}>
        <Story />
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
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
    },
  },
};

export default preview;
