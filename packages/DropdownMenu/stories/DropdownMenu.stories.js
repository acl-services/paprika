// import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
// import { DropdownMenuStory } from "./DropdownMenu.stories.styles";
// import DropdownMenuExample from "./examples/DropdownMenuExample";

import ShowcaseStory from "./examples/Showcase";

storiesOf("DropdownMenu", module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory);
