import React from "react";
import { fireEvent, act } from "@testing-library/react";

import Toast from "../src";

jest.useFakeTimers();

describe("Toast", () => {
  function renderComponent(props) {
    const renderedComponent = renderWithL10n(
      <Toast {...props} data-pka-anchor="Toast">
        Content
      </Toast>
    );
    const rerenderComponent = newProps => {
      renderedComponent.rerender(
        <Toast {...newProps} data-pka-anchor="Toast">
          Content
        </Toast>
      );
    };

    return {
      ...renderedComponent,
      rerenderComponent,
    };
  }

  it("should render default props", () => {
    const { getByText, getByTestId, getByLabelText } = renderComponent();

    expect(getByText(/content/i)).toBeVisible();
    expect(getByTestId("Toast")).toHaveAttribute("aria-live", "polite");
    expect(getByLabelText(/close/i)).toBeVisible();
  });

  it("should close by clicking close button", () => {
    const handleClose = jest.fn();
    const { queryByText, getByLabelText } = renderComponent({ onClose: handleClose });

    fireEvent.click(getByLabelText(/close/i));
    expect(queryByText(/content/i)).not.toBeInTheDocument();
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("should controlled by props", () => {
    const handleClose = jest.fn();
    const { getByText, queryByText, rerenderComponent } = renderComponent({ isOpen: true, onClose: handleClose });

    expect(getByText(/content/i)).toBeInTheDocument();
    rerenderComponent({ isOpen: false });
    expect(queryByText(/content/i)).not.toBeInTheDocument();
    expect(handleClose).toHaveBeenCalledTimes(0);
  });

  it("should auto close", () => {
    const handleClose = jest.fn();
    const { getByText, queryByText } = renderComponent({ canAutoClose: true, onClose: handleClose });

    expect(getByText(/content/i)).toBeInTheDocument();
    act(() => {
      jest.runAllTimers();
    });
    expect(queryByText(/content/i)).not.toBeInTheDocument();
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
