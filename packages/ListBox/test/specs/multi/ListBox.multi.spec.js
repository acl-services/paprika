import React from "react";
import { configure, render, fireEvent } from "@testing-library/react";
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
    expectDropdownIsHidden: () => {
      expect(rendered.getByTestId("popover.content").getAttribute("aria-hidden")).toBeTruthy();
    },
    expectDropdownIsNotHidden: () => {
      expect(rendered.getByTestId("popover.content").getAttribute("aria-hidden")).toMatch(/false/i);
    },
  };
}

describe("ListBox multi select", () => {
  describe("Basic", () => {
    it("dropdown should be hidden when first rendered", () => {
      const { expectDropdownIsHidden } = renderComponent();
      expectDropdownIsHidden();
    });

    it("dropdown should be visible when clicked", () => {
      const { openSelect, expectDropdownIsNotHidden } = renderComponent();

      openSelect();
      expectDropdownIsNotHidden();
    });

    it("dropdown should have correct number of options", () => {
      const { getByText, openSelect } = renderComponent();

      openSelect();
      expect(getByText(/venus/i)).toBeInTheDocument();
      expect(getByText(/jupiter/i)).toBeInTheDocument();
    });

    it("should be disabled", () => {
      const { openSelect, expectDropdownIsHidden } = renderComponent({
        isDisabled: true,
      });

      openSelect();
      expectDropdownIsHidden();
    });

    it("should have custom height of 500", () => {
      const { getByTestId } = renderComponent({
        height: 600,
      });

      expect(getByTestId("styled-list").getAttribute("height")).toMatch("600");
    });
  });
});
