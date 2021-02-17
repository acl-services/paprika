import React from "react";
import { render as renderReactTestingLibrary, configure, fireEvent } from "@testing-library/react";
import Panel from "../src";

configure({ testIdAttribute: "data-pka-anchor" });

const noop = () => {};
let consoleError;

function render(props) {
  const onClose = props.onClose || noop;
  const rendered = renderReactTestingLibrary(<Panel isOpen onClose={onClose} {...props} />);
  return {
    ...rendered,
  };
}

describe("Panel", () => {
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
      children: <Panel.Header>Header</Panel.Header>,
    });

    fireEvent.keyDown(getByRole("dialog"), { key: "Escape", keyCode: 27, which: 27 });

    expect(fn).toHaveBeenCalled();
  });

  describe("Panel.Header", () => {
    it("should have header", () => {
      const { getByText } = render({
        children: <Panel.Header>Header</Panel.Header>,
      });

      expect(getByText(/Header/i)).toBeVisible();
    });

    it("should have header and a close button", () => {
      const { getByRole } = render({
        children: <Panel.Header>Header</Panel.Header>,
      });

      expect(getByRole(/button/i)).toBeVisible();
    });

    it("should have header and not a close button", () => {
      const { queryByRole } = render({
        children: <Panel.Header hasCloseButton={false}>Header</Panel.Header>,
      });

      expect(queryByRole(/button/)).toBeNull();
    });

    it("should triggered onClose when clicking the [x] button", () => {
      const fn = jest.fn();
      const { getByRole } = render({
        onClose: fn,
        children: <Panel.Header>Header</Panel.Header>,
      });

      fireEvent.click(getByRole(/button/i));

      expect(fn).toHaveBeenCalled();
    });
  });

  describe("Panel.Overlay", () => {
    it("should triggered onClose when clicking on the Overlay", () => {
      const fn = jest.fn();
      const { getByTestId } = render({
        onClose: fn,
        children: <Panel.Overlay />,
      });

      fireEvent.click(getByTestId("overlay.backdrop"));

      expect(fn).toHaveBeenCalled();
    });
  });
  describe("Panel.Group", () => {
    it("should triggered onClose when clicking on the Overlay", () => {
      const fn = jest.fn();
      const { getByTestId } = render({
        onClose: fn,
        children: <Panel.Overlay />,
      });

      fireEvent.click(getByTestId("overlay.backdrop"));

      expect(fn).toHaveBeenCalled();
    });
  });
  describe("Panel.Trigger", () => {
    it("should triggered onClose when clicking on the Overlay", () => {
      const fn = jest.fn();
      const { getByTestId } = render({
        onClose: fn,
        children: <Panel.Overlay />,
      });

      fireEvent.click(getByTestId("overlay.backdrop"));

      expect(fn).toHaveBeenCalled();
    });
  });

  describe("Panel.Group", () => {
    it("should render with multiple panels", () => {
      const { getAllByTestId } = renderReactTestingLibrary(
        <Panel.Group>
          <Panel onClose={noop} isOpen>
            <Panel.Header>With Header</Panel.Header>
            <Panel.Overlay />
          </Panel>
          <Panel onClose={noop} isOpen>
            <Panel.Header>With Header</Panel.Header>
            <Panel.Overlay />
          </Panel>
          <Panel onClose={noop} isOpen>
            <Panel.Header kind="primary">With Header</Panel.Header>
            <Panel.Overlay />
          </Panel>
        </Panel.Group>
      );

      expect(getAllByTestId("panel")).toHaveLength(3);
    });

    it("throws an error when there is only one side panel in a group", () => {
      consoleError = console.error;
      console.error = () => {};

      try {
        renderReactTestingLibrary(
          <Panel.Group>
            <Panel onClose={noop} isOpen>
              <Panel.Header>With Header</Panel.Header>
              <Panel.Overlay />
            </Panel>
          </Panel.Group>
        );
      } catch (e) {
        expect(e.message).toBe("<Panel.Group /> is intented to be use with two or more Panels");
        console.error = consoleError;
      }
    });

    it("should trigger onClick when clicking the x button", () => {
      const noop = jest.fn();
      const { getAllByTestId } = renderReactTestingLibrary(
        <Panel.Group>
          <Panel onClose={noop} isOpen>
            <Panel.Header>With Header</Panel.Header>
            <Panel.Overlay />
          </Panel>
          <Panel onClose={noop} isOpen>
            <Panel.Header>With Header</Panel.Header>
            <Panel.Overlay />
          </Panel>
          <Panel onClose={noop} isOpen>
            <Panel.Header kind="primary">With Header</Panel.Header>
            <Panel.Overlay />
          </Panel>
        </Panel.Group>
      );
      fireEvent.click(getAllByTestId("panel.header.close")[0]);
      fireEvent.click(getAllByTestId("panel.header.close")[1]);
      fireEvent.click(getAllByTestId("panel.header.close")[2]);

      expect(noop).toBeCalledTimes(3);
    });
  });

  describe("Panel.Footer", () => {
    it("should included footer", () => {
      const fn = jest.fn();
      const { getByTestId } = render({
        onClose: fn,
        children: <Panel.Footer>Footer</Panel.Footer>,
      });

      expect(getByTestId("panel.footer")).toBeVisible();
    });
  });

  describe("Panel.Trigger", () => {
    it("renders with a default props", () => {
      const defaultProps = {
        children: <Panel.Trigger>Button</Panel.Trigger>,
      };
      const { getByRole } = render(defaultProps);
      expect(getByRole(/button/)).toBeInTheDocument();
    });
  });
});
