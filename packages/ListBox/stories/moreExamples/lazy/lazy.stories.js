import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import LazyListBox from "./Lazy";

const storyName = getStoryName("ListBox");

storiesOf(`${storyName}/Examples`, module).add("Lazy ListBox", () => <LazyListBox />);
