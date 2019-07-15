import React from "react";
import { render } from "@testing-library/react";
import Textarea from "../src/Textarea";

describe("Textarea", () => {
  it("should be visible", () => {
    const { getByText } = render(<Textarea onChange={() => {}} value="placeholder value" />);
    expect(getByText(/placeholder value/i)).toBeInTheDocument();
  });
});
