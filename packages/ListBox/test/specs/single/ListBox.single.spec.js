import React from "react";
import { render, fireEvent, configure, screen, waitFor } from "@testing-library/react";
import { axe } from "jest-axe";
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
    popoverIsVisible: () => {
      expect(rendered.getByTestId("popover.content")).toBeInTheDocument();
    },
    popoverIsNotVisible: async () => {
      await waitFor(() => {
        expect(screen.queryByTestId("popover.content")).not.toBeInTheDocument();
      });
    },
  };
}

describe("ListBox single select", () => {
  it("dropdown should not be visible when first rendered", () => {
    const { popoverIsNotVisible } = renderComponent();
    popoverIsNotVisible();
  });
  it("dropdown should be visible when clicked", () => {
    const { openSelect, popoverIsVisible } = renderComponent();

    openSelect();
    popoverIsVisible();
  });

  it("dropdown should toggle when clicked", async () => {
    const { popoverIsVisible, popoverIsNotVisible } = renderComponent();

    fireEvent.click(screen.getByText(/select/i));
    popoverIsVisible();
    fireEvent.click(screen.getByText(/select/i));
    popoverIsNotVisible();
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
    const { getByTestId, openSelect } = renderComponent({
      height: 500,
    });

    openSelect();
    expect(getByTestId("styled-list").getAttribute("height")).toMatch("500");
  });

  it("should be disabled", () => {
    const { openSelect, popoverIsNotVisible } = renderComponent({
      isDisabled: true,
    });

    openSelect();
    popoverIsNotVisible();
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

  it("should not fail any accessibility tests", async () => {
    const { container } = renderComponent();
    expect(await axe(container)).toHaveNoViolations();
  });

  it("should spread props to ListBox subcomponents", () => {
    const { openSelect, getByTestId } = renderComponent({}, [
      <ListBox.Content key="content" data-testid="test-content" />,
      <ListBox.Filter key="filter" data-testid="test-filter" />,
      <ListBox.Box key="box" data-testid="test-box" />,
      [...childrenContent],
    ]);

    openSelect();
    expect(getByTestId("popover.content").getAttribute("data-testid")).toEqual("test-content");
    expect(getByTestId("list-filter-input").getAttribute("data-testid")).toEqual("test-filter");
    expect(getByTestId("list-box-box").getAttribute("data-testid")).toEqual("test-box");
  });
});
