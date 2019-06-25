import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { Story } from "storybook/assets/styles/common.styles";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Example from "./SwitchExample";

storiesOf("Switch", module)
  .addDecorator(withKnobs)
  .add("Showcase", () => {
    return (
      <Example
        a11yText={text("a11yText", "")}
        canPropagate={boolean("canPropagate", true)}
        isDisabled={boolean("isDisabled", false)}
        size={select("size", ShirtSizes.DEFAULT, "medium")}
      />
    );
  })
  .add("Switch sizes", () => {
    return (
      <Story>
        <h4>
          <code>size=&quot;small&quot;</code>
        </h4>
        <Example size="small" />
        <p />
        <h4>
          <code>size=&quot;medium&quot;</code>
        </h4>
        <Example size="medium" />
        <p />
        <h4>
          <code>size=&quot;large&quot;</code>
        </h4>
        <Example size="large" />
      </Story>
    );
  })
  .add("Disabled switch", () => {
    return (
      <Story>
        <h4>
          <code>isDisabled value={false}</code>
        </h4>
        <Example isDisabled value={false} />
        <p />
        <h4>
          <code>isDisabled value={true}</code>
        </h4>
        <Example isDisabled value />
      </Story>
    );
  });
