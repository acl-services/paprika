import React from "react";
import { render, fireEvent, configure, waitFor } from "@testing-library/react";
import ListBox from "../../../src";

configure({ testIdAttribute: "data-pka-anchor" });

const childrenContent = [
  <ListBox.Option key="venus">Venus</ListBox.Option>,
  <ListBox.Option key="jupiter">Jupiter</ListBox.Option>,
];

function renderComponent(props = {}, children = childrenContent) {
  const rendered = render(<ListBox {...props}>{children}</ListBox>);

  return {
    ...rendered,
    openSelect: () => {
      fireEvent.click(rendered.getByText(/select/i));
    },
    popoverIsVisible: () => {
      expect(rendered.getByTestId("popover.content")).toBeVisible();
    },
  };
}

describe("ListBox.Popover", () => {
  it("should be displayed inline with no Popover", () => {
    const { queryByTestId } = renderComponent({
      isInline: true,
    });

    expect(queryByTestId("popover.content")).toBeNull();
  });

  it("should focus on option container as soon as the Popover is open", async () => {
    const { openSelect } = renderComponent();

    openSelect();
    await waitFor(() => {
      const activeElementPkaAnchor = document.activeElement.dataset.pkaAnchor;
      expect(activeElementPkaAnchor).toBe("popover.content");
    });
  });

  it("should have popover open already ", () => {
    const { popoverIsVisible } = renderComponent({
      isOpen: true,
    });

    popoverIsVisible();
  });
});
