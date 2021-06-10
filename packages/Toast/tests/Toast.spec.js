import React from "react";
import { fireEvent, act } from "@testing-library/react";

import Toast from "../src";

jest.useFakeTimers();

describe("Toast", () => {
  function runTimers() {
    act(() => {
      jest.runAllTimers();
    });
  }

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
    runTimers();

    expect(getByText(/content/i)).toBeVisible();
    expect(getByTestId("Toast")).toHaveAttribute("role", "alert");
    expect(getByLabelText(/close/i)).toBeVisible();
  });

  it("should close by clicking close button", () => {
    const handleClose = jest.fn();
    const { queryByText, getByLabelText } = renderComponent({ onClose: handleClose });
    runTimers();

    fireEvent.click(getByLabelText(/close/i));
    expect(queryByText(/content/i)).not.toBeInTheDocument();
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("should be controlled by props", () => {
    const handleClose = jest.fn();
    const { getByText, queryByText, rerenderComponent } = renderComponent({ isOpen: true, onClose: handleClose });
    runTimers();

    expect(getByText(/content/i)).toBeInTheDocument();
    rerenderComponent({ isOpen: false });
    expect(queryByText(/content/i)).not.toBeInTheDocument();
    expect(handleClose).toHaveBeenCalledTimes(0);
  });

  it("should auto close", () => {
    const handleClose = jest.fn();
    const { getByText, queryByText } = renderComponent({
      renderDelay: 100,
      canAutoClose: true,
      onClose: handleClose,
    });

    act(() => {
      jest.advanceTimersByTime(100);
    });
    expect(getByText(/content/i)).toBeInTheDocument();

    runTimers();
    expect(queryByText(/content/i)).not.toBeInTheDocument();
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("should render as role=status if isPolite", () => {
    const { getByText, getByTestId } = renderComponent({ isPolite: true });
    runTimers();

    expect(getByText(/content/i)).toBeVisible();
    expect(getByTestId("Toast")).toHaveAttribute("role", "status");
  });
});
