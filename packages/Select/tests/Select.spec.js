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

  it("should not display the options", () => {
    const { queryByText } = render(
      <Select placeholder="placeholder value">
        <option value="Select value">Select value</option>
        <option value="Another option">Another option</option>
      </Select>
    );
    expect(queryByText(/place holder value/i)).not.toBeInTheDocument();
  });

  it("should be read only", () => {
    const { container } = render(
      <Select placeholder="placeholder value" isReadOnly>
        <option value="Select value">Select value</option>
        <option value="Another option">Another option</option>
      </Select>
    );
    expect(container.querySelector(".form-select--is-readonly")).toBeInTheDocument();
  });

  it("should be an error if clicks the wrong option", () => {
    const { container } = render(
      <Select placeholder="placeholder value" hasError>
        <option value="Select value">Select value</option>
        <option value="Another option">Another option</option>
      </Select>
    );
    expect(container.querySelector(".form-select--has-error")).toBeInTheDocument();
  });
});
