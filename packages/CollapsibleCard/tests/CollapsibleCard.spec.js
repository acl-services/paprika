import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import CollapsibleCard from "../src";

describe("CollapsibleCard", () => {
  it("should be able to expand and collapse", () => {
    render(<CollapsibleCard label="Collapsible label">Content</CollapsibleCard>);

    expect(screen.getByText(/content/i)).not.toBeVisible();
    fireEvent.click(screen.getByTestId("collapsible.trigger"));
    expect(screen.getByText(/content/i)).toBeVisible();
    fireEvent.click(screen.getByTestId("collapsible.trigger"));
    expect(screen.getByText(/content/i)).not.toBeVisible();
  });
});
