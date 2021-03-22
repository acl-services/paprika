import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import Switch from "../src";

function renderComponent(props = {}) {
  const defaultProps = {
    onChange: () => {},
  };
  const renderedComponent = render(<Switch {...defaultProps} {...props} />);

  return {
    ...renderedComponent,
    switchElement: renderedComponent.getByRole("switch"),
  };
}

describe("Switch", () => {
  it("Renders with default props", () => {
    const { switchElement } = renderComponent();

    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toHaveAttribute("tabindex", "0");
    expect(switchElement).toHaveAttribute("aria-disabled", "false");
    expect(switchElement).toHaveAttribute("aria-checked", "false");
  });

  it("Renders with custom props", () => {
    const customProps = {
      a11yText: "custom label",
      className: "custom-class-name",
      isChecked: true,
      isDisabled: true,
    };
    const { switchElement } = renderComponent(customProps);

    expect(switchElement).toHaveClass(customProps.className);
    expect(switchElement).toHaveAttribute("aria-label", customProps.a11yText);
    expect(switchElement).toHaveAttribute("aria-checked", "true");
    expect(switchElement).toHaveAttribute("aria-disabled", "true");
  });

  it("Fires onChange callback when clicked", () => {
    const handleChange = jest.fn();
    const { switchElement } = renderComponent({ onChange: handleChange });
    fireEvent.click(switchElement);

    expect(handleChange).toHaveBeenCalled();
  });

  it("should not fail any accessibility tests", async () => {
    const { container } = renderComponent({ a11yText: "custom label" });
    expect(await axe(container)).toHaveNoViolations();
  });
});
