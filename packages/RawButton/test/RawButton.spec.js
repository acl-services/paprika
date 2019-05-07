/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

import React from "react";
import { render, fireEvent } from "react-testing-library";
import RawButton from "../src";

const noop = () => {};

const pressEnter = { key: "Enter" };
const pressSpace = { key: " " };

function renderComponent(props = {}) {
  const defaultProps = {
    onClick: noop,
  };

  return render(
    <RawButton {...defaultProps} {...props}>
      {props.children || "happy button"}
    </RawButton>
  );
}

describe("RawButton", () => {
  it("Renders with default props", () => {
    const { getByText, getByRole, container } = renderComponent();

    expect(getByText(/happy button/i)).toBeInTheDocument();
    expect(getByRole("button")).toBeInTheDocument();
    expect(container.querySelector('[tabindex="0"]')).toBeInTheDocument();
    expect(container.querySelector('[aria-disabled="false"]')).toBeInTheDocument();
  });

  it("Renders with custom props", () => {
    const customProps = {
      a11yText: "button which is happy",
      isDisabled: true,
      role: "listitem",
      tabIndex: -1,
    };
    const { getByLabelText, getByRole, container } = renderComponent(customProps);

    expect(getByLabelText("button which is happy")).toBeInTheDocument();
    expect(container.querySelector('[aria-disabled="true"]')).toBeInTheDocument();
    expect(getByRole("listitem")).toBeInTheDocument();
    expect(container.querySelector('[tabindex="-1"]')).toBeInTheDocument();
  });

  it("Fires onClick callback when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = renderComponent({ onClick });
    fireEvent.click(getByText(/happy button/i));

    expect(onClick).toHaveBeenCalled();
  });

  it("Fires onClick callback when keypressed", () => {
    const onClick = jest.fn();
    const { getByText } = renderComponent({ onClick });
    const buttonElement = getByText(/happy button/i);
    fireEvent.keyUp(buttonElement, pressEnter);
    fireEvent.keyUp(buttonElement, pressSpace);

    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("Does not fire onClick callback when disabled", () => {
    const onClick = jest.fn();
    const { getByText } = renderComponent({ onClick, isDisabled: true });
    const buttonElement = getByText(/happy button/i);
    fireEvent.click(buttonElement);
    fireEvent.keyUp(buttonElement, pressEnter);
    fireEvent.keyUp(buttonElement, pressSpace);

    expect(onClick).not.toHaveBeenCalled();
  });

  it("Propagates click events by default", () => {
    const onClick = jest.fn();
    const bubbledClick = jest.fn();
    const { getByText } = render(
      <div onClick={bubbledClick}>
        <RawButton onClick={onClick}>happy button</RawButton>
      </div>
    );
    const buttonElement = getByText(/happy button/i);
    fireEvent.click(buttonElement);

    expect(bubbledClick).toHaveBeenCalled();
  });

  it("Does not propagate click events when canPropagate=false", () => {
    const onClick = jest.fn();
    const bubbledClick = jest.fn();
    const { getByText } = render(
      <div onClick={bubbledClick}>
        <RawButton onClick={onClick} canPropagate={false}>
          happy button
        </RawButton>
      </div>
    );
    const buttonElement = getByText(/happy button/i);
    fireEvent.click(buttonElement);

    expect(bubbledClick).not.toHaveBeenCalled();
  });

  it("Is focussable via ref", () => {
    const buttonRef = React.createRef();
    renderComponent({ ref: buttonRef });
    buttonRef.current.focus();

    expect(document.activeElement.getAttribute("role")).toEqual("button");
  });

  it("Is focussable via callback ref", () => {
    let buttonRef;
    const setRef = component => {
      buttonRef = component;
    };
    renderComponent({ ref: setRef });
    buttonRef.focus();

    expect(document.activeElement.getAttribute("role")).toEqual("button");
  });
});
