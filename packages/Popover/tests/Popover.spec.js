import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import Popover from "../src";

describe("Popover", () => {
  it("should open when clicked and display subcomponents correctly", () => {
    const { container } = render(
      <Popover>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>Content</Popover.Content>
        <Popover.Tip />
      </Popover>
    );

    expect(screen.getByText(/open/i)).toBeVisible();
    expect(screen.queryByText(/content/i)).not.toBeInTheDocument();
    expect(container.querySelector('[data-pka-anchor="popover.content"]')).not.toBeInTheDocument();
    expect(container.querySelector('[data-pka-anchor="popover.tip"]')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText(/open/i));
    expect(screen.getByText(/content/i)).toBeVisible();
    expect(screen.queryByTestId("popover.tip")).toBeVisible();
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

  it("should render content and tip to the dom when shouldUnmount prop false", async () => {
    render(
      <Popover shouldUnmount={false}>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>Content</Popover.Content>
        <Popover.Tip />
      </Popover>
    );
    expect(screen.queryByText(/content/i)).not.toBeVisible();
    expect(screen.queryByTestId("popover.tip")).not.toBeVisible();
    expect(document.querySelector('[data-pka-anchor="popover.content"]')).toBeInTheDocument();
    expect(document.querySelector('[data-pka-anchor="popover.tip"]')).toBeInTheDocument();
  });
});
