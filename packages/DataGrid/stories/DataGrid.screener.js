import React from "react";
import { storiesOf } from "@storybook/react";
import { App as ZebraStripes } from "./DataGrid.zebra.stories";

storiesOf("DataGrid / screener", module).add("Zebra", () => <ZebraStripes />);
