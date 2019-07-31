import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Collapsible from "../src";

const searchableContent = "The body of the collapsible";
const defaultProps = {
  a11yText: "collapsible section",
  hasOnlyIconToggle: false,
  isCollapsed: false,
  isDisabled: false,
  label: "Click me to show/hide the content",
  iconAlign: "left",
  onClick: () => {},
};

function renderComponent(overrideProps) {
  return render(
    <Collapsible {...defaultProps} {...overrideProps}>
      <p>{searchableContent}</p>
    </Collapsible>
  );
}

describe("Collapsible", () => {
  it("should be expanded", () => {
    const { getByText } = renderComponent();
    expect(getByText(searchableContent)).toBeVisible();
  });

  it("should be collapsed", () => {
    const { queryByText } = renderComponent({ isCollapsed: true });
    expect(queryByText(searchableContent)).not.toBeVisible();
  });

  it("should fire callback when click", () => {
    const onClick = jest.fn();
    const { getByText } = renderComponent({ onClick });
    fireEvent.click(getByText(defaultProps.label));
    expect(onClick).toHaveBeenCalled();
  });

  it("should not include label in button when hasOnlyIconToggle === true", () => {
    const label = <span className="custom-label">my label</span>;
    const { getByRole } = renderComponent({ label, hasOnlyIconToggle: true });
    expect(getByRole("button").querySelector(".custom-label")).not.toBeInTheDocument();
  });

  it("should include label in button when hasOnlyIconToggle === false", () => {
    const label = <span className="custom-label">my label</span>;
    const { getByRole } = renderComponent({ label, hasOnlyIconToggle: false });
    expect(getByRole("button").querySelector(".custom-label")).toBeInTheDocument();
  });

  it("should not fire callback when click label and hasOnlyIconToggle === true", () => {
    const labelText = "my label";
    const label = <span className="custom-label">{labelText}</span>;
    const onClick = jest.fn();
    const { getByText } = renderComponent({ label, hasOnlyIconToggle: true, onClick });
    fireEvent.click(getByText(labelText));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("should fire callback when click label and hasOnlyIconToggle === false", () => {
    const labelText = "my label";
    const label = <span className="custom-label">{labelText}</span>;
    const onClick = jest.fn();
    const { getByText } = renderComponent({ label, hasOnlyIconToggle: false, onClick });
    fireEvent.click(getByText(labelText));
    expect(onClick).toHaveBeenCalled();
  });

  it("should show the expand/collapse icon when collapsed", () => {
    const { container } = renderComponent({ isCollapsed: true });
    expect(container.querySelector(".collapsible--icon-left")).toBeVisible();
  });

  it("should show custom icons", () => {
    const iconExpand = <span className="custom-expand" />;
    const { container } = renderComponent({ iconExpand });
    expect(container.querySelector(".custom-expand")).toBeVisible();
  });

  it("should render operations", () => {
    const operations = <span>operations</span>;
    const { getByText } = renderComponent({ operations });
    expect(getByText(/operations/i)).toBeVisible();
  });
});
