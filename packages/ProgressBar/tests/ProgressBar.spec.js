import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import ProgressBar from "../src";

function renderComponent(props = {}) {
  const defaultProps = {
    header: "Preparing your file...",
    bodyText: "Control attributes are getting updated. This might take more than 15secs.",
  };
  return render(<ProgressBar {...defaultProps} {...props} />);
}

describe("ProgressBar", () => {
  it("should render ProgressBar header and bodyText", () => {
    renderComponent();
    expect(screen.queryByText("Preparing your file...")).toBeVisible();
    expect(screen.queryAllByText(/This might take more than 15secs/i)[0]).toBeVisible();
  });

  it("should not fail any accessibility tests", async () => {
    const { container } = renderComponent();
    expect(await axe(container)).toHaveNoViolations();
  });
});
