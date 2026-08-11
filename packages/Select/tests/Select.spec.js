import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import Select from "../src";

describe("Select", () => {
  it("should be visible", () => {
    const { getByText } = render(
      <Select value="Select value">
        <option value="Select value">Select value</option>
        <option value="Another option">Another option</option>
      </Select>
    );
    expect(getByText(/select value/i)).toBeInTheDocument();
  });

  it("placeholder should be visible", () => {
    const { getByText } = render(
      <Select placeholder="placeholder value">
        <option value="Select value">Select value</option>
        <option value="Another option">Another option</option>
      </Select>
    );
    expect(getByText(/placeholder value/i)).toBeInTheDocument();
  });

  it("should not fail any accessibility tests", async () => {
    // The select is rendered in isolation, so it is named with a11yText instead of a <label>
    const { container } = render(
      <Select a11yText="Pick a value" value="Select value">
        <option value="Select value">Select value</option>
        <option value="Another option">Another option</option>
      </Select>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
