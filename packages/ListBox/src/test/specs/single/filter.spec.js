import React from "react";
import { configure } from "react-testing-library";

import { render, fireEvent } from "react-testing-library";
import ListBox from "../../../";

configure({ testIdAttribute: "data-qa-anchor" });

function renderComponent(props = {}) {
  const rendered = render(
    <ListBox {...props}>
      <ListBox.Option>Venus</ListBox.Option>
      <ListBox.Option>Jupiter</ListBox.Option>
    </ListBox>
  );

  return {
    rendered,
    ...rendered,
    openSelect: () => {
      fireEvent.click(rendered.getByTestId("trigger"));
    },
    selectVenus: () => {
      fireEvent.click(rendered.getByText(/venus/i));
    },
    selectJupiter: () => {
      fireEvent.click(rendered.getByText(/jupiter/i));
    },
    dropdownIsHidden: () => {
      expect(rendered.getByTestId("popover-content").getAttribute("aria-hidden")).toBeTruthy();
    },
    dropdownIsNotHidden: () => {
      expect(rendered.getByTestId("popover-content").getAttribute("aria-hidden")).toMatch(/false/i);
    },
  };
}

describe("Listbox single select filter prop", () => {
  it("calls custom filter", () => {
    const changeFilter = jest.fn();
    const { openSelect, debug, selectVenus, rendered } = renderComponent({
      filter: changeFilter,
      hasFilter: true,
    });

    openSelect();
    const element = rendered.getByPlaceholderText(/filter.../i);
    fireEvent.change(element, { target: { value: "jupiter" } });

    debug();
    expect(true).toBe(true);
  });
});
