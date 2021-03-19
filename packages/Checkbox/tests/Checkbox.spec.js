import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import Checkbox from "../src/Checkbox";

function renderComponent(props = {}) {
  const defaultProps = {
    a11yText: null,
    checkedState: Checkbox.types.state.CHECKED,
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
    const { getByRole } = renderComponent({ checkedState: Checkbox.types.state.UNCHECKED });
    expect(getByRole("checkbox")).not.toHaveAttribute("checked");
  });

  it("Renders checkedState is indeterminate", () => {
    const { getByRole } = renderComponent({ checkedState: Checkbox.types.state.INDETERMINATE });
    expect(getByRole("checkbox").indeterminate).toBe(true);
  });

  it("Renders checkState is disabled", () => {
    const { getByRole } = renderComponent({ isDisabled: true });
    expect(getByRole("checkbox").disabled).toBe(true);
  });

  it("should not fail any accessibility tests", async () => {
    const { container } = renderComponent();
    // Checkbox component is isolated and is not associated with label
    expect(
      await axe(container, {
        rules: {
          label: { enabled: false },
        },
      })
    ).toHaveNoViolations();
  });
});
