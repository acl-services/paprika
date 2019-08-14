import React from "react";
import { render, configure } from "@testing-library/react";
import L10n from "@paprika/l10n";
import Confirmation from "../src";

configure({ testIdAttribute: "data-qa-anchor" });

function renderComponent() {
  const renderedComponent = render(
    <L10n>
      <Confirmation
        isOpen
        confirmLabel="Confirm Delete"
        onConfirm={() => {}}
        onCancel={() => {}}
        heading="Delete Button?"
      />
    </L10n>
  );

  return {
    ...renderedComponent,
  };
}

describe("Confirmation", () => {
  let getByText;
  let confirmationComponent;

  beforeEach(() => {
    ({ getByText } = renderComponent());
    confirmationComponent = getByText(/confirm delete/i);
  });

  it("should show confirmation panel in the document", () => {
    expect(confirmationComponent).toBeVisible();
  });

  it("should open the confirmation panel when button is clicked", () => {
    // expect(confirmationComponent).toBeVisible();
  });

  it("should close the confirmation when clicking outside of the confirmation panel", () => {
    // expect(confirmationComponent).toBeVisible();
  });

  it("should trigger the onConfirm callback when clicking the confirm button", () => {
    // expect(confirmationComponent).toBeVisible();
  });

  it("should trigger the onCancel callback when clicking the cancel button", () => {
    // expect(confirmationComponent).toBeVisible();
  });
});
