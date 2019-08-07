import React from "react";
import { storiesOf } from "@storybook/react";
import Basic from "./examples/Basic";
import Screener from "./examples/Screener";

storiesOf("ProgressAccordion", module).add("Basic", () => <Basic />);
storiesOf("ProgressAccordion/Automation Tests", module).add("Screener", () => <Screener />);
