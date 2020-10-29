import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SideNavigation from "../src";

describe("SideNavigation", () => {
  it("Renders trigger and can open side panel", async () => {
    render(
      <SideNavigation>
        <SideNavigation.Item>First item (0)</SideNavigation.Item>
        <SideNavigation.Item isCurrent>Second item (1000)</SideNavigation.Item>
      </SideNavigation>
    );

    expect(screen.findByTestId("sideNavigation.trigger"));
    expect(screen.queryByText("First item (0)")).not.toBeInTheDocument();
    expect(screen.queryByText("Second item (1000)")).not.toBeInTheDocument();
    fireEvent.click(await screen.findByTestId("sideNavigation.trigger"));
    expect(screen.queryByText("First item (0)"));
    expect(screen.queryByText("Second item (1000)"));
  });
});
