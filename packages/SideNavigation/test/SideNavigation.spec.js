import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import SideNavigation from "../src";

describe("SideNavigation", () => {
  it("Renders trigger and can open side panel", () => {
    render(
      <SideNavigation header="My header">
        <SideNavigation.Item href="abcd">First item (0)</SideNavigation.Item>
        <SideNavigation.Item href="abcd" isCurrent>
          Second item (1000)
        </SideNavigation.Item>
      </SideNavigation>
    );

    expect(screen.queryByText("First item (0)")).not.toBeInTheDocument();
    expect(screen.queryByText("Second item (1000)")).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId("sideNavigation.trigger"));
    expect(screen.queryByText("First item (0)"));
    expect(screen.queryByText("Second item (1000)"));
  });

  it("should not fail any accessibility tests", async () => {
    const { container } = render(
      <SideNavigation header="My header">
        <SideNavigation.Item href="abcd">First item (0)</SideNavigation.Item>
        <SideNavigation.Item href="abcd" isCurrent>
          Second item (1000)
        </SideNavigation.Item>
      </SideNavigation>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
