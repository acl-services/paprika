import React from "react";
import styled from "styled-components";
import Sortable from "../src";
import Input from "../../Input/stories/examples/InputExample";
import Select from "../../Select/stories/examples/SelectExample";

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

  .form-input {
    width: 100%;
  }
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
        <Input
          value={hipsums[index % hipsums.length]}
          css={`
            width: 100%;
          `}
        />
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
