import React from "react";
import { storiesOf } from "@storybook/react";

import ConfirmationExample from "./examples/ConfirmationExample";

storiesOf("confirmation / cypress", module).add("confirmation test", () => <ConfirmationExample />);
