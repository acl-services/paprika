import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import OverflowMenu from "@paprika/overflow-menu";
import StatusTracker from "../src";

function renderComponent() {
  return render(
    <StatusTracker>
      <StatusTracker.Point name="Draft" kind={StatusTracker.types.kind.PAST} description="past description" />
      <StatusTracker.Point name="In review" description="current description" kind={StatusTracker.types.kind.CURRENT}>
        <OverflowMenu>
          <OverflowMenu.Item>Overflow item</OverflowMenu.Item>
        </OverflowMenu>
      </StatusTracker.Point>
      <StatusTracker.Point name="Done" kind={StatusTracker.types.kind.FUTURE} />
    </StatusTracker>
  );
}

describe("StatusTracker", () => {
  it("Renders status points", async () => {
    renderComponent();

    const points = await screen.findAllByTestId("status-tracker.point");
    expect(points.length).toBe(3);

    expect(screen.queryByText("Draft")).not.toBeVisible();
    expect(await screen.findByTestId("status-tracker.point.overflow-menu.trigger")).toBeVisible();
    expect(screen.queryByText("Done")).not.toBeVisible();

    fireEvent.focus(points[0]);
    expect(await screen.findByText("Draft")).toBeVisible();
    expect(await screen.findByText("past description")).toBeVisible();

    fireEvent.focus(points[1]);
    expect(await screen.findByText("current description")).toBeVisible();
    fireEvent.click(points[1]);
    expect(screen.findByText("Overflow item"));

    fireEvent.focus(points[2]);
    expect(await screen.findByText("Done")).toBeVisible();
  });

  it("should not fail any accessibility tests", async () => {
    const { container } = renderComponent();
    expect(await axe(container)).toHaveNoViolations();
  });
});
