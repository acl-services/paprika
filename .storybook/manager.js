import { addons } from "@storybook/addons";
import paprikaTheme from "./paprikaTheme";

addons.setConfig({
  theme: paprikaTheme,
  showPanel: true,
  panelPosition: "right",
});
