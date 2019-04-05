import React from "react";
import { render } from "react-testing-library";
import Input from "../Input";

describe("Input", () => {
  it("should be visible", () => {
    const { container } = render(<Input placeholder="First Name" size="large" />);
    expect(container.firstChild.classList.contains("form-input--large")).toBe(true);
  });
});
