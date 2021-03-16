import React from "react";
import { configure, render, fireEvent, waitFor } from "@testing-library/react";
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
    selectVenus: () => {
      fireEvent.click(rendered.getByText(/venus/i));
    },
    selectJupiter: () => {
      fireEvent.click(rendered.getByText(/jupiter/i));
    },
    expectDropdownIsNotHidden: () => {
      expect(rendered.getByTestId("popover.content").getAttribute("aria-hidden")).toMatch(/false/i);
    },
  };
}

describe("ListBox.Popover", () => {
  it("popover should not close when selecting and show chosen options in trigger", () => {
    const { getByTestId, expectDropdownIsNotHidden, openSelect, selectVenus, selectJupiter } = renderComponent();

    openSelect();
    selectVenus();
    expectDropdownIsNotHidden();
    selectJupiter();
    expect(getByTestId("list-box-trigger")).toHaveTextContent(/venus, jupiter/i);
  });

  it("should be displayed inline with no Popover", () => {
    const { queryByTestId } = renderComponent({
      isInline: true,
    });

    expect(queryByTestId("popover.content")).toBeNull();
  });

  it("should not focus on the first options soon as the Popover opens when is multi", async () => {
    const { openSelect } = renderComponent();

    openSelect();
    await waitFor(() => {
      const activeElementPkaAnchor = document.activeElement.dataset.pkaAnchor;
      expect(activeElementPkaAnchor).toBe("popover.content");
    });
  });

  it("should not focus on option container as soon as the Popover is open", () => {
    const { openSelect, getByTestId } = renderComponent({}, [
      <ListBox.Popover key="Popover" shouldKeepFocus />,
      [...childrenContent],
    ]);

    openSelect();
    expect(document.activeElement).not.toBe(getByTestId("popover.content"));
  });

  it("should have popover open already ", () => {
    const { expectDropdownIsNotHidden } = renderComponent({
      isOpen: true,
    });

    expectDropdownIsNotHidden();
  });
});
