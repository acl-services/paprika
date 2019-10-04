import React from "react";
import { render, fireEvent, configure } from "@testing-library/react";
import ListBox from "../../../src";
import { ControlledIsSelected as ListBoxControlled } from "../../../stories/examples/single";

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

describe("Listbox single select", () => {
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
    expect(getByTestId("listbox-trigger")).toHaveTextContent(/venus/i);
    expect(getByTestId("clear-button")).toBeVisible();
  });

  it("should clear selected option when x is clicked", () => {
    const { queryByTestId, getByTestId, openSelect, selectVenus } = renderComponent();

    openSelect();
    selectVenus();
    fireEvent.click(getByTestId("clear-button"));
    expect(queryByTestId("clear-button")).toBeNull();
    expect(getByTestId("listbox-trigger")).not.toHaveTextContent(/venus/i);
    expect(getByTestId("listbox-trigger")).toHaveTextContent(/select/i);
  });

  it("should have a filter in dropdown", () => {
    const { getByText, getByTestId } = render(
      <ListBox>
        <ListBox.Filter />
        <ListBox.Option>Venus</ListBox.Option>
        <ListBox.Option>Jupiter</ListBox.Option>
      </ListBox>
    );

    fireEvent.click(getByText(/Select/));
    expect(getByTestId("list-filter")).toBeInTheDocument();
  });

  it("should have custom height of 500", () => {
    const { getByTestId } = renderComponent({
      height: 500,
    });

    expect(getByTestId("styled-list").getAttribute("height")).toMatch("500");
  });

  //
  it("should be disabled", () => {
    const { openSelect, popoverIsHidden } = renderComponent({
      isDisabled: true,
    });

    openSelect();
    popoverIsHidden();
  });

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

  it("should display message when filter input does not find a match", () => {
    const { getByTestId, getByText } = render(
      <ListBox>
        <ListBox.Filter noResultsMessage="No match" />
        <ListBox.Option>Venus</ListBox.Option>
        <ListBox.Option>Jupiter</ListBox.Option>
      </ListBox>
    );

    fireEvent.click(getByText(/Select/));
    fireEvent.change(getByTestId("list-filter-input"), { target: { value: "g" } });
    expect(getByTestId("no-results")).toBeInTheDocument();
    expect(getByText("No match")).toBeInTheDocument();
  });

  it("placeholder should display default label when no option is selected", () => {
    const { getByText } = renderComponent();

    expect(getByText(/Select/i)).toBeInTheDocument();
  });

  it("placeholder should display custom label when no option is selected", () => {
    const { getByText } = renderComponent({
      placeholder: "Choose an option!",
    });

    expect(getByText("Choose an option!")).toBeInTheDocument();
  });

  it("should have popover open already ", () => {
    const { popoverIsVisible } = renderComponent({
      isOpen: true,
    });

    popoverIsVisible();
  });

  it("onChange should have a correct signature (selectedIndex, options, more)", () => {
    const customChildrenContent = [
      <ListBox.Option key="1" value="11">
        Venus
      </ListBox.Option>,
      <ListBox.Option key="2" value="21">
        Jupiter
      </ListBox.Option>,
    ];

    function onChange(selectedIndex, options, more) {
      expect(arguments.length).toBe(3);
      expect(typeof selectedIndex).toBe("number");

      expect(options[0].value).toBe("11");
      expect(options[1].value).toBe("21");
      expect(options[0].label).toBe("Venus");
      expect(options[1].label).toBe("Jupiter");

      expect("actionTypes" in more).toBeTruthy();
      expect("eventType" in more).toBeTruthy();
    }

    const { openSelect, selectVenus } = renderComponent(
      {
        onChange,
      },
      [...customChildrenContent]
    );

    openSelect();
    selectVenus();
  });

  // onClickClear passes even when clear button is not shown on the UI after selecting an option from the popover.
  // Because of CSS the clear button is still present
  it("calls onClickClear event when clicking clear button", () => {
    const onClickClearTrigger = jest.fn();
    const { getByTestId, openSelect, selectVenus } = renderComponent({}, [
      <ListBox.Trigger key="trigger" onClickClear={onClickClearTrigger} />,
      [...childrenContent],
    ]);

    openSelect();
    selectVenus();
    fireEvent.click(getByTestId("clear-button"));
    expect(onClickClearTrigger).toHaveBeenCalled();
  });

  it("should not render the 'x' clear button", () => {
    const { queryByTestId, openSelect, selectVenus } = renderComponent({}, [
      <ListBox.Trigger key="trigger" hasClearButton={false} />,
      [...childrenContent],
    ]);

    openSelect();
    selectVenus();
    expect(queryByTestId("clear-button")).toBeNull();
  });

  it("should select an option via a controlled button", () => {
    const { getByTestId, getAllByTestId } = render(<ListBoxControlled />);

    const button = getByTestId("button_1");
    expect(button).not.toBeNull();

    fireEvent.click(button);

    expect(getAllByTestId("list-option--is-selected").length).toBe(1);
    expect(getByTestId("list-option--is-selected").textContent).toBe("Wonder Woman");
  });

  it("should select only ONE option via a controlled button", () => {
    const { getByTestId, getAllByTestId } = render(<ListBoxControlled />);

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
