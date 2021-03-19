import React from "react";
import { render, cleanup } from "@testing-library/react";
import { axe } from "jest-axe";
import Textarea from "../src/Textarea";

beforeEach(cleanup);

function renderComponent(props = {}) {
  const rendered = render(<Textarea {...props} onChange={() => {}} data-pka-anchor="components.textarea" />);

  const { rerender } = rendered;

  return {
    ...rendered,
    rerender: updatedProps => {
      rerender(<Textarea {...updatedProps} onChange={() => {}} data-pka-anchor="components.textarea" />);
    },
  };
}

describe("Textarea", () => {
  it("should be visible", () => {
    const { getByText } = renderComponent({ value: "placeholder value" });
    expect(getByText(/placeholder value/i)).toBeInTheDocument();
  });

  it("should not fail any accessibility tests", async () => {
    const { container } = renderComponent();

    // Textarea component is isolated and is not associated with label
    expect(
      await axe(container, {
        rules: {
          label: { enabled: false },
        },
      })
    ).toHaveNoViolations();
  });
});

describe("Text area uncontrolled", () => {
  it("should not re-render with default value if it prop changes", () => {
    const { getByText, rerender, queryByText } = renderComponent({ defaultValue: "some default text" });
    expect(getByText(/some default text/i)).toBeInTheDocument();
    rerender({ defaultValue: "changed default Value" });
    expect(queryByText(/changed default state/i)).not.toBeInTheDocument();
  });
});
