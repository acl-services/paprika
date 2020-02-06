/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "../src";

const noop = () => {};

function renderComponent(props = {}) {
  const defaultProps = {
    onClick: noop,
  };

  return render(
    <Button {...defaultProps} {...props}>
      {props.children || "happy button"}
    </Button>
  );
}

describe("Button", () => {
  it("Renders with default props", () => {
    const { getByText, container } = renderComponent();
    expect(getByText(/happy button/i)).toBeInTheDocument();
    expect(container.querySelector("button")).toBeInTheDocument();
    expect(container.querySelector('[type="button"]')).toBeInTheDocument();
  });

  it("Renders a span when isSemantic=false", () => {
    const { container } = renderComponent({ isSemantic: false });

    expect(container.querySelector("span[role=button]")).toBeInTheDocument();
    expect(container.querySelector('[tabindex="0"]')).toBeInTheDocument();
  });

  it("Renders with custom props", () => {
    const customProps = {
      a11yText: "button which is happy",
      isDisabled: true,
      isSubmit: true,
      role: "listitem",
      tabIndex: -1,
    };
    const { getByLabelText, getByRole, container } = renderComponent(customProps);

    expect(getByLabelText("button which is happy")).toBeInTheDocument();
    expect(getByRole("listitem")).toBeInTheDocument();
    expect(container.querySelector("[disabled]")).toBeInTheDocument();
    expect(container.querySelector('[type="submit"]')).toBeInTheDocument();
    expect(container.querySelector('[tabindex="-1"]')).toBeInTheDocument();
  });

  it("Fires onClick callback when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = renderComponent({ onClick });
    fireEvent.click(getByText(/happy button/i));

    expect(onClick).toHaveBeenCalled();
  });

  it("Does not fire onClick callback when disabled", () => {
    const onClick = jest.fn();
    const { getByText } = renderComponent({ onClick, isDisabled: true });
    const buttonElement = getByText(/happy button/i);
    fireEvent.click(buttonElement);

    expect(onClick).not.toHaveBeenCalled();
  });

  it("Does not fire onClick callback when pending", () => {
    const onClick = jest.fn();
    const { getByText } = renderComponent({ onClick, isPending: true });
    const buttonElement = getByText(/happy button/i);
    fireEvent.click(buttonElement);

    expect(onClick).not.toHaveBeenCalled();
  });

  it("Propagates click events by default", () => {
    const onClick = jest.fn();
    const bubbledClick = jest.fn();
    const { getByText } = render(
      <div onClick={bubbledClick}>
        <Button onClick={onClick}>happy button</Button>
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
        <Button onClick={onClick} canPropagate={false}>
          happy button
        </Button>
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

    expect(document.activeElement.tagName.toLowerCase()).toEqual("button");
  });

  it("Is focussable via callback ref", () => {
    let buttonRef;
    const setRef = component => {
      buttonRef = component;
    };
    renderComponent({ ref: setRef });
    buttonRef.focus();

    expect(document.activeElement.tagName.toLowerCase()).toEqual("button");
  });
});
