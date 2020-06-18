import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ShirtSizes } from "@paprika/helpers/lib/enums";
import Input from "../src";

const renderComponent = props => render(<Input {...props} />);

const emptyStringValue = "";
const initialValue = "initial value";
const updatedValue = "changed value";

describe("Input", () => {
  it("should be visible and render large text", () => {
    const { container } = renderComponent({ size: ShirtSizes.LARGE });
    expect(container.firstChild.classList.contains("form-input--large")).toBe(true);
  });

  it("should change value controlled when value changes", async () => {
    let changeValue = null;
    const onChangeFunc = e => {
      changeValue = e.target.value;
    };
    const { getByTestId } = renderComponent({ value: initialValue, onChange: onChangeFunc });
    expect(getByTestId("input").value).toBe(initialValue);
    fireEvent.change(getByTestId("input"), { target: { value: updatedValue } });
    expect(changeValue).toBe(updatedValue);
    expect(getByTestId("input").value).toBe(initialValue);
  });

  it("should change value controlled when value is empty string", async () => {
    let changeValue = null;
    const onChangeFunc = e => {
      changeValue = e.target.value;
    };
    const { getByTestId } = renderComponent({ value: emptyStringValue, onChange: onChangeFunc });
    expect(getByTestId("input").value).toBe(emptyStringValue);
    fireEvent.change(getByTestId("input"), { target: { value: updatedValue } });
    expect(changeValue).toBe(updatedValue);
    expect(getByTestId("input").value).toBe(emptyStringValue);
  });

  it("should set value uncontrolled using defaultValue and call the inputRef function with node when input changes", async () => {
    let node = null;
    const inputRefFunc = element => {
      node = element;
    };
    const { getByTestId } = renderComponent({
      defaultValue: initialValue,
      inputRef: inputRefFunc,
    });
    expect(getByTestId("input").value).toBe(initialValue);
    fireEvent.change(getByTestId("input"), { target: { value: updatedValue } });
    expect(node.value).toBe(updatedValue);
  });
});
