import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Input from "../src";

function renderComponent(props = {}) {
  const rendered = render(<Input {...props} />);
  const { rerender } = rendered;

  return {
    ...rendered,
    rerender: updatedProps => {
      rerender(<Input {...updatedProps} />);
    },
  };
}

describe("Input", () => {
  it("should be visible and render large text", () => {
    const { container } = renderComponent({ size: ShirtSizes.LARGE });
    expect(container.firstChild.classList.contains("form-input--large")).toBe(true);
  });

  it("should change value when value changes", async () => {
    let changeValue = null;
    const onChangeFunc = e => {
      changeValue = e.target.value;
    };
    const { getByTestId, rerender } = renderComponent({ value: "init value", onChange: onChangeFunc });
    expect(getByTestId("input").value).toBe("init value");
    fireEvent.change(getByTestId("input"), { target: { value: "input change" } });
    expect(changeValue).toBe("input change");
    expect(getByTestId("input").value).toBe("init value");
    rerender({ value: "input value controlled change" });
    expect(getByTestId("input").value).toBe("input value controlled change");
  });

  it("should set input value with defaultValue and call the inputRef function passing node when input changes", async () => {
    let node = null;
    const inputRefFunc = element => {
      node = element;
    };
    const { getByTestId } = renderComponent({
      defaultValue: "init default value",
      inputRef: inputRefFunc,
    });
    expect(getByTestId("input").value).toBe("init default value");
    fireEvent.change(getByTestId("input"), { target: { value: "input change" } });
    expect(node.value).toBe("input change");
  });
});
