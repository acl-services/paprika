import React from "react";
import { storiesOf } from "@storybook/react";
import { select, text, withKnobs } from "@storybook/addon-knobs";
import DateInput from "../src";

storiesOf("DateInput", module)
  .addDecorator(withKnobs)
  .add("Basic", () => {
    const inputProps = {
      size: select("size", ["small", "medium", "large"], "medium"),
      placeholder: text("placeholder", ""),
    };

    return <DateInput {...inputProps} />;
  });
