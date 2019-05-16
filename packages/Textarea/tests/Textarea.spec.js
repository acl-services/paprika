import React from "react";
import { render } from "react-testing-library";
import Textarea from "../src/Textarea";

describe("Textarea", () => {
  it("should be visible", () => {
    const { getByText } = render(<Textarea value="placeholder value" />);
    expect(getByText(/placeholder value/i)).toBeInTheDocument();
  });
});
