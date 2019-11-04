import React from "react";
import { render as renderReactTestingLibrary, fireEvent, getByRole, queryByRole } from "@testing-library/react";
import Takeover from "../src";

const noop = () => {};

describe("Takeover", () => {
  given("children", () => "some content");
  given("onClose", () => noop);

  given("props", () => ({
    isOpen: given.isOpen,
    isInline: given.isInline,
    onClose: given.onClose,
    children: given.children,
  }));

  given("rendered", () => renderReactTestingLibrary(<Takeover {...given.props} />));

  context("when opened", () => {
    given("isOpen", () => true);

    const sharedExamples = () => {
      it("renders children", () => {
        expect(given.rendered.getByText(/some content/i)).toBeVisible();
      });

      it("triggers onClose when ESC press", () => {
        given("onClose", () => jest.fn());

        fireEvent.keyDown(given.rendered.getByRole("dialog"), { key: "Escape", keyCode: 27, which: 27 });

        expect(given.onClose).toHaveBeenCalled();
      });

      context("with Takeover.Header", () => {
        given("children", () => <Takeover.Header>Header</Takeover.Header>);

        it("renders header", () => {
          expect(given.rendered.getByText(/Header/i)).toBeVisible();
        });
      });

      context("with Takeover.Content", () => {
        given("children", () => <Takeover.Content>Content</Takeover.Content>);

        it("renders content", () => {
          expect(given.rendered.getByText(/Content/i)).toBeVisible();
        });
      });
    };

    context("when inline", () => {
      given("isInline", () => true);

      it("renders within container", () => {
        expect(getByRole(given.rendered.container, "dialog")).toBeVisible();
      });

      sharedExamples();
    });

    context("when portaled", () => {
      given("isInline", () => false);

      it("renders outside of container", () => {
        expect(queryByRole(given.rendered.container, "dialog")).toBeNull();
        expect(getByRole(given.rendered.baseElement, "dialog")).toBeVisible();
      });

      sharedExamples();
    });
  });

  context('when closed', () => {
    given("isOpen", () => false);
    given("isInline", () => false);

    it('renders nothing', () => {
      expect(given.rendered.container).toBeEmpty()
    });

    it("does not trigger onClose when ESC press", () => {
      given("onClose", () => jest.fn());

      fireEvent.keyDown(given.rendered.container, { key: "Escape", keyCode: 27, which: 27 });

      expect(given.onClose).not.toHaveBeenCalled();
    });
  });

  describe("Takeover.Header", () => {
    given("isOpen", () => true);
    given("isInline", () => false);
    given("headerProps", () => ({}));

    given("children", () => <Takeover.Header {...given.headerProps}>Header</Takeover.Header>);

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
