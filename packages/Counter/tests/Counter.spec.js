import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import Counter from "../src";

describe("Counter", () => {
  it("should render quantity", () => {
    const { getByText } = render(<Counter quantity={33} />);

    expect(getByText(/33/i)).toBeVisible();
  });

  it("should render threshold when quantity exceeds it", () => {
    const { getByText } = render(<Counter quantity={100} />);

    expect(getByText(/99+/i)).toBeVisible();
  });

  it("should not fail any accessibility tests", async () => {
    const { container } = render(<Counter quantity={100} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
