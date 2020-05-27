import React from "react";
import { storiesOf } from "@storybook/react";
import * as Sbook from "storybook/assets/styles/common.styles";

import { App as Sticky } from "./DataGrid.sticky.stories";
import { App as Simple } from "./DataGrid.simple.stories";
import { App as RowIndicator } from "./DataGrid.rowindicator.stories";

function App() {
  return (
    <React.Fragment>
      <Sbook.Story>
        <h1>DataGrid</h1>
        <h2>Simple with headerA11yText and cellA11yText example</h2>
        <Simple />
        <h2>Basic with Sticky columns</h2>
        <Sticky />
        <h2>With indicator</h2>
        <RowIndicator />
      </Sbook.Story>
    </React.Fragment>
  );
}

storiesOf("DataGrid", module).add("ShowCase", () => <App />);
