import React from "react";
import styled from "styled-components";
import Input from "@paprika/input";
import Select from "@paprika/select";
import Sortable from "../src";

export const storyStyles = `
  max-width: 360px;
`;

const hipsums = [
  "Small batch raw denim",
  "Lorem hipsum",
  "Humblebrag narwhal",
  "Gluten-free scenester",
  "Farm-to-table beard oil",
  "Paleo forage",
  "Craft banjo",
  "Sustainable succulents",
];

const selectOptions = [
  <option key="1" value="Dr">
    Dr
  </option>,
  <option key="2" value="Mr">
    Mr
  </option>,
  <option key="3" value="Ms">
    Ms
  </option>,
];

const MultiBox = styled.div`
  display: flex;
  flex-grow: 1;

  > div + div {
    margin-left: 8px;
  }

  select {
    min-width: 4em;
  }

  [data-pka-anchor="input.container"] {
    flex-grow: 1;
  }
`;

const InputBox = styled.div`
  flex-grow: 1;
`;

export function basicChildren(numChildren) {
  const children = [];

  for (let index = 1; index <= numChildren; index++) {
    children.push(
      <Sortable.Item key={index} sortId={index}>
        {hipsums[index % hipsums.length]}
      </Sortable.Item>
    );
  }

  return children;
}

export function longChildren(numChildren) {
  const children = [];

  for (let index = 1; index <= numChildren; index++) {
    children.push(
      <Sortable.Item key={index} sortId={index}>
        {hipsums[index % hipsums.length]}
        &nbsp;
        {hipsums[(index + 2) % hipsums.length]}
        &nbsp;
        {hipsums[(index + 3) % hipsums.length]}
        &nbsp;
        {hipsums[(index + 5) % hipsums.length]}
        &nbsp;
        {hipsums[(index + 7) % hipsums.length]}
      </Sortable.Item>
    );
  }

  return children;
}

export function inputChildren(numChildren) {
  const children = [];

  for (let index = 1; index <= numChildren; index++) {
    children.push(
      <Sortable.Item key={index} sortId={index}>
        <InputBox>
          <Input value={hipsums[index % hipsums.length]} />
        </InputBox>
      </Sortable.Item>
    );
  }

  return children;
}

export function multipleChildren(numChildren) {
  const children = [];

  for (let index = 1; index <= numChildren; index++) {
    children.push(
      <Sortable.Item key={index} sortId={index}>
        <MultiBox>
          <Select>{selectOptions}</Select>
          <Input value={hipsums[index % hipsums.length]} hasClearButton />
        </MultiBox>
      </Sortable.Item>
    );
  }

  return children;
}
