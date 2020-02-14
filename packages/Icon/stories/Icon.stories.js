import React from "react";
import { storiesOf } from "@storybook/react";
import Test from "./examples/Test";
import AllIcons from "./examples/AllIcons";

storiesOf("Icon", module).add("Test", () => <Test />);
storiesOf("Icon", module).add("All icons exposed", () => <AllIcons />);
