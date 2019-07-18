import React from "react";
import { render } from "@testing-library/react";
import Select from "../stories/examples/SelectExample";

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
});
