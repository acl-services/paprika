import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import Basic from "./examples/Basic";
import OldRef from "./examples/OldRef";

const storyName = getStoryName("RawButton");

storiesOf(storyName, module).add("Basic", () => <Basic />);

storiesOf(`${storyName}/Backyard/Sandbox`, module).add("Old Ref", () => <OldRef />);
