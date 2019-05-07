import React from "react";
import { configure, render, fireEvent } from "react-testing-library";
import ListBox from "../../..";

configure({ testIdAttribute: "data-qa-anchor" });

function renderComponent() {
  const rendered = render(
    <ListBox>
      <ListBox.Group groupId="bigplanets" label="Big-Planets">
        <ListBox.Option>Venus</ListBox.Option>
        <ListBox.Option>Jupiter</ListBox.Option>
      </ListBox.Group>
      <ListBox.Group groupId="smallplanets" label="Small-Planets">
        <ListBox.Option>Mars</ListBox.Option>
        <ListBox.Option>Pluto</ListBox.Option>
      </ListBox.Group>
    </ListBox>
  );
  return {
    ...rendered,
    openSelect: () => {
      fireEvent.click(rendered.getByTestId("trigger"));
    },
    selectVenus: () => {
      fireEvent.click(rendered.getByText(/venus/i));
    },
  };
}

describe("ListBox.Group single select", () => {
  it("should display group names in dropdown", () => {
    const { getByText } = renderComponent();

    expect(getByText(/big-planets/i));
    expect(getByText(/small-planets/i));
  });

  it("should not select group names", () => {
    const { openSelect, getByText, getByTestId } = renderComponent();

    openSelect();
    fireEvent.click(getByText(/big-planets/i));
    fireEvent.click(getByText(/small-planets/i));
    expect(getByTestId("trigger")).toHaveTextContent(/Select one of/i);
  });
});
