import React from "react";
import Heading from "@paprika/heading";
import ActionBar from "../../src";
import MyFilter from "./MyFilter";
import MySort from "./MySort";
import MyColumns from "./MyColumns";

const filterColumns = [
  {
    id: "goals",
    type: "NUMBER",
    label: "Goals",
  },
  {
    id: "name",
    type: "TEXT",
    label: "Name",
  },
  {
    id: "status",
    type: "TEXT",
    label: "Status",
  },
  { id: "country", label: "Country", type: "TEXT" },
  {
    id: "joinedDate",
    type: "DATE",
    label: "Joined by",
    momentParsingFormat: "MM/DD/YYYY",
  },
  {
    id: "shareable",
    type: "BOOLEAN",
    label: "Shareable",
  },
  {
    id: "level",
    type: "SINGLE_SELECT",
    label: "Level",
  },
];

const data = [
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

export default function App() {
  const [subset, setSubset] = React.useState(data);

  function handleSortResult(sortedData) {
    setSubset(sortedData);
  }

  return (
    <React.Fragment>
      <Heading level={2}>ActionBar showcase</Heading>
      <ActionBar>
        <MyFilter columns={filterColumns} />
        <MySort data={data} columns={filterColumns} onSort={handleSortResult} />
        <MyColumns />
      </ActionBar>

      <div>
        <pre>{JSON.stringify(subset, null, 2)}</pre>
      </div>
    </React.Fragment>
  );
}
