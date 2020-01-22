import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Showcase from "./examples/Showcase";
import AdditionalExamples from "./examples/AdditionalExamples";

storiesOf("ExternalLink", module)
  .addDecorator(withKnobs)
  .add("Showcase", Showcase)
  .add("Additional Examples", AdditionalExamples);
