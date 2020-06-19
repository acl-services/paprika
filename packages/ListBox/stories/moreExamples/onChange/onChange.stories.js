import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import OnChange from "./OnChange";

const storyName = getStoryName("ListBox");

storiesOf(`${storyName}/Examples`, module).add("OnChange ListBox", () => <OnChange />);
