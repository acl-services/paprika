import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import Popover from "../src";

describe("Popover", () => {
  it("should open when clicked", () => {
    const { getByText } = render(
      <Popover>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>Content</Popover.Content>
      </Popover>
    );

    expect(getByText(/open/i)).toBeVisible();
    fireEvent.click(getByText(/open/i));
    expect(getByText(/content/i)).toBeVisible();
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
