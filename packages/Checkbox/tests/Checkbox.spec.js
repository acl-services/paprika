import { render } from "@testing-library/react";
import React from "react";
import Checkbox, { checkboxStates } from "../src/Checkbox";

function renderComponent(props = {}) {
  const defaultProps = {
    a11yText: null,
    checkedState: checkboxStates.CHECKED,
    children: null,
    isDisabled: false,
    onChange: () => {},
  };
  return render(<Checkbox {...defaultProps} {...props} />);
}

describe("Checkbox", () => {
  it("Renders with default props", () => {
    const { getByRole } = renderComponent();
    expect(getByRole("checkbox")).toBeInTheDocument();
    expect(getByRole("checkbox")).toHaveAttribute("checked");
  });

  it("Renders checkedState is unchecked", () => {
    const { getByRole } = renderComponent({ checkedState: checkboxStates.UNCHECKED });
    expect(getByRole("checkbox")).not.toHaveAttribute("checked");
  });

  it("Renders checkedState is indeterminate", () => {
    const { getByRole } = renderComponent({ checkedState: checkboxStates.INDETERMINATE });
    expect(getByRole("checkbox").indeterminate).toBe(true);
  });

  it("Renders checkState is disabled", () => {
    const { getByRole } = renderComponent({ isDisabled: true });
    expect(getByRole("checkbox").disabled).toBe(true);
  });
});
