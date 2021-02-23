import React from "react";
import { render, fireEvent, configure } from "@testing-library/react";
import { Controlled } from "../../../stories/examples/Single/Controlled";
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
    selectVenus: () => {
      fireEvent.click(rendered.getByText(/venus/i));
    },
    selectJupiter: () => {
      fireEvent.click(rendered.getByText(/jupiter/i));
    },
    popoverIsHidden: () => {
      expect(rendered.getByTestId("popover.content").getAttribute("aria-hidden")).toBeTruthy();
    },
    popoverIsVisible: () => {
      expect(rendered.getByTestId("popover.content").getAttribute("aria-hidden")).toMatch(/false/i);
    },
  };
}

describe("ListBox single select", () => {
  it("dropdown should be hidden when first rendered", () => {
    const { popoverIsHidden } = renderComponent();
    popoverIsHidden();
  });

  it("dropdown should be visible when clicked", () => {
    const { openSelect, popoverIsVisible } = renderComponent();

    openSelect();
    popoverIsVisible();
  });

  it("dropdown should have correct number of options", () => {
    const { getByText, openSelect } = renderComponent();

    openSelect();
    expect(getByText(/venus/i)).toBeInTheDocument();
    expect(getByText(/jupiter/i)).toBeInTheDocument();
  });

  it("dropdown should close when choosing option and show clear button", () => {
    const { getByTestId, openSelect, selectVenus } = renderComponent();

    openSelect();
    selectVenus();
    expect(getByTestId("list-box-trigger")).toHaveTextContent(/venus/i);
    expect(getByTestId("clear-button")).toBeVisible();
  });

  it("should have custom height of 500", () => {
    const { getByTestId } = renderComponent({
      height: 500,
    });

    expect(getByTestId("styled-list").getAttribute("height")).toMatch("500");
  });

  it("should be disabled", () => {
    const { openSelect, popoverIsHidden } = renderComponent({
      isDisabled: true,
    });

    openSelect();
    popoverIsHidden();
  });

  it("should select an option via a controlled button", () => {
    const { getByTestId, getAllByTestId } = render(<Controlled />);

    const button = getByTestId("button_1");
    expect(button).not.toBeNull();

    fireEvent.click(button);

    expect(getAllByTestId("list-option--is-selected").length).toBe(1);
    expect(getByTestId("list-option--is-selected").textContent).toBe("Wonder Woman");
  });

  it("should select only ONE option via a controlled button", () => {
    const { getByTestId, getAllByTestId } = render(<Controlled />);

    const button1 = getByTestId("button_1");
    const button2 = getByTestId("button_2");
    expect(button1).not.toBeNull();
    expect(button2).not.toBeNull();

    fireEvent.click(button1);
    fireEvent.click(button2);

    expect(getAllByTestId("list-option--is-selected").length).toBe(1);
    expect(getByTestId("list-option--is-selected").textContent).toBe("Spiderman");
  });
});
