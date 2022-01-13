import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react"; // fireEvent, waitFor, screen
import SearchBasic from "../stories/examples/Basic";

function getTrigger(container) {
  return container.querySelector("[data-pka-anchor='popover'] [role='button']");
}

function getPopover() {
  return document.body.querySelector("[data-pka-anchor='popover.content']");
}

describe("Search", () => {
  test("should render Search", () => {
    render(<SearchBasic />);
    expect(screen.queryByPlaceholderText("Search...")).toBeInTheDocument();
  });
  test("should show the popover", async () => {
    const { container } = render(<SearchBasic />);

    await waitFor(() => {
      expect(getPopover()).not.toBeInTheDocument();
    });

    fireEvent.click(getTrigger(container));
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "t" } });

    await waitFor(() => {
      expect(getPopover()).toBeInTheDocument();
    });

    expect(screen.queryByPlaceholderText("Search...")).toBeInTheDocument();
  });

  test("should not show Search term...", () => {
    render(<SearchBasic />);
    expect(screen.queryByText("Search term...")).not.toBeInTheDocument();
  });
  test("should show Search term... while filtering", async () => {
    const { container } = render(<SearchBasic />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "Fin" } });
    fireEvent.click(getTrigger(container));

    await waitFor(() => {
      expect(screen.queryByText("Assets for third party vendor")).not.toBeInTheDocument();
      expect(screen.getByText("Search term...")).toBeInTheDocument();
    });
  });
  test("should filter the list", async () => {
    const { container } = render(<SearchBasic />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "Fin" } });
    fireEvent.click(getTrigger(container));

    await waitFor(() => {
      expect(screen.queryByText("Assets for third party vendor")).not.toBeInTheDocument();
      expect(screen.getByText("Finding automatic vendor requirements")).toBeInTheDocument();
      expect(screen.queryByText("Assets for third party vendor")).not.toBeInTheDocument();
      expect(screen.getByRole("textbox")).toHaveAttribute("value", "Fin");
      expect(screen.getByText("Search term...")).toBeInTheDocument();
    });
  });

  test("should select an item by clicking it", async () => {
    const { container } = render(<SearchBasic />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Asset" },
    });
    fireEvent.click(getTrigger(container));
    await waitFor(() => {
      expect(screen.queryByText("Finding automatic vendor requirements")).not.toBeInTheDocument();
      fireEvent.click(screen.queryAllByRole("option")[1]);
      expect(screen.queryByText("Finding automatic vendor requirements")).not.toBeInTheDocument();
      expect(screen.getByText("→vendor (assets type)")).toBeInTheDocument();
    });
  });
});
