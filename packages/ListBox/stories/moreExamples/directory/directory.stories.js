import React from "react";
import { storiesOf } from "@storybook/react";
import ListBox from "../../../src";

function App() {
  return (
    <ListBox>
      <ListBox.Filter />
      <ListBox.Option>option 1</ListBox.Option>
      <ListBox.Option>option 2</ListBox.Option>
      <ListBox.Option>option 3</ListBox.Option>
    </ListBox>
  );
}

storiesOf("ListBox / Lazy", module).add("Directory", () => <App />);
