import React from "react";
import { render, fireEvent } from "react-testing-library";
import Popover from "../Popover";

describe("Popover", () => {
  it("should work", () => {
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
});
