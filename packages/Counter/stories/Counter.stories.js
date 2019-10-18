import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Showcase from "./examples/Showcase";
import SizesTypesExample from "./examples/SizesTypes";
import WithInlineTextExample from "./examples/WithInlineText";

storiesOf("Counter", module)
  .addDecorator(withKnobs)
  .add("Showcase", Showcase);

storiesOf("Counter/Example", module)
  .add("SizesTypesColors", () => <SizesTypesExample />)
  .add("With inline text", () => <WithInlineTextExample />);
