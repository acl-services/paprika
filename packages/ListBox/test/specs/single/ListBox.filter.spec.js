import React from "react";
import { render, fireEvent, configure, waitFor } from "@testing-library/react";
import ListBox from "../../../src";

configure({ testIdAttribute: "data-pka-anchor" });

describe("ListBox.Filter", () => {
  it("should have a filter in dropdown", () => {
    const { getByText, getByTestId } = render(
      <ListBox>
        <ListBox.Filter />
        <ListBox.Option>Venus</ListBox.Option>
        <ListBox.Option>Jupiter</ListBox.Option>
      </ListBox>
    );

    fireEvent.click(getByText(/Select/));
    waitFor(() => {
      expect(getByTestId("list-filter")).toBeInTheDocument();
    });
  });

  it("should display message when filter input does not find a match", () => {
    const { getByTestId, getByText } = render(
      <ListBox isMulti>
        <ListBox.Filter noResultsMessage="No match" />
        <ListBox.Option>Venus</ListBox.Option>
        <ListBox.Option>Jupiter</ListBox.Option>
      </ListBox>
    );

    fireEvent.click(getByText(/Select/));
    fireEvent.change(getByTestId("list-filter-input"), { target: { value: "g" } });
    waitFor(() => {
      expect(getByTestId("no-results")).toBeInTheDocument();
      expect(getByText("No match")).toBeInTheDocument();
    });
  });
});
