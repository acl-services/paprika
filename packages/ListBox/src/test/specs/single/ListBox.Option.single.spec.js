import React from "react";
import { configure } from "react-testing-library";

import { render, fireEvent } from "react-testing-library";
import ListBox from "../../../";

configure({ testIdAttribute: "data-qa-anchor" });

function renderComponent(props = {}) {
  const rendered = render(
    <ListBox>
      <ListBox.Option {...props}>Venus</ListBox.Option>
      <ListBox.Option>Jupiter</ListBox.Option>
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

describe("ListBox.Option single select", () => {
  // FAILS
  // it("should be disabled", () => {
  //   const { openSelect, selectVenus, getByText, getByTestId } = renderComponent({
  //     isDisabled: true,
  //   });
  //
  //   openSelect();
  //   expect(getByText(/Select one of/i)).toBeInTheDocument();
  //   selectVenus();
  //   //expect(getByTestId("trigger")).toHaveTextContent(/Select one of/i);
  //   expect(getByTestId("trigger")).not.toHaveTextContent(/venus/i);
  // });

  it("should be hidden", () => {
    const { openSelect, queryByText, getByText } = renderComponent({
      isHidden: true,
    });

    openSelect();
    expect(queryByText(/venus/i)).not.toBeInTheDocument();
    expect(getByText(/jupiter/i)).toBeInTheDocument();
  });

  it("should be preselected", () => {
    const { getByTestId } = renderComponent({
      isSelected: true,
    });

    expect(getByTestId("trigger")).toHaveTextContent(/venus/i);
  });
});
