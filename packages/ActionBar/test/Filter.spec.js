import React from "react";
import { render as renderReactTestingLibrary, configure, fireEvent } from "@testing-library/react";
import L10n from "@paprika/l10n";
import { Filter } from "../src";

configure({ testIdAttribute: "data-pka-anchor" });

const defaultColumns = [
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
    id: "email",
    type: "TEXT",
    label: "Email",
  },
];

const defaultFilters = [
  {
    columnId: "goals",
    rule: "LESS_THAN",
    value: "0",
    filterId: 1,
  },
  {
    columnId: "name",
    rule: "CONTAINS",
    value: "ABC",
    filterId: 2,
  },
  {
    columnId: "joinedDate",
    rule: "IS_BEFORE",
    value: "12/12/2019",
    filterId: 3,
  },
  {
    columnId: "shareable",
    rule: "IS",
    value: true,
    filterId: 4,
  },
];

const noop = () => {};

function render(props = {}) {
  const { columns, onChange, onDeleteFilter, onAddFilter, filters, ...moreProps } = props;
  return renderReactTestingLibrary(
    <L10n>
      <Filter
        columns={columns || defaultColumns}
        onChange={onChange || noop}
        onDeleteFilter={onDeleteFilter || noop}
        onAddFilter={onAddFilter || noop}
        filters={filters || []}
        {...moreProps}
      />
    </L10n>
  );
}

describe("Filter", () => {
  it("displays 0 filters", () => {
    const { queryByTestId, getByTestId } = render();

    expect(queryByTestId("actionBar.filter.filterItem")).not.toBeInTheDocument();
    expect(getByTestId("actionBar.filter.addFilterButton")).toBeInTheDocument();
  });

  it("displays all filters", () => {
    const { getByText, getByDisplayValue } = render({ filters: defaultFilters });

    expect(getByText("4 filters applied")).toBeInTheDocument();

    expect(getByDisplayValue("Goals")).toBeInTheDocument();
    expect(getByDisplayValue("<")).toBeInTheDocument();
    expect(getByDisplayValue("0")).toBeInTheDocument();

    expect(getByDisplayValue("Name")).toBeInTheDocument();
    expect(getByDisplayValue("contains")).toBeInTheDocument();
    expect(getByDisplayValue("ABC")).toBeInTheDocument();

    expect(getByDisplayValue("Joined by")).toBeInTheDocument();
    expect(getByDisplayValue("is before")).toBeInTheDocument();
    expect(getByDisplayValue("December 12, 2019")).toBeInTheDocument();

    expect(getByDisplayValue("Shareable")).toBeInTheDocument();
    expect(getByDisplayValue("true")).toBeInTheDocument();
  });

  it("can update filter", () => {
    const handleChange = jest.fn();
    const { getByDisplayValue } = render({ filters: defaultFilters, onChange: handleChange });

    fireEvent.change(getByDisplayValue("Goals"), { target: { value: "email" } });

    expect(handleChange).toHaveBeenCalledWith({
      filter: {
        columnId: "goals",
        filterId: 1,
        rule: "LESS_THAN",
        value: "0",
      },
      columnId: "email",
    });
  });
});
