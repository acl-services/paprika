import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import CollapsibleCard from "../src";

describe("CollapsibleCard", () => {
  const headingText = "Put your heading in here.";
  const bodyText = "Put your body in here.";

  it("should be able to expand and collapse", () => {
    render(
      <CollapsibleCard>
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>{headingText}</CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>{bodyText}</CollapsibleCard.Body>
      </CollapsibleCard>
    );

    expect(screen.getByText(bodyText)).not.toBeVisible();

    fireEvent.click(screen.getByText(headingText));
    expect(screen.getByText(bodyText)).toBeVisible();

    fireEvent.click(screen.getByText(headingText));
    expect(screen.getByText(bodyText)).not.toBeVisible();
  });

  it("should fire callback when expand/collapse", () => {
    const handleIsCollapsed = jest.fn();

    render(
      <CollapsibleCard onToggleIsCollapsed={handleIsCollapsed}>
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>{headingText}</CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>Put your body in here.</CollapsibleCard.Body>
      </CollapsibleCard>
    );

    fireEvent.click(screen.getByText(headingText));
    fireEvent.click(screen.getByText(headingText));
    expect(handleIsCollapsed).toHaveBeenCalledTimes(2);
  });

  it("should not fire a callback when click a button inside the header (if the button has e.stopPropagation)", () => {
    const handleIsCollapsed = jest.fn();

    render(
      <CollapsibleCard onToggleIsCollapsed={handleIsCollapsed}>
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>
            <button
              onClick={e => {
                e.stopPropagation();
              }}
              type="button"
            >
              testButton
            </button>
          </CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>Put your body in here.</CollapsibleCard.Body>
      </CollapsibleCard>
    );

    fireEvent.click(screen.getByRole("button", { name: "testButton" }));
    expect(handleIsCollapsed).toHaveBeenCalledTimes(0);
  });

  it("should be initially expanded when told to", () => {
    render(
      <CollapsibleCard initialIsCollapsed={false}>
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>{headingText}</CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>{bodyText}</CollapsibleCard.Body>
      </CollapsibleCard>
    );

    expect(screen.getByText(bodyText)).toBeVisible();

    fireEvent.click(screen.getByText(headingText));
    expect(screen.getByText(bodyText)).not.toBeVisible();
  });

  it("should not fail any accessibility tests", async () => {
    const { container } = render(
      <CollapsibleCard>
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>{headingText}</CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>{bodyText}</CollapsibleCard.Body>
      </CollapsibleCard>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
