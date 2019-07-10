import React from "react";
import { render, configure } from "react-testing-library";
import L10n from "@paprika/l10n";

import DropdownMenu from "../src";

configure({ testIdAttribute: "data-qa-anchor" });

const evt = document.createEvent("HTMLEvents");

function renderComponent(props = {}) {
  const renderedComponent = render(
    <L10n>
      <DropdownMenu
        renderTrigger={({ isOpen, handleOpenMenu }) => (
          <DropdownMenu.Trigger isOpen={isOpen} handleOpenMenu={handleOpenMenu} {...props}>
            Trigger
          </DropdownMenu.Trigger>
        )}
      >
        <DropdownMenu.Item onClick={() => {}}>Edit</DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => {}}>Filter</DropdownMenu.Item>
        <DropdownMenu.Item
          isDestructive
          renderConfirmation={handleCloseMenu => {
            return (
              <DropdownMenu.Confirmation
                confirmLabel="Confirm Delete"
                onConfirm={() => {
                  handleCloseMenu();
                }}
                onCancel={() => {
                  handleCloseMenu();
                }}
                title="Delete Button"
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
  it("should show trigger initially with dropdown hidden", () => {
    const { getByText } = renderComponent();
    expect(getByText(/trigger/i)).toBeVisible();
    expect(getByText(/edit/i)).not.toBeVisible();
  });

  it("should hide dropdown menu when outside is clicked", () => {
    const { getByText } = renderComponent();
    getByText("Trigger").click();
    expect(getByText(/edit/i)).toBeVisible();
    evt.initEvent("click", false, true);
    document.body.dispatchEvent(evt);
    setTimeout(() => {
      expect(getByText(/trigger/i)).toBeVisible();
      expect(getByText(/edit/i)).not.toBeVisible();
    }, 150);
  });

  it("should hide dropdown when item is clicked", () => {
    const { getByText } = renderComponent();
    getByText("Trigger").click();
    expect(getByText(/edit/i)).toBeVisible();
    getByText(/edit/i).click();
    setTimeout(() => {
      expect(getByText(/trigger/i)).toBeVisible();
      expect(getByText(/edit/i)).not.toBeVisible();
    }, 150);
  });

  it("should hide dropdown when trigger is clicked again", () => {
    const { getByText } = renderComponent();
    getByText("Trigger").click();
    expect(getByText(/edit/i)).toBeVisible();
    getByText("Trigger").click();
    setTimeout(() => {
      expect(getByText(/trigger/i)).toBeVisible();
      expect(getByText(/edit/i)).not.toBeVisible();
    }, 150);
  });

  describe("replacement popover", () => {
    beforeEach(() => {
      const { getByText } = renderComponent();
      getByText("Trigger").click();
      expect(getByText(/edit/i)).toBeVisible();
      getByText(/delete/i).click();
    });

    it("should replace dropdown when destructive item is clicked", () => {
      const { getByText } = renderComponent();
      expect(getByText(/confirm delete/i)).toBeVisible();
    });

    it("should hide all dropdown menus when replacement cancel button is clicked", () => {
      const { getByText } = renderComponent();
      getByText(/cancel/i).click();
      setTimeout(() => {
        expect(getByText(/confirm delete/i)).not.toBeVisible();
        expect(getByText(/edit/i)).not.toBeVisible();
      }, 150);
    });

    it("should hide all dropdown menus when primary button is clicked inside replacement popover", () => {
      const { getByText } = renderComponent();
      getByText("Delete Button").click();
      setTimeout(() => {
        expect(getByText(/confirm delete/i)).not.toBeVisible();
        expect(getByText(/edit/i)).not.toBeVisible();
      }, 150);
    });
  });
});
