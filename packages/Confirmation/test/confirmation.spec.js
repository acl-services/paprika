import React from "react";
import { render, configure, fireEvent, wait } from "@testing-library/react";
import L10n from "@paprika/l10n";
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
    expect(getByText(/Confirm Delete/)).toBeVisible();
  });

  it("should trigger the confirm callback when confirm button is clicked", () => {
    const onConfirmFunc = jest.fn();
    const { getByText } = renderComponent({
      onConfirm: onConfirmFunc,
    });
    fireEvent.click(getByText(/trigger/i));
    fireEvent.click(getByText(/Confirm Delete/i));
    expect(onConfirmFunc).toHaveBeenCalled();
  });

  it("should close the confirmation when clicking confirm", async () => {
    const onCloseFunc = jest.fn();
    const { getByText } = renderComponent({
      onClose: onCloseFunc,
    });
    fireEvent.click(getByText(/trigger/i));
    fireEvent.click(getByText(/Confirm Delete/i));
    await wait(() => {
      // not being called?
      expect(onCloseFunc).toHaveBeenCalled();
    });
  });
});
