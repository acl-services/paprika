import React from "react";
import { render, configure, fireEvent, waitFor } from "@testing-library/react";
import { axe } from "jest-axe";
import Confirmation from "../src";

configure({ testIdAttribute: "data-pka-anchor" });

function renderComponent(props = {}) {
  const renderedComponent = render(
    <Confirmation confirmLabel="Confirm Delete" onConfirm={() => {}} heading="Delete Button?" {...props}>
      <Confirmation.TriggerButton>Trigger</Confirmation.TriggerButton>
    </Confirmation>
  );

  return {
    ...renderedComponent,
  };
}

describe("Confirmation", () => {
  it("should show confirmation panel by default when mounted ", () => {
    const { getByText } = renderComponent({ defaultIsOpen: true });
    expect(getByText(/confirm delete/i)).toBeVisible();
  });

  it("should trigger the confirm callback when confirm button is clicked and on Close to not have been called", async () => {
    const onCloseFunc = jest.fn();
    const onConfirmFunc = jest.fn();
    const { getByText } = renderComponent({
      onConfirm: onConfirmFunc,
      onClose: onCloseFunc,
    });
    fireEvent.click(getByText(/trigger/i));
    fireEvent.click(getByText(/confirm delete/i));
    expect(onConfirmFunc).toHaveBeenCalled();
    await waitFor(() => {
      expect(onCloseFunc).not.toHaveBeenCalled();
    });
  });

  it("should close the confirmation when clicking cancel", async () => {
    const onCloseFunc = jest.fn();
    const { getByText } = renderComponent({
      onClose: onCloseFunc,
    });
    fireEvent.click(getByText(/trigger/i));
    fireEvent.click(getByText(/cancel/i));
    await waitFor(() => {
      expect(onCloseFunc).toHaveBeenCalled();
    });
  });

  it("should not fail any accessibility tests", async () => {
    const { container } = renderComponent({ defaultIsOpen: true });
    expect(await axe(container)).toHaveNoViolations();
  });
});
