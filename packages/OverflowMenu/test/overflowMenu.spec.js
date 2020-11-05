import React from "react";
import { render, configure, fireEvent, waitFor } from "@testing-library/react";
import L10n from "@paprika/l10n";
import Confirmation from "@paprika/confirmation";
import OverflowMenu from "../src";

configure({ testIdAttribute: "data-pka-anchor" });

function renderComponent(props = {}) {
  const handleConfirm = onConfirm => {
    onConfirm();
  };

  const handleCloseConfirm = onCloseMenu => () => {
    onCloseMenu();
  };

  const renderedComponent = render(
    <L10n>
      <OverflowMenu {...props}>
        <OverflowMenu.Trigger>Trigger</OverflowMenu.Trigger>
        <OverflowMenu.Item onClick={() => {}}>Edit</OverflowMenu.Item>
        <OverflowMenu.Item onClick={() => {}}>Filter</OverflowMenu.Item>
        <OverflowMenu.Item
          isDestructive
          renderConfirmation={onCloseMenu => {
            return (
              <Confirmation
                body="description"
                confirmLabel="Confirm Delete"
                onConfirm={handleConfirm}
                onClose={handleCloseConfirm(onCloseMenu)}
                heading="Delete Button?"
              />
            );
          }}
        >
          Delete
        </OverflowMenu.Item>
      </OverflowMenu>
    </L10n>
  );

  return {
    ...renderedComponent,
  };
}

describe("OverflowMenu", () => {
  let getByText;
  let triggerComponent;
  let queryByText;

  beforeEach(() => {
    ({ getByText, queryByText } = renderComponent());
    triggerComponent = getByText(/trigger/i);
  });

  it("should show trigger initially with overflow hidden", () => {
    expect(triggerComponent).toBeVisible();
    expect(queryByText(/edit/i)).not.toBeInTheDocument();
  });
  it("should hide overflow when item is clicked", () => {
    fireEvent.click(triggerComponent);
    expect(getByText(/edit/i)).toBeVisible();
    fireEvent.click(getByText(/edit/i));
    expect(triggerComponent).toBeVisible();
    expect(queryByText(/edit/i)).not.toBeInTheDocument();
  });

  describe("Confirmation popover", () => {
    beforeEach(() => {
      fireEvent.click(triggerComponent);
      expect(getByText(/edit/i)).toBeVisible();
      fireEvent.click(getByText(/delete/i));
    });

    it("should replace overflow when destructive item is clicked", () => {
      expect(getByText(/confirm delete/i)).toBeVisible();
    });

    it("should hide all overflow menus when replacement cancel button is clicked", async () => {
      fireEvent.click(getByText(/cancel/i));

      await waitFor(() => {
        expect(queryByText(/confirm delete/i)).not.toBeInTheDocument();
        expect(queryByText(/edit/i)).not.toBeInTheDocument();
      });
    });
  });
});
