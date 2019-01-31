import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Star from "../Star";

storiesOf("Glyphs / Star", module)
  .add("Basic", () => (
    <Star
      borderColor="#e5e871"
      fillColor="#faff7a"
      size={40}
    />
  ))
;
