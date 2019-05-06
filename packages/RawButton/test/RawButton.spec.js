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
  it("should render with default props", () => {
    const { getByText, getByRole, container } = renderComponent();

    expect(getByText(/happy button/i)).toBeInTheDocument();
    expect(getByRole("button")).toBeInTheDocument();
    expect(container.querySelector('[tabindex="0"]')).toBeInTheDocument();
    expect(container.querySelector('[aria-disabled="false"]')).toBeInTheDocument();
  });

  it("should render with custom props", () => {
    const customProps = {
      a11yText: "include me",
      className: "shiny-button",
      isDisabled: true,
      role: "listitem",
      tabIndex: -1,
    };
    const { getByRole, container } = renderComponent(customProps);

    expect(container.querySelector('[aria-label="include me"]')).toBeInTheDocument();
    expect(container.querySelector('[class*="shiny-button"]')).toBeInTheDocument();
    expect(container.querySelector('[aria-disabled="true"]')).toBeInTheDocument();
    expect(getByRole("listitem")).toBeInTheDocument();
    expect(container.querySelector('[tabindex="-1"]')).toBeInTheDocument();
  });

  it("should fire onClick callback when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = renderComponent({ onClick });
    fireEvent.click(getByText(/happy button/i));

    expect(onClick).toHaveBeenCalled();
  });

  it("should fire onClick callback when keypressed", () => {
    const onClick = jest.fn();
    const { getByText } = renderComponent({ onClick });
    const buttonElement = getByText(/happy button/i);
    fireEvent.keyUp(buttonElement, pressEnter);
    fireEvent.keyUp(buttonElement, pressSpace);

    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("should not fire onClick callback when disabled", () => {
    const onClick = jest.fn();
    const { getByText } = renderComponent({ onClick, isDisabled: true });
    const buttonElement = getByText(/happy button/i);
    fireEvent.click(buttonElement);
    fireEvent.keyUp(buttonElement, pressEnter);
    fireEvent.keyUp(buttonElement, pressSpace);

    expect(onClick).not.toHaveBeenCalled();
  });

  it("should propagate click events by default", () => {
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

  it("should not propagate click events when canPropagate=false", () => {
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

  it("should be focussable via ref", () => {
    const buttonRef = React.createRef();
    renderComponent({ ref: buttonRef });
    buttonRef.current.focus();

    expect(document.activeElement.getAttribute("role")).toEqual("button");
  });

  it("should be focussable via callback ref", () => {
    let buttonRef;
    const setRef = component => {
      buttonRef = component;
    };
    renderComponent({ ref: setRef });
    buttonRef.focus();

    expect(document.activeElement.getAttribute("role")).toEqual("button");
  });
});
