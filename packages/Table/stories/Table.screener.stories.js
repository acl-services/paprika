import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";

import { WithZebras, Borders } from "./Table.stories";

const storyName = getStoryName("Table");

storiesOf(`${storyName}`, module).add("Screener", () => (
  <>
    <Borders />
    <br />
    <WithZebras />
  </>
));
