import React from "react";
import Navigation from "../../src";
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

export default function App() {
  return (
    <Navigation>
      <MyFilter columns={filterColumns} />
      <MySort columns={filterColumns} />
      <MyColumns />
    </Navigation>
  );
}
