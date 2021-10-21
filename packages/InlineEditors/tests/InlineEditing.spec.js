import React from "react";
import { render, screen, getAllByText, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ListBoxSingleStory } from "../stories/examples/ListBox";

test("Inline editing / ListBox / open", async () => {
  render(<ListBoxSingleStory />);

  const triggerButton = screen.getByText(/oversight/i);
  expect(triggerButton).toBeInTheDocument();

  const regexOption1 = /Professional/i;
  const regexOption2 = /Results Lite Contributor/i;
  expect(screen.queryByText(regexOption1)).not.toBeInTheDocument();
  expect(screen.queryByText(regexOption2)).not.toBeInTheDocument();

  userEvent.click(triggerButton); // click event

  expect(screen.queryByText(regexOption1)).toBeInTheDocument();
  expect(screen.queryByText(regexOption2)).toBeInTheDocument();
});

test("Inline editing / ListBox / close", async () => {
  render(<ListBoxSingleStory />);

  const regexOption1 = /Professional/i;
  const regexOption2 = /Results Lite Contributor/i;
  expect(screen.queryByText(regexOption1)).not.toBeInTheDocument();
  expect(screen.queryByText(regexOption2)).not.toBeInTheDocument();

  userEvent.click(screen.getByTestId("inline-editing.raw-button")); // click event

  expect(screen.queryByText(regexOption1)).toBeInTheDocument();
  expect(screen.queryByText(regexOption2)).toBeInTheDocument();

  userEvent.click(screen.getByTestId("list-box-trigger")); // click event
  await waitFor(() => {
    expect(screen.queryByTestId("popover.content")).not.toBeInTheDocument();
  });

  expect(screen.queryByText(regexOption1)).not.toBeInTheDocument();
  expect(screen.queryByText(regexOption2)).not.toBeInTheDocument();
});

test("Inline editing / ListBox / onSubmit event", async () => {
  render(<ListBoxSingleStory />);
  const regexOption1 = /Professional/i;
  const regexOption2 = /Results Lite Contributor/i;
  userEvent.click(screen.getByTestId("inline-editing.raw-button"));

  userEvent.click(screen.queryByText(regexOption2));
  await waitFor(() => {
    expect(screen.queryByTestId("popover.content")).not.toBeInTheDocument();
    expect(screen.queryByText(regexOption1)).not.toBeInTheDocument();
    expect(screen.getAllByText(regexOption2).length).toBe(2);
  });
});

test("Inline editing / ListBox / onChange event", async () => {
  render(<ListBoxSingleStory />);
  const regexOption2 = /Results Lite Contributor/i;
  userEvent.click(screen.getByTestId("inline-editing.raw-button"));

  userEvent.click(screen.queryByText(regexOption2));
  await waitFor(() => {
    expect(screen.queryByTestId("popover.content")).not.toBeInTheDocument();
    expect(screen.queryByText(/onChange:Results Lite Contributor/i)).toBeInTheDocument();
    expect(screen.getAllByText(regexOption2).length).toBe(2);
  });
});
