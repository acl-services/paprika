import React from "react";
import { storiesOf } from "@storybook/react";
import AAA from "./AAA";

export function App() {
  return <AAA />;
}

storiesOf("DataGrid / lazy", module).add("Assests and attributes", () => <App />);
