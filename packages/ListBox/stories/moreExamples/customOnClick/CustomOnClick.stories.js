import React from "react";
import { storiesOf } from "@storybook/react";
import { Frame } from "../../stories.styles";
import CustomOnClick from "./CustomOnClick";

storiesOf("ListBox / more examples", module).add("Custom OnClick", () => (
  <Frame>
    <CustomOnClick />
  </Frame>
));
