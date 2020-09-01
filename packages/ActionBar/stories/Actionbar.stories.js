import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import ButtonTrigger from "./examples/ButtonTrigger";

const storyName = getStoryName("ActionBar");

storiesOf(`${storyName}/Examples`, module).add("Button Trigger", () => <ButtonTrigger />);
