import React from "react";
import { render as renderReactTestingLibrary, configure, fireEvent } from "@testing-library/react";
import SidePanel from "../src";

configure({ testIdAttribute: "data-pka-anchor" });

const noop = () => {};
let consoleError;

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
    expect(getByText(/some content/i)).toBeVisible();
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

      expect(getByText(/Header/i)).toBeVisible();
    });

    it("should have header and a close button", () => {
      const { getByRole } = render({
        children: <SidePanel.Header>Header</SidePanel.Header>,
      });

      expect(getByRole(/button/i)).toBeVisible();
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
  describe("SidePanel.Group", () => {
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
  describe("SidePanel.Trigger", () => {
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

  describe("SidePanel.Group", () => {
    it("should render with multiple sidepanels", () => {
      const { getAllByTestId } = renderReactTestingLibrary(
        <SidePanel.Group>
          <SidePanel onClose={noop} isOpen>
            <SidePanel.Header>With Header</SidePanel.Header>
            <SidePanel.Overlay />
          </SidePanel>
          <SidePanel onClose={noop} isOpen>
            <SidePanel.Header>With Header</SidePanel.Header>
            <SidePanel.Overlay />
          </SidePanel>
          <SidePanel onClose={noop} isOpen>
            <SidePanel.Header kind="primary">With Header</SidePanel.Header>
            <SidePanel.Overlay />
          </SidePanel>
        </SidePanel.Group>
      );

      expect(getAllByTestId("sidepanel")).toHaveLength(3);
    });

    it("throws an error when there is only one side panel in a group", () => {
      consoleError = console.error;
      console.error = () => {};

      try {
        renderReactTestingLibrary(
          <SidePanel.Group>
            <SidePanel onClose={noop} isOpen>
              <SidePanel.Header>With Header</SidePanel.Header>
              <SidePanel.Overlay />
            </SidePanel>
          </SidePanel.Group>
        );
      } catch (e) {
        expect(e.message).toBe("<SidePanel.Group /> is intented to be use with two or more SidePanels");
        console.error = consoleError;
      }
    });

    it("should trigger onClick when clicking the x button", () => {
      const noop = jest.fn();
      const { getAllByTestId } = renderReactTestingLibrary(
        <SidePanel.Group>
          <SidePanel onClose={noop} isOpen>
            <SidePanel.Header>With Header</SidePanel.Header>
            <SidePanel.Overlay />
          </SidePanel>
          <SidePanel onClose={noop} isOpen>
            <SidePanel.Header>With Header</SidePanel.Header>
            <SidePanel.Overlay />
          </SidePanel>
          <SidePanel onClose={noop} isOpen>
            <SidePanel.Header kind="primary">With Header</SidePanel.Header>
            <SidePanel.Overlay />
          </SidePanel>
        </SidePanel.Group>
      );
      fireEvent.click(getAllByTestId("sidepanel.header.close")[0]);
      fireEvent.click(getAllByTestId("sidepanel.header.close")[1]);
      fireEvent.click(getAllByTestId("sidepanel.header.close")[2]);

      expect(noop).toBeCalledTimes(3);
    });
  });

  describe("SidePanel.Footer", () => {
    it("should included footer", () => {
      const fn = jest.fn();
      const { getByTestId } = render({
        onClose: fn,
        children: <SidePanel.Footer>Footer</SidePanel.Footer>,
      });

      expect(getByTestId("sidepanel.footer")).toBeVisible();
    });
  });

  describe("SidePanel.Trigger", () => {
    it("renders with a default props", () => {
      const defaultProps = {
        children: <SidePanel.Trigger>Button</SidePanel.Trigger>,
      };
      const { getByRole } = render(defaultProps);
      expect(getByRole(/button/)).toBeInTheDocument();
    });
  });
});
