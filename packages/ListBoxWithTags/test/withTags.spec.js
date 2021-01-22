import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react"; // fireEvent, waitFor, screen
import ListBoxTags from "../src";
import Uncontrolled from "../stories/examples/Uncontrolled";

function getTrigger(container) {
  return container.querySelector("[data-pka-anchor='popover'] [role='button']");
}

function getPopover() {
  return document.body.querySelector("[data-pka-anchor='popover.content']");
}

function clickListBoxWithTagOption(text) {
  fireEvent.click(getPopover().querySelector(`li[value='${text}']`));
}

function getOptionInTrigger($trigger) {
  return [...$trigger.querySelectorAll(`li`)].map(e => e.textContent);
}

function getOptionInPopover() {
  return [...getPopover().querySelectorAll(`li`)].map(e => e.textContent);
}

function getDeleteButtonByOptionInTrigger(text, $trigger) {
  return [...$trigger.querySelectorAll(`li`)]
    .filter(li => li.textContent === text)[0]
    .querySelector("[data-pka-anchor='list-box-tags.pill.delete']");
}

describe("ListBoxTags", () => {
  it("should filter correctly the option", () => {
    const data = [
      { id: 1, label: "The Dog" },
      { id: 2, label: "The Fox" },
      { id: 3, label: "The Raccoon" },
      { id: 4, label: "Dinosaur" },
    ];

    expect(ListBoxTags.filter("dog", data)).toMatchSnapshot();
    expect(ListBoxTags.filter("fox", data)).toMatchSnapshot();
    expect(ListBoxTags.filter("Raccoon", data)).toMatchSnapshot();
    expect(ListBoxTags.filter("the", data)).toMatchSnapshot();
    expect(ListBoxTags.filter("saur", data)).toMatchSnapshot();
  });

  it("should render ListBoxWithTags", async () => {
    render(<Uncontrolled />);
    await waitFor(() => {
      expect(screen.getByText("Select…")).toBeInTheDocument();
    });
  });

  it("should open ListBoxWithTags", async () => {
    const { container } = render(<Uncontrolled />);

    await waitFor(() => {
      expect(getPopover()).toHaveAttribute("aria-hidden", "true");
    });

    fireEvent.click(getTrigger(container));

    await waitFor(() => {
      expect(getPopover()).toHaveAttribute("aria-hidden", "false");
    });
  });

  it("should add options to the ListBoxWithTags", async () => {
    const { container } = render(<Uncontrolled />);

    fireEvent.click(getTrigger(container));
    clickListBoxWithTagOption("Ant");
    clickListBoxWithTagOption("Alpaca");

    await waitFor(() => {
      const items = getOptionInTrigger(getTrigger(container));
      expect(items.length).toBe(2);
      expect(items.includes("Ant")).toBeTruthy();
      expect(items.includes("Alpaca")).toBeTruthy();
      expect(items.includes("Albatross")).not.toBeTruthy();
    });
  });

  it("should remove options from the ListBoxWithTags", async () => {
    const { container } = render(<Uncontrolled />);
    fireEvent.click(getTrigger(container));
    clickListBoxWithTagOption("Ant");
    clickListBoxWithTagOption("Alpaca");
    await waitFor(() => {
      const items = getOptionInTrigger(getTrigger(container));
      expect(items.length).toBe(2);
      expect(items.includes("Ant")).toBeTruthy();
      expect(items.includes("Alpaca")).toBeTruthy();
      expect(items.includes("Albatross")).not.toBeTruthy();
    });
  });

  it("should remove options from the ListBoxWithTags", async () => {
    const { container } = render(<Uncontrolled />);

    fireEvent.click(getTrigger(container));
    clickListBoxWithTagOption("Ant");
    clickListBoxWithTagOption("Alpaca");

    await waitFor(() => {
      const items = getOptionInTrigger(getTrigger(container));
      expect(items.length).toBe(2);
      expect(items.includes("Ant")).toBeTruthy();
      expect(items.includes("Alpaca")).toBeTruthy();
    });

    fireEvent.click(getDeleteButtonByOptionInTrigger("Ant", getTrigger(container)));

    await waitFor(() => {
      const items = getOptionInTrigger(getTrigger(container));
      expect(items.length).toBe(1);
      expect(items.includes("Ant")).not.toBeTruthy();
      expect(items.includes("Alpaca")).toBeTruthy();
    });
  });

  it("should search correctly and revert to the original list when filter is empty", async () => {
    const { container } = render(<Uncontrolled />);

    fireEvent.click(getTrigger(container));
    const input = screen.getByTestId("list-filter-input");
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "Wo" } });

    await waitFor(() => {
      const options = getOptionInPopover();
      expect(options.length).toBe(6);
      expect(options.includes("Wolf")).toBeTruthy();
      expect(options.includes("Wolverine")).toBeTruthy();
      expect(options.includes("Wombat")).toBeTruthy();
      expect(options.includes("Woodcock")).toBeTruthy();
      expect(options.includes("Woodpecker")).toBeTruthy();
      expect(options.includes("Worm")).toBeTruthy();
    });
  });
});
