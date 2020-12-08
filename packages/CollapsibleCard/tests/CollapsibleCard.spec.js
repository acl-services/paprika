import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import CollapsibleCard from "../src";

describe("CollapsibleCard", () => {
  it("should be able to expand and collapse", () => {
    render(<CollapsibleCard label="Collapsible label">Content</CollapsibleCard>);

    expect(screen.getByText(/Collapsible label/i)).toBeVisible();
    expect(screen.getByText(/content/i)).not.toBeVisible();
    fireEvent.click(screen.getByTestId("collapsible.trigger"));
    expect(screen.getByText(/content/i)).toBeVisible();
    fireEvent.click(screen.getByTestId("collapsible.trigger"));
    expect(screen.getByText(/content/i)).not.toBeVisible();
  });

  it("renders label prop", () => {
    render(
      <CollapsibleCard label={({ isCollapsed }) => `Label - ${isCollapsed ? "close" : "open"}`}>
        Content
      </CollapsibleCard>
    );

    expect(screen.getByText(/Label - close/i)).toBeVisible();
    expect(screen.getByText(/content/i)).not.toBeVisible();
    fireEvent.click(screen.getByTestId("collapsible.trigger"));
    expect(screen.getByText(/content/i)).toBeVisible();
    expect(screen.getByText(/Label - open/i)).toBeVisible();
  });
});
