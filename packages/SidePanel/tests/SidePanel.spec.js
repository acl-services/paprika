import React from "react";
import { render as renderReactTestingLibrary, configure, fireEvent } from "react-testing-library";
import SidePanel from "../src";

configure({ testIdAttribute: "data-qa-anchor" });

const noop = () => {};

function render(props) {
  const onClose = props.onClose || noop;
  const rendered = renderReactTestingLibrary(<SidePanel isOpen onClose={onClose} {...props} />);

  return {
    ...rendered,
  };
}

describe("SidePanel", () => {
  it("basic", () => {
    const { getByText } = render({
      children: "some content",
    });
    expect(getByText(/some content/i)).toBeInTheDocument();
  });

  it("should triggered onClose when pressing ESC key", () => {
    const fn = jest.fn();
    const { getByRole } = render({
      onClose: fn,
      children: <SidePanel.Header>Header</SidePanel.Header>,
    });

    fireEvent.keyDown(getByRole("dialog"), { key: "Escape", keyCode: 27, which: 27 });

    expect(fn).toHaveBeenCalled();
  });

  describe("SidePanel.Header", () => {
    it("should have header", () => {
      const { getByText } = render({
        children: <SidePanel.Header>Header</SidePanel.Header>,
      });

      expect(getByText(/Header/i)).toBeInTheDocument();
    });

    it("should have header and a close button", () => {
      const { getByRole } = render({
        children: <SidePanel.Header>Header</SidePanel.Header>,
      });

      expect(getByRole(/button/i)).toBeInTheDocument();
    });

    it("should have header and not a close button", () => {
      const { queryByRole } = render({
        children: <SidePanel.Header hasCloseButton={false}>Header</SidePanel.Header>,
      });

      expect(queryByRole(/button/)).toBeNull();
    });

    it("should triggered onClose when clicking the [x] button", () => {
      const fn = jest.fn();
      const { getByRole } = render({
        onClose: fn,
        children: <SidePanel.Header>Header</SidePanel.Header>,
      });

      fireEvent.click(getByRole(/button/i));

      expect(fn).toHaveBeenCalled();
    });
  });

  describe("SidePanel.Overlay", () => {
    it("should triggered onClose when clicking on the Overlay", () => {
      const fn = jest.fn();
      const { getByRole } = render({
        onClose: fn,
        children: <SidePanel.Overlay />,
      });

      // overlay is a RawButton
      fireEvent.click(getByRole(/button/i));

      expect(fn).toHaveBeenCalled();
    });
  });

  describe("SidePanel.Footer", () => {
    it("should included footer", () => {
      const fn = jest.fn();
      const { getByTestId } = render({
        onClose: fn,
        children: <SidePanel.Footer data-qa-anchor="sidepanel.footer" />,
      });

      expect(getByTestId("sidepanel.footer")).toBeInTheDocument();
    });
  });
});
