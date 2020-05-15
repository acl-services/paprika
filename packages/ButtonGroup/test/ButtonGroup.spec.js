import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ButtonGroup from "../src";

const noop = () => {};

const defaultChildren = (
  <>
    <ButtonGroup.Item value="1">One</ButtonGroup.Item>
    <ButtonGroup.Item value="2">Two</ButtonGroup.Item>
  </>
);

const selectedChildren = (
  <>
    {defaultChildren}
    <ButtonGroup.Item value="3" defaultIsActive>
      Three
    </ButtonGroup.Item>
  </>
);

const disabledChildren = (
  <>
    {defaultChildren}
    <ButtonGroup.Item value="3" isDisabled>
      Three
    </ButtonGroup.Item>
  </>
);

function renderComponent(props = {}) {
  const defaultProps = {
    children: defaultChildren,
    onChange: noop,
  };

  return render(<ButtonGroup {...defaultProps} {...props} />);
}

describe("ButtonGroup", () => {
  it("Renders with default props", () => {
    const { getByText, container } = renderComponent();

    expect(container.querySelector("button")).toBeInTheDocument();
    expect(container.querySelectorAll("button").length).toBe(2);
    expect(getByText(/one/i)).toBeInTheDocument();
    expect(container.querySelectorAll("[tabindex='0']").length).toBe(1);
    expect(container.querySelectorAll("[tabindex='-1']").length).toBe(1);
  });

  describe("Single select", () => {
    it("Selects item when clicked", () => {
      const { getByText, container } = renderComponent({ children: selectedChildren });

      expect(getByText(/three/i)).toHaveAttribute("aria-pressed", "true");
      expect(container.querySelectorAll("[aria-pressed='false']").length).toBe(2);

      fireEvent.click(getByText(/one/i));
      expect(getByText(/one/i)).toHaveAttribute("aria-pressed", "true");
      expect(container.querySelectorAll("[aria-pressed='false']").length).toBe(2);
    });
  });

  describe("Multi select", () => {
    it("Selects items when clicked", () => {
      const { getByText } = renderComponent({ children: selectedChildren, isMulti: true });

      fireEvent.click(getByText(/one/i));
      fireEvent.click(getByText(/two/i));
      fireEvent.click(getByText(/three/i));
      expect(getByText(/one/i)).toHaveAttribute("aria-pressed", "true");
      expect(getByText(/two/i)).toHaveAttribute("aria-pressed", "true");
      expect(getByText(/three/i)).toHaveAttribute("aria-pressed", "false");
    });
  });

  describe("Disabled", () => {
    it("Does not select items when clicked", () => {
      const { getByText } = renderComponent({ isDisabled: true });

      expect(getByText(/one/i)).toHaveAttribute("aria-pressed", "false");
      fireEvent.click(getByText(/one/i));
      expect(getByText(/one/i)).toHaveAttribute("aria-pressed", "false");
    });

    it("Does not select disabled item when clicked", () => {
      const { getByText } = renderComponent({ children: disabledChildren });

      expect(getByText(/three/i)).toHaveAttribute("aria-pressed", "false");
      fireEvent.click(getByText(/three/i));
      expect(getByText(/three/i)).toHaveAttribute("aria-pressed", "false");
    });
  });
});
