import React from "react";
import { render, screen } from "@testing-library/react";
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
});
