import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";

import { WithZebras, Borders, WithCustomCellProps } from "./Table.stories";
import { WithUsers } from "./Table.users.stories";
import { WithColSpan } from "./Table.colspans.stories";

const storyName = getStoryName("Table");

storiesOf(`${storyName}`, module).add("Screener", () => (
  <>
    <Borders />
    <br />
    <WithZebras />
    <br />
    <WithCustomCellProps />
    <br />
    <WithUsers />
  </>
));

storiesOf(`${storyName}`, module).add("Screener CellProps", () => <WithCustomCellProps />);

storiesOf(`${storyName}`, module).add("Screener With users", () => <WithUsers />);

storiesOf(`${storyName}`, module).add("Screener With colSpan", () => <WithColSpan />);
