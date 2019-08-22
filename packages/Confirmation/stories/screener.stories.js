import React from "react";
import { storiesOf } from "@storybook/react";
import { Story } from "storybook/assets/styles/common.styles";

import ConfirmationExample from "./examples/ConfirmationExample";

storiesOf("Confirmation / screener", module).add("confirmation test", () => (
  <Story>
    <ConfirmationExample />
  </Story>
));
