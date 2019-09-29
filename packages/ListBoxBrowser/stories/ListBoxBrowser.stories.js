import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import { storiesOf } from "@storybook/react";
import ListBoxBrowser from "../src";
import data from "../test/fixtures";

storiesOf("ListBoxBrowser", module).add("Showcase", () => (
  <Story>
    <ListBoxBrowser data={data} />
  </Story>
));
