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

  function getComponent(newProps = {}, newConfirmation = null) {
    return (
      <L10n>
        <OverflowMenu {...props} {...newProps}>
          <OverflowMenu.Trigger>Trigger</OverflowMenu.Trigger>
          <OverflowMenu.Item onClick={() => {}}>Edit</OverflowMenu.Item>
          <OverflowMenu.Item onClick={() => {}}>Filter</OverflowMenu.Item>
          <OverflowMenu.Item
            isDestructive
            renderConfirmation={onCloseMenu => {
              return (
                newConfirmation || (
                  <Confirmation
                    body="description"
                    confirmLabel="Confirm Delete"
                    onConfirm={handleConfirm}
                    onClose={handleCloseConfirm(onCloseMenu)}
                    heading="Delete Button?"
                  />
                )
              );
            }}
          >
            Delete
          </OverflowMenu.Item>
        </OverflowMenu>
      </L10n>
    );
  }

  const renderedComponent = render(getComponent());

  return {
    ...renderedComponent,
    rerender: (newProps, newConfirmation) => {
      return renderedComponent.rerender(getComponent(newProps, newConfirmation));
    },
  };
}

describe("OverflowMenu", () => {
  let getByText;
  let triggerComponent;
  let queryByText;
  let rerender;

  beforeEach(() => {
    ({ getByText, queryByText, rerender } = renderComponent());
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

  it("should open and close by the controlled prop", () => {
    const { getByText, queryByText, rerender } = renderComponent({ isOpen: true });
    expect(getByText(/edit/i)).toBeVisible();
    rerender({ isOpen: false });
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

    it("should pass dynamic props to Confirmation on update", async () => {
      expect(getByText(/confirm delete/i)).toHaveAttribute("aria-disabled", "false");

      const newConfirmation = (
        <Confirmation
          isPending
          body="description"
          confirmLabel="Confirm Delete"
          onConfirm={() => {}}
          onClose={() => {}}
          heading="Delete Button?"
        />
      );

      rerender({}, newConfirmation);

      await waitFor(() => {
        expect(getByText(/confirm delete/i)).toHaveAttribute("aria-disabled", "true");
      });
    });
  });
});
