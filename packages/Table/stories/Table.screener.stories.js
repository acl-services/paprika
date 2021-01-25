import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";

import { WithZebras, Borders, WithArrowNavigation } from "./Table.stories";

const storyName = getStoryName("Table");

storiesOf(`${storyName}`, module).add("Screener", () => (
  <>
    <Borders />
    <br />
    <WithZebras />
    <br />
    <WithArrowNavigation />
  </>
));
