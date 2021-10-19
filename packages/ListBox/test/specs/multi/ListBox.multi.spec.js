import React from "react";
import { configure, render, fireEvent, waitFor, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import ListBox from "../../../src";

configure({ testIdAttribute: "data-pka-anchor" });

const childrenContent = [
  <ListBox.Option key="1">Venus</ListBox.Option>,
  <ListBox.Option key="2">Jupiter</ListBox.Option>,
];

function renderComponent(props = {}, children = childrenContent) {
  const rendered = render(
    <ListBox isMulti {...props}>
      {children}
    </ListBox>
  );

  return {
    ...rendered,
    openSelect: () => {
      fireEvent.click(rendered.getByText(/select/i));
    },
    expectDropdownIsNotVisible: async () => {
      await waitFor(() => {
        expect(screen.queryByTestId("popover.content")).not.toBeInTheDocument();
      });
    },
    expectDropdownIsVisible: () => {
      expect(rendered.getByTestId("popover.content")).toBeInTheDocument();
    },
  };
}

describe("ListBox multi select", () => {
  describe("Basic", () => {
    it("dropdown should be hidden when first rendered", () => {
      const { expectDropdownIsNotVisible } = renderComponent();
      expectDropdownIsNotVisible();
    });

    it("dropdown should be visible when clicked", () => {
      const { openSelect, expectDropdownIsVisible } = renderComponent();

      openSelect();
      expectDropdownIsVisible();
    });

    it("dropdown should have correct number of options", () => {
      const { getByText, openSelect } = renderComponent();

      openSelect();
      expect(getByText(/venus/i)).toBeInTheDocument();
      expect(getByText(/jupiter/i)).toBeInTheDocument();
    });

    it("should be disabled", () => {
      const { openSelect, expectDropdownIsNotVisible } = renderComponent({
        isDisabled: true,
      });

      openSelect();
      expectDropdownIsNotVisible();
    });

    it("should have custom height of 500", () => {
      const { getByTestId, openSelect } = renderComponent({
        height: 600,
      });

      openSelect();
      expect(getByTestId("styled-list").getAttribute("height")).toMatch("600");
    });

    it("should not fail any accessibility tests", async () => {
      const { container } = renderComponent();
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
