import React from "react";
import { render, configure } from "@testing-library/react";
import { axe } from "jest-axe";
import TextEditor from "../src";

configure({ testIdAttribute: "data-pka-anchor" });

describe("TextEditor", () => {
  it("should not fail any accessibility tests", async () => {
    const { container } = render(<TextEditor />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
