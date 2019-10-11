import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import Showcase from "./examples/Showcase";
import InteractiveExample from "./examples/Interactive";
import SizesColorsExample from "./examples/SizesColors";

storiesOf("Pill", module)
  .addDecorator(withKnobs)
  .add("Showcase", Showcase);

storiesOf("Pill/Examples", module)
  .add("Sizes and Colors", () => <SizesColorsExample />)
  .add("Interactive", () => <InteractiveExample />);

storiesOf("Pill/Automation Tests", module).add("Screener", () => <SizesColorsExample />);
