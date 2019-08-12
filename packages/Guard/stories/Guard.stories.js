import React from "react";
import { storiesOf } from "@storybook/react";

import BasicStory from "./examples/Basic";
import WithFormStory from "./examples/WithForm";

storiesOf("Guard", module).add("Basic", () => <BasicStory />);
storiesOf("Guard", module).add("With form", () => <WithFormStory />);
