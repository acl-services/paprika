import React from "react";
import { render } from "react-testing-library";
import Collapsible from "../src";

const searchableContent = "The body of the collapsible";

function renderComponent(overrideProps) {
  const defaultProps = {
    ariaText: "collapsible section",
    isCollapsed: false,
    isDisabled: false,
    label: "Click me to show/hide the content",
    iconAlign: "left",
    onClick: () => {},
  };

  return render(
    <Collapsible {...defaultProps} {...overrideProps}>
      <p>{searchableContent}</p>
    </Collapsible>
  );
}

describe("Collapsible", () => {
  it("Should expand the collapsible", () => {
    const { getByText } = renderComponent();
    expect(getByText(searchableContent)).toBeVisible();
  });

  it("Should collapse the collapsible", () => {
    const { queryByText } = renderComponent({ isCollapsed: true });
    expect(queryByText(searchableContent)).not.toBeVisible();
  });
});
