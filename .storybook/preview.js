import { addParameters, addDecorator } from "@storybook/react";
import { withCssResources } from "@storybook/addon-cssresources";
import { withA11y } from "@storybook/addon-a11y";
import "./reset.scss";

addDecorator(withA11y);
addDecorator(withCssResources);

addParameters({
  previewTabs: {
    canvas: { hidden: true },
  },
  cssresources: [
    {
      id: "Lato",
      code: `<style>body { font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif; }</style>`,
      picked: true,
      hideCode: true,
    },
    {
      id: "IBM Plex",
      code: `<style>body { font-family: "IBM Plex Sans", "Helvetica Neue", Helvetica, Arial, sans-serif; }</style>`,
      picked: false,
      hideCode: true,
    },
  ],
});
