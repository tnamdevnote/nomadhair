import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

const theme = create({
  base: "light",

  // Brand assets
  brandTitle: "NomadHair",
  // TODO: Replace with real url.
  brandUrl: "https://nomadhair.co/",
  brandImage:
    "https://res.cloudinary.com/dtsdpcbcv/image/upload/v1712891768/logo-light-lg_pmi0xn.svg",
  brandTarget: "_self",

  // Base colors
  colorSecondary: "#3f3d56",

  // UI
  appBg: "#f3f3f6",
  appContentBg: "#FFFFFF",
  appBorderColor: "#e1e1e6",
  appBorderRadius: 16,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#3f3d56",
  textInverseColor: "#f3f3f6",
  textMutedColor: "#262534",

  // Toolbar default and active colors
  barTextColor: "#3f3d56",
  barSelectedColor: "#3f3d56",
  barHoverColor: "#585C6D",
  barBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#636176",
  inputTextColor: "#3f3d56",
  inputBorderRadius: 8,
});

addons.setConfig({
  theme,
  panelPosition: "bottom",
});
