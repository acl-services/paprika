import React from "react";
import { render as renderReactTestingLibrary, configure, fireEvent } from "@testing-library/react";
import Panels from "../src";

configure({ testIdAttribute: "data-pka-anchor" });

const noop = () => {};
let consoleError;

function render(props) {
  const onClose = props.onClose || noop;
  const rendered = renderReactTestingLibrary(<Panels isOpen onClose={onClose} {...props} />);
  return {
    ...rendered,
  };
}

describe("Panels", () => {
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
      children: <Panels.Header>Header</Panels.Header>,
    });

    fireEvent.keyDown(getByRole("dialog"), { key: "Escape", keyCode: 27, which: 27 });

    expect(fn).toHaveBeenCalled();
  });

  describe("Panels.Header", () => {
    it("should have header", () => {
      const { getByText } = render({
        children: <Panels.Header>Header</Panels.Header>,
      });

      expect(getByText(/Header/i)).toBeVisible();
    });

    it("should have header and a close button", () => {
      const { getByRole } = render({
        children: <Panels.Header>Header</Panels.Header>,
      });

      expect(getByRole(/button/i)).toBeVisible();
    });

    it("should have header and not a close button", () => {
      const { queryByRole } = render({
        children: <Panels.Header hasCloseButton={false}>Header</Panels.Header>,
      });

      expect(queryByRole(/button/)).toBeNull();
    });

    it("should triggered onClose when clicking the [x] button", () => {
      const fn = jest.fn();
      const { getByRole } = render({
        onClose: fn,
        children: <Panels.Header>Header</Panels.Header>,
      });

      fireEvent.click(getByRole(/button/i));

      expect(fn).toHaveBeenCalled();
    });
  });

  describe("Panels.Overlay", () => {
    it("should triggered onClose when clicking on the Overlay", () => {
      const fn = jest.fn();
      const { getByRole } = render({
        onClose: fn,
        children: <Panels.Overlay />,
      });

      // overlay is a RawButton
      fireEvent.click(getByRole(/button/i));

      expect(fn).toHaveBeenCalled();
    });
  });
  describe("Panels.Group", () => {
    it("should triggered onClose when clicking on the Overlay", () => {
      const fn = jest.fn();
      const { getByRole } = render({
        onClose: fn,
        children: <Panels.Overlay />,
      });

      // overlay is a RawButton
      fireEvent.click(getByRole(/button/i));

      expect(fn).toHaveBeenCalled();
    });
  });
  describe("Panels.Trigger", () => {
    it("should triggered onClose when clicking on the Overlay", () => {
      const fn = jest.fn();
      const { getByRole } = render({
        onClose: fn,
        children: <Panels.Overlay />,
      });

      // overlay is a RawButton
      fireEvent.click(getByRole(/button/i));

      expect(fn).toHaveBeenCalled();
    });
  });

  describe("Panels.Group", () => {
    it("should render with multiple panelss", () => {
      const { getAllByTestId } = renderReactTestingLibrary(
        <Panels.Group>
          <Panels onClose={noop} isOpen>
            <Panels.Header>With Header</Panels.Header>
            <Panels.Overlay />
          </Panels>
          <Panels onClose={noop} isOpen>
            <Panels.Header>With Header</Panels.Header>
            <Panels.Overlay />
          </Panels>
          <Panels onClose={noop} isOpen>
            <Panels.Header kind="primary">With Header</Panels.Header>
            <Panels.Overlay />
          </Panels>
        </Panels.Group>
      );

      expect(getAllByTestId("panels")).toHaveLength(3);
    });

    it("throws an error when there is only one side panel in a group", () => {
      consoleError = console.error;
      console.error = () => {};

      try {
        renderReactTestingLibrary(
          <Panels.Group>
            <Panels onClose={noop} isOpen>
              <Panels.Header>With Header</Panels.Header>
              <Panels.Overlay />
            </Panels>
          </Panels.Group>
        );
      } catch (e) {
        expect(e.message).toBe("<Panels.Group /> is intented to be use with two or more Panelss");
        console.error = consoleError;
      }
    });

    it("should trigger onClick when clicking the x button", () => {
      const noop = jest.fn();
      const { getAllByTestId } = renderReactTestingLibrary(
        <Panels.Group>
          <Panels onClose={noop} isOpen>
            <Panels.Header>With Header</Panels.Header>
            <Panels.Overlay />
          </Panels>
          <Panels onClose={noop} isOpen>
            <Panels.Header>With Header</Panels.Header>
            <Panels.Overlay />
          </Panels>
          <Panels onClose={noop} isOpen>
            <Panels.Header kind="primary">With Header</Panels.Header>
            <Panels.Overlay />
          </Panels>
        </Panels.Group>
      );
      fireEvent.click(getAllByTestId("panels.header.close")[0]);
      fireEvent.click(getAllByTestId("panels.header.close")[1]);
      fireEvent.click(getAllByTestId("panels.header.close")[2]);

      expect(noop).toBeCalledTimes(3);
    });
  });

  describe("Panels.Footer", () => {
    it("should included footer", () => {
      const fn = jest.fn();
      const { getByTestId } = render({
        onClose: fn,
        children: <Panels.Footer>Footer</Panels.Footer>,
      });

      expect(getByTestId("panels.footer")).toBeVisible();
    });
  });

  describe("Panels.Trigger", () => {
    it("renders with a default props", () => {
      const defaultProps = {
        children: <Panels.Trigger>Button</Panels.Trigger>,
      };
      const { getByRole } = render(defaultProps);
      expect(getByRole(/button/)).toBeInTheDocument();
    });
  });
});
