import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import Input from "../src";

const renderComponent = props => render(<Input {...props} />);

const emptyStringValue = "";
const initialValue = "initial value";
const updatedValue = "changed value";

describe("Input", () => {
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

  it("should set value uncontrolled using defaultValue and call the ref function with node when input changes", async () => {
    let node = null;
    const inputRefFunc = element => {
      node = element;
    };
    const { getByTestId } = renderComponent({
      defaultValue: initialValue,
      ref: inputRefFunc,
    });
    expect(getByTestId("input").value).toBe(initialValue);
    fireEvent.change(getByTestId("input"), { target: { value: updatedValue } });
    expect(node.value).toBe(updatedValue);
  });

  it("should not fail any accessibility tests", async () => {
    const { container } = renderComponent();

    // Input component is isolated and is not associated with label
    expect(
      await axe(container, {
        rules: {
          label: { enabled: false },
        },
      })
    ).toHaveNoViolations();
  });
});
