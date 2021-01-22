import React from "react";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import Filter from "../../src";

const noop = () => {};

const defaultColumns = [
  {
    id: "number",
    type: Filter.types.columnTypes.NUMBER,
    label: "Number column",
  },
  {
    id: "text",
    type: Filter.types.columnTypes.TEXT,
    label: "Text column",
  },
  {
    id: "date",
    type: Filter.types.columnTypes.DATE,
    label: "Date column",
    momentParsingFormat: "MM/DD/YYYY",
  },
  {
    id: "boolean",
    type: Filter.types.columnTypes.BOOLEAN,
    label: "Boolean column",
  },
  {
    id: "select",
    type: Filter.types.columnTypes.SINGLE_SELECT,
    label: "Single select column",
  },
];

describe("ActionBar Filter", () => {
  function renderComponent(props) {
    return renderWithL10n(
      <Filter columns={defaultColumns} onAddFilter={noop} onApply={noop} onChangeOperator={noop} {...props} />
    );
  }

  it("should render trigger by default", () => {
    renderComponent();
    screen.getByText("Filter");
  });

  it("should render trigger with count", () => {
    renderComponent({ numberApplied: 1 });
    screen.getByText("1 filter");

    renderComponent({ numberApplied: 2 });
    screen.getByText("2 filters");
  });

  it("should render filters in panel", () => {
    renderComponent({
      numberApplied: 1,
      children: (
        <Filter.Item
          columnId="number"
          id="1"
          index={0}
          type="NUMBER"
          rule="EQUALS"
          value="2"
          onChangeFilter={noop}
          onDeleteFilter={noop}
        />
      ),
    });

    fireEvent.click(screen.getByText("1 filter"));
    screen.getByText("Number column");
    screen.getByText("equals");
    screen.getByDisplayValue("2");
  });

  it("should call onAddFilter", async () => {
    const handleAddFilter = jest.fn();

    renderComponent({
      onAddFilter: handleAddFilter,
    });

    fireEvent.click(screen.getByText("Filter"));
    await waitFor(() => {
      fireEvent.click(screen.getByText("Add filter"));
    });

    expect(handleAddFilter).toHaveBeenCalled();
  });

  it("should call onChangeOperator", async () => {
    const handleChangeOperator = jest.fn();

    renderComponent({
      onChangeOperator: handleChangeOperator,
      children: (
        <>
          <Filter.Item
            columnId="number"
            id="1"
            index={0}
            type="NUMBER"
            rule="EQUALS"
            value="2"
            onChangeFilter={noop}
            onDeleteFilter={noop}
          />
          <Filter.Item
            columnId="text"
            id="2"
            index={1}
            type="TEXT"
            rule="IS"
            value="example"
            onChangeFilter={noop}
            onDeleteFilter={noop}
          />
        </>
      ),
    });

    fireEvent.click(screen.getByText("Filter"));
    await waitFor(() => {
      fireEvent.click(screen.getByText("Or"));
    });

    expect(handleChangeOperator).toHaveBeenCalledWith("or");
  });

  it("should call onClear", async () => {
    const handleClear = jest.fn();

    renderComponent({
      onClear: handleClear,
    });

    fireEvent.click(screen.getByText("Filter"));
    await waitFor(() => {
      fireEvent.click(screen.getByText("Clear"));
    });

    expect(handleClear).toHaveBeenCalled();
  });

  it("should call onCancel", async () => {
    const handleCancel = jest.fn();

    renderComponent({
      onCancel: handleCancel,
    });

    fireEvent.click(screen.getByText("Filter"));
    await waitFor(() => {
      fireEvent.click(screen.getByText("Cancel"));
    });

    expect(handleCancel).toHaveBeenCalled();
  });
});
