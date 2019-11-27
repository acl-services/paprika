import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DialogActions from "../src";

function renderComponent(props = {}) {
  return render(<DialogActions {...props} />);
}

describe("DialogActions", () => {
  it("should display confirm, decline and cancel button initially", () => {
    const { getByText } = renderComponent({ labelConfirm: "Confirm" });

    expect(getByText(/Confirm/i)).toBeInTheDocument();
    expect(getByText(/Don't Save/i)).toBeInTheDocument();
    expect(getByText(/Cancel/i)).toBeInTheDocument();
  });

  it("should not display the buttons when the props are empty", () => {
    const { queryByText } = renderComponent({ onCancel: null, onConfirm: null, onDecline: null });

    expect(queryByText(/Save/i)).not.toBeInTheDocument();
    expect(queryByText(/Don't Save/i)).not.toBeInTheDocument();
    expect(queryByText(/Cancel/i)).not.toBeInTheDocument();
  });

  it("should fire callbacks when clicked", () => {
    const onCancel = jest.fn();
    const onConfirm = jest.fn();
    const onDecline = jest.fn();
    const { getByText } = renderComponent({ onCancel, onConfirm, onDecline });

    fireEvent.click(getByText("Save"));
    expect(onConfirm).toHaveBeenCalled();

    fireEvent.click(getByText(/Don't Save/i));
    expect(onDecline).toHaveBeenCalled();

    fireEvent.click(getByText(/Cancel/i));
    expect(onCancel).toHaveBeenCalled();
  });
});
