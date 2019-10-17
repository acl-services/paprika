import React from "react";
import { render } from "@testing-library/react";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Input from "../src";

describe("Input", () => {
  it("should be visible", () => {
    const { container } = render(<Input onChange={() => {}} placeholder="First Name" size={ShirtSizes.LARGE} />);
    expect(container.firstChild.classList.contains("form-input--large")).toBe(true);
  });
});

// TODO: add more tests
