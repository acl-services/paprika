import React from "react";
import { render } from "@testing-library/react";
import ProgressBar from "../src";

function renderComponent(props = {}) {
  const defaultProps = {
    header: "Preparing your file...",
    bodyText: "Control attributes are getting updated. This might take more than 15secs.",
  };
  return render(<ProgressBar {...defaultProps} {...props} />);
}

describe("ProgressBar", () => {
  it("should render ProgressBar", () => {
    const { getByText, getAllByText } = renderComponent();
    expect(getByText("Preparing your file...")).toBeVisible();
    expect(getAllByText(/This might take more than 15secs/i)[0]).toBeVisible();
  });
});
