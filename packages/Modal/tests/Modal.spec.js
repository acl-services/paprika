import React from "react";
import { render as renderReactTestingLibrary, fireEvent, getByRole, queryByRole } from "@testing-library/react";
import Button from "@paprika/button";
import Modal from "../src";

const noop = () => {};

describe("Modal", () => {
  given("children", () => "some content");
  given("onClose", () => noop);

  given("props", () => ({
    isOpen: given.isOpen,
    onClose: given.onClose,
    children: given.children,
  }));

  given("rendered", () => renderReactTestingLibrary(<Modal {...given.props} />));

  context("when opened", () => {
    given("isOpen", () => true);

    it("renders children", () => {
      expect(given.rendered.getByText(/some content/i)).toBeVisible();
    });

    it("renders outside of container", () => {
      expect(queryByRole(given.rendered.container, "dialog")).toBeNull();
      expect(getByRole(given.rendered.baseElement, "dialog")).toBeVisible();
    });

    it("triggers onClose when ESC press", () => {
      given("onClose", () => jest.fn());

      fireEvent.keyDown(given.rendered.getByRole("dialog"), { key: "Escape", keyCode: 27, which: 27 });

      expect(given.onClose).toHaveBeenCalled();
    });

    context("with Modal.Header", () => {
      given("children", () => <Modal.Header>Header</Modal.Header>);

      it("renders header", () => {
        expect(given.rendered.getByText(/Header/i)).toBeVisible();
      });
    });

    context("with Modal.Content", () => {
      given("children", () => <Modal.Content>Content</Modal.Content>);

      it("renders content", () => {
        expect(given.rendered.getByText(/Content/i)).toBeVisible();
      });
    });

    context("with Modal.Footer", () => {
      given("children", () => (
        <Modal.Footer>
          <Button>Footer Button</Button>
        </Modal.Footer>
      ));

      it("renders footer", () => {
        expect(given.rendered.getByText(/Footer Button/i)).toBeVisible();
      });
    });
  });

  context("when closed", () => {
    given("isOpen", () => false);

    it("renders nothing", () => {
      expect(given.rendered.container).toBeEmptyDOMElement();
    });

    it("does not trigger onClose when ESC press", () => {
      given("onClose", () => jest.fn());

      fireEvent.keyDown(given.rendered.container, { key: "Escape", keyCode: 27, which: 27 });

      expect(given.onClose).not.toHaveBeenCalled();
    });
  });

  describe("Modal.Header", () => {
    given("isOpen", () => true);
    given("headerProps", () => ({}));

    given("children", () => <Modal.Header {...given.headerProps}>Header</Modal.Header>);

    context("with close button", () => {
      it("renders", () => {
        const { getByText } = given.rendered;

        expect(getByText(/Header/i)).toBeVisible();
      });

      it("has close button", () => {
        const { getByRole } = given.rendered;

        expect(getByRole(/button/i)).toBeVisible();
      });

      it("triggers onClose when clicking the [x] button", () => {
        given("onClose", () => jest.fn());
        const { getByRole } = given.rendered;

        fireEvent.click(getByRole(/button/i));

        expect(given.onClose).toHaveBeenCalled();
      });
    });

    context("without close button", () => {
      given("headerProps", () => ({
        hasCloseButton: false,
      }));

      it("has not a close button", () => {
        const { queryByRole } = given.rendered;

        expect(queryByRole(/button/)).toBeNull();
      });
    });
  });
});
