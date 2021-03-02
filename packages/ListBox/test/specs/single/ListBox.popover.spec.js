import React from "react";
import { render, fireEvent, configure } from "@testing-library/react";
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
      expect(rendered.getByTestId("popover.content").getAttribute("aria-hidden")).toMatch(/false/i);
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

  it("should focus on option container as soon as the Popover is open", done => {
    const { openSelect, getByTestId } = renderComponent();

    openSelect();
    setTimeout(() => {
      expect(document.activeElement).toBe(getByTestId("popover.content"));
      done();
    }, 350);
  });

  it("should not focus on option container as soon as the Popover is open", done => {
    const { getByText, getByTestId } = render(
      <ListBox>
        <ListBox.Popover key="Popover" shouldKeepFocus />
        <ListBox.Option>Venus</ListBox.Option>
        <ListBox.Option>Jupiter</ListBox.Option>
      </ListBox>
    );

    fireEvent.click(getByText(/Select/));

    // NOT BEST PRACTICE: fix later, this is due the timer I had to put on the ListBox becaue the PopoverTimer
    setTimeout(() => {
      expect(document.activeElement).not.toBe(getByTestId("popover.content"));
      done();
    }, 350);
  });

  it("should have popover open already ", () => {
    const { popoverIsVisible } = renderComponent({
      isOpen: true,
    });

    popoverIsVisible();
  });
});
