import React from "react";
import { render } from "@testing-library/react";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Input from "../src";

function renderComponent(props = {}) {
  const handleChange = props.onChange || (() => {});
  const rendered = render(<Input {...props} onChange={() => {}} />);
  const { rerender } = rendered;

  return {
    ...rendered,
    rerender: updatedProps => {
      rerender(<Input {...updatedProps} onChange={handleChange} />);
    },
  };
}

describe("Input", () => {
  it("should be visible and render large text", () => {
    const { container } = renderComponent({ size: ShirtSizes.LARGE });
    expect(container.firstChild.classList.contains("form-input--large")).toBe(true);
  });

  it("should change value when value changes", () => {
    const { getByTestId, rerender } = renderComponent({ value: "testing value" });
    expect(getByTestId("input").value).toBe("testing value");
    rerender({ value: "testing value changed" });
    expect(getByTestId("input").value).toBe("testing value changed");
  });

  it("should not change value when defaultValue changes", () => {
    const { getByTestId, rerender } = renderComponent({ defaultValue: "testing default value" });
    expect(getByTestId("input").value).toBe("testing default value");
    rerender({ defaultValue: "testing default value changed" });
    expect(getByTestId("input").value).not.toBe("testing default value changed");
  });
});
