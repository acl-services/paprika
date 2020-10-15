import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import ButtonTrigger from "./examples/ButtonTrigger";
import CustomButton from "./examples/CustomButton";

const storyName = getStoryName("ActionBar");

storiesOf(`${storyName}/Examples`, module).add("Button Trigger", () => <ButtonTrigger />);

storiesOf(`${storyName}/Examples`, module).add("Custom Button", () => <CustomButton />);
