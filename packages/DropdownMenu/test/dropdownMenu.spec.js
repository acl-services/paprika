import React from "react";
import { render, configure, fireEvent } from "@testing-library/react";
import L10n from "@paprika/l10n";
import Confirmation from "@paprika/confirmation";
import DropdownMenu from "../src";

configure({ testIdAttribute: "data-qa-anchor" });

function renderComponent(props = {}) {
  const handleConfirm = onCloseMenu => onCloseConfirm => {
    onCloseConfirm();
    onCloseMenu();
  };
  const renderedComponent = render(
    <L10n>
      <DropdownMenu
        renderTrigger={({ isOpen, handleOpenMenu }) => (
          <DropdownMenu.Trigger isOpen={isOpen} onOpenMenu={handleOpenMenu} {...props}>
            Trigger
          </DropdownMenu.Trigger>
        )}
      >
        <DropdownMenu.Item onClick={() => {}}>Edit</DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => {}}>Filter</DropdownMenu.Item>
        <DropdownMenu.Item
          isDestructive
          renderConfirmation={onCloseMenu => {
            return (
              <Confirmation
                body="description"
                defaultIsOpen
                confirmLabel="Confirm Delete"
                onConfirm={handleConfirm(onCloseMenu)}
                heading="Delete Button?"
              />
            );
          }}
        >
          Delete
        </DropdownMenu.Item>
      </DropdownMenu>
    </L10n>
  );

  return {
    ...renderedComponent,
  };
}

describe("DropdownMenu", () => {
  let getByText;
  let triggerComponent;
  let queryByText;

  beforeEach(() => {
    ({ getByText, queryByText } = renderComponent());
    triggerComponent = getByText(/trigger/i);
  });

  it("should show trigger initially with dropdown hidden", () => {
    expect(triggerComponent).toBeVisible();
    expect(queryByText(/edit/i)).not.toBeInTheDocument();
  });
  it("should hide dropdown when item is clicked", () => {
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

    it("should replace dropdown when destructive item is clicked", () => {
      expect(getByText(/confirm delete/i)).toBeVisible();
    });

    it("should hide all dropdown menus when replacement cancel button is clicked", done => {
      fireEvent.click(getByText(/cancel/i));
      setTimeout(() => {
        expect(queryByText(/confirm delete/i)).not.toBeInTheDocument();
        expect(queryByText(/edit/i)).not.toBeInTheDocument();
        done();
      }, 350);
    });
  });
});
