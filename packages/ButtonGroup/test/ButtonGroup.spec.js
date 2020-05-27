import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ButtonGroup from "../src";

const pressRight = { keyCode: 39 };
const pressLeft = { keyCode: 37 };
const pressHome = { keyCode: 36 };
const pressEnd = { keyCode: 35 };

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
    <ButtonGroup.Item value="0" isDisabled>
      Zero
    </ButtonGroup.Item>
    {defaultChildren}
    <ButtonGroup.Item value="3" isDisabled>
      Three
    </ButtonGroup.Item>
    <ButtonGroup.Item value="4">Four</ButtonGroup.Item>
    <ButtonGroup.Item value="5" isDisabled>
      Five
    </ButtonGroup.Item>
  </>
);

function renderComponent(props = {}) {
  const defaultProps = {
    children: defaultChildren,
    onChange: () => {},
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

  it("Renders as <span> with default props", () => {
    const { getByText, container } = renderComponent({ isSemantic: false });

    expect(container.querySelector("span[role='button']")).toBeInTheDocument();
    expect(container.querySelectorAll("span[role='button']").length).toBe(2);
    expect(getByText(/one/i)).toBeInTheDocument();
    expect(container.querySelectorAll("[tabindex='0']").length).toBe(1);
    expect(container.querySelectorAll("[tabindex='-1']").length).toBe(1);
  });

  describe("Single select", () => {
    it("Selects item when clicked", () => {
      const onChange = jest.fn();
      const { getByText, container } = renderComponent({ children: selectedChildren, onChange });

      expect(getByText(/three/i)).toHaveAttribute("aria-pressed", "true");
      expect(container.querySelectorAll("[aria-pressed='false']").length).toBe(2);

      fireEvent.click(getByText(/one/i));
      expect(onChange).toHaveBeenCalledWith(["1"]);
      expect(getByText(/one/i)).toHaveAttribute("aria-pressed", "true");
      expect(container.querySelectorAll("[aria-pressed='false']").length).toBe(2);
    });
  });

  describe("Multi select", () => {
    it("Selects items when clicked", () => {
      const onChange = jest.fn();
      const { getByText } = renderComponent({ children: selectedChildren, onChange, isMulti: true });

      fireEvent.click(getByText(/one/i));
      expect(onChange).toHaveBeenCalledWith(["3", "1"]);
      expect(getByText(/one/i)).toHaveAttribute("aria-pressed", "true");

      fireEvent.click(getByText(/two/i));
      expect(onChange).toHaveBeenCalledWith(["3", "1", "2"]);
      expect(getByText(/two/i)).toHaveAttribute("aria-pressed", "true");

      fireEvent.click(getByText(/three/i));
      expect(onChange).toHaveBeenCalledWith(["1", "2"]);
      expect(getByText(/three/i)).toHaveAttribute("aria-pressed", "false");
    });
  });

  describe("Disabled", () => {
    it("Does not select items when clicked", () => {
      const { container, getByText } = renderComponent({ isDisabled: true });

      expect(container.querySelectorAll("[tabindex='0']").length).toBe(0);
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

  describe("Keyboard operation", () => {
    it("Sets focus with arrow keys", () => {
      const { getByText, container } = renderComponent({ children: disabledChildren });
      const firstFocusable = container.querySelector("[tabindex='0']");

      firstFocusable.focus();
      expect(getByText(/one/i)).toHaveFocus();

      fireEvent.keyDown(document.activeElement, pressRight);
      expect(getByText(/two/i)).toHaveFocus();

      fireEvent.keyDown(document.activeElement, pressRight);
      fireEvent.keyDown(document.activeElement, pressRight);
      expect(getByText(/one/i)).toHaveFocus();

      fireEvent.keyDown(document.activeElement, pressLeft);
      expect(getByText(/four/i)).toHaveFocus();
    });

    it("Sets focus with home / end keys", () => {
      const { getByText, container } = renderComponent({ children: disabledChildren });
      const firstFocusable = container.querySelector("[tabindex='0']");

      firstFocusable.focus();
      fireEvent.keyDown(document.activeElement, pressEnd);
      expect(getByText(/four/i)).toHaveFocus();

      fireEvent.keyDown(document.activeElement, pressHome);
      expect(getByText(/one/i)).toHaveFocus();
    });
  });
});
