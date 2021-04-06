import React from "react";
import { render, configure } from "@testing-library/react";
import { axe } from "jest-axe";
import TextEditorUncontrolled from "../stories/examples/uncontrolled";

configure({ testIdAttribute: "data-pka-anchor" });

describe("TextEditorUncontrolled", () => {
  it("should not fail any accessibility tests", async () => {
    const { container } = render(<TextEditorUncontrolled />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
