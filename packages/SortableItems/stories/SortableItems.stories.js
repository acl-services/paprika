import React from "react";
import { storiesOf } from "@storybook/react";
// import { withKnobs } from "@storybook/addon-knobs";
import { Story } from "storybook/assets/styles/common.styles";
import SortableItems from "../src";

storiesOf("SortableItems", module)
  // .addDecorator(withKnobs)
  .add("Basic", () => (
    <Story>
      <SortableItems>
        <div>Zero</div>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
      </SortableItems>
    </Story>
  ));
