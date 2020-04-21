import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "@paprika/button";
import * as Sbook from "storybook/assets/styles/common.styles";
import DataGrid from "../src";

const _DATA_ = [
  {
    country: "Austria",
    name: "Josef Bican ‡",
    goals: 805,
    status: "inactive",
    joined: "12/12/2019",
    description: `Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens furry treats fish.`,
    link: "https://wegalvanize.com",
  },
  {
    country: "Brazil",
    name: "Romário",
    goals: 772,
    status: "inactive",
    joined: "08/11/2019",
    description: `Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens furry treats fish.`,
    link: "https://wegalvanize.com",
  },
  {
    country: "Brazil",
    name: "Pelé",
    goals: 767,
    status: "inactive",
    joined: "04/01/2014",
    description: `Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens furry treats fish.`,
    link: "https://wegalvanize.com",
  },
];

export function App() {
  const [data, setData] = React.useState(_DATA_);
  const [autofocus, setAutofocus] = React.useState(true);
  const counter = React.useRef(0);

  return (
    <Sbook.Story>
      <p>
        Autofocus will grab the focus after a render happened on the table, there a cases where you wont to have this
        prop enable and you will prefer to control the focus manually
      </p>
      <p>To see how this works:</p>
      <ol>
        <li>Click on any select</li>
        <li>Select if you want to have autofocus enable or not</li>
        <li>Click add row</li>
      </ol>
      <p>
        If you have autofocus enable the DataGrid will reclaim the focus and will focus the latest cell where the focus
        was.
        <br />
        in case you didnt checked the autofocus the table shouldnt claim the focus and the focus should remain on the
        checkbox
      </p>
      autofocus:
      <input
        type="checkbox"
        checked={autofocus}
        onChange={() => {
          setAutofocus(prev => !prev);
        }}
      />
      <br />
      add a row:{" "}
      <Button
        size="small"
        onClick={() => {
          counter.current += 1;
          setData(prevData => {
            return [
              ...prevData,
              {
                country: `Mock ${counter.current}`,
                name: `Mock ${counter.current}`,
                goals: 767,
                status: "inactive",
                joined: "04/01/2014",
                description: `Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth Mittens furry treats fish.`,
                link: "https://wegalvanize.com",
              },
            ];
          });
        }}
      >
        +
      </Button>
      <hr />
      <DataGrid data={data} autofocus={autofocus}>
        <DataGrid.ColumnDefinition header="Name" cell="name" />
      </DataGrid>
    </Sbook.Story>
  );
}

storiesOf("Data Grid / regular", module).add("autofocus", () => <App />);
