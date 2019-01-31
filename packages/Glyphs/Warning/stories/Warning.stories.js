import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Warning from "../Warning";

storiesOf("Glyphs / Warning", module)
  .add("Basic", () => (
    <Warning
      borderColor="#f4a142"
      fillColor="#f4a142"
      size={40}
    />
  ))
;