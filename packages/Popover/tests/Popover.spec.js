import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import Popover from "../src";

describe("Popover", () => {
  it("should open when clicked", () => {
    render(
      <Popover>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>Content</Popover.Content>
      </Popover>
    );

    expect(screen.getByText(/open/i)).toBeVisible();
    fireEvent.click(screen.getByText(/open/i));
    expect(screen.getByText(/content/i)).toBeVisible();
  });

  it("should not fail any accessibility tests", async () => {
    const { container } = render(
      <Popover>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>Content</Popover.Content>
      </Popover>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
