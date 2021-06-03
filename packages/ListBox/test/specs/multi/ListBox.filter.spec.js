import React from "react";
import { configure, render, fireEvent, waitFor } from "@testing-library/react";
import ListBox from "../../../src";

configure({ testIdAttribute: "data-pka-anchor" });

const childrenContent = [
  <ListBox.Option key="1">Venus</ListBox.Option>,
  <ListBox.Option key="2">Jupiter</ListBox.Option>,
];

function renderComponent(props = {}, children = childrenContent) {
  const rendered = render(
    <ListBox isMulti {...props}>
      {children}
    </ListBox>
  );

  return {
    ...rendered,
    openSelect: () => {
      fireEvent.click(rendered.getByText(/select/i));
    },
  };
}

describe("ListBox.Filter", () => {
  it("should have a filter in dropdown", () => {
    const { getByTestId, openSelect } = renderComponent(null, [<ListBox.Filter key="filter" />, [...childrenContent]]);

    openSelect();
    waitFor(() => {
      expect(getByTestId("list-filter")).toBeInTheDocument();
    });
  });

  it("should display message when filter input does not find a match", () => {
    const { openSelect, getByTestId, getByText } = renderComponent({}, [
      <ListBox.Filter key="filter" noResultsMessage="No match" />,
      [...childrenContent],
    ]);

    openSelect();
    fireEvent.change(getByTestId("list-filter-input"), { target: { value: "g" } });
    waitFor(() => {
      expect(getByTestId("no-results")).toBeInTheDocument();
      expect(getByText("No match")).toBeInTheDocument();
    });
  });
});
