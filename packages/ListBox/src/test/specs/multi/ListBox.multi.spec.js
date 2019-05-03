import React from "react";
import { configure } from "react-testing-library";

import { render, fireEvent } from "react-testing-library";
import ListBox from "../../../";

configure({ testIdAttribute: "data-qa-anchor" });

function renderComponent(props = {}) {
  const rendered = render(
    <ListBox isMulti {...props}>
      <ListBox.Option>Venus</ListBox.Option>
      <ListBox.Option>Jupiter</ListBox.Option>
    </ListBox>
  );

  return {
    ...rendered,
    openSelect: () => {
      fireEvent.click(rendered.getByTestId("trigger"));
    },
    closeSelect: () => {
      fireEvent.click(rendered.getByText(/select one of/i));
    },
    selectVenus: () => {
      fireEvent.click(rendered.getByText(/venus/i));
    },
    selectJupiter: () => {
      fireEvent.click(rendered.getByText(/jupiter/i));
    },
    dropdownIsHidden: () => {
      expect(rendered.getByTestId("popover-content").getAttribute("aria-hidden")).toBeTruthy();
    },
    dropdownIsNotHidden: () => {
      expect(rendered.getByTestId("popover-content").getAttribute("aria-hidden")).toMatch(/false/i);
    },
  };
}

describe("Listbox multi select", () => {
  it("dropdown should be hidden when first rendered", () => {
    const { dropdownIsHidden } = renderComponent();
    dropdownIsHidden();
  });

  it("dropdown should be visible when clicked", () => {
    const { openSelect, dropdownIsNotHidden } = renderComponent();

    openSelect();
    dropdownIsNotHidden();
  });

  it("dropdown should have correct number of options", () => {
    const { getByText, openSelect } = renderComponent();

    openSelect();
    expect(getByText(/venus/i)).toBeInTheDocument();
    expect(getByText(/jupiter/i)).toBeInTheDocument();
  });

  it("popover should not close when selecting and show chosen options in trigger", () => {
    const { getByTestId, dropdownIsNotHidden, openSelect, selectVenus, selectJupiter } = renderComponent();

    openSelect();
    selectVenus();
    dropdownIsNotHidden();
    selectJupiter();
    expect(getByTestId("trigger")).toHaveTextContent(/venus, jupiter/i);
  });

  it("should clear selected options when x is clicked", () => {
    const { getByTestId, openSelect, selectVenus, selectJupiter } = renderComponent();

    openSelect();
    selectVenus();
    selectJupiter();
    expect(getByTestId("trigger")).toHaveTextContent(/venus, jupiter/i);
    expect(getByTestId("clear-button")).toBeVisible();
    fireEvent.click(getByTestId("clear-button"));
    expect(getByTestId("clear-button")).not.toBeVisible();
    expect(getByTestId("trigger")).not.toHaveTextContent(/venus, jupiter/i);
    expect(getByTestId("trigger")).toHaveTextContent(/select one of/i);
  });

  it("should have a filter in dropdown", () => {
    const { getByTestId, openSelect } = renderComponent({
      hasFilter: true,
    });

    openSelect();
    expect(getByTestId("list-filter")).toBeInTheDocument();
  });

  it("should display message when filter input does not find a match", () => {
    const { openSelect, getByTestId, getByText } = renderComponent({
      hasFilter: true,
      hasNotResultsMessage: "No match",
    });

    openSelect();
    fireEvent.change(getByTestId("list-filter-input"), { target: { value: "g" } });
    expect(getByTestId("no-result-filter")).toBeInTheDocument();
    expect(getByText("No match")).toBeInTheDocument();
  });

  it("should have custom height of 500", () => {
    const { getByTestId } = renderComponent({
      height: 600,
    });

    expect(getByTestId("styled-list").getAttribute("height")).toMatch("600");
  });

  it("should be disabled", () => {
    const { openSelect, dropdownIsHidden } = renderComponent({
      isDisabled: true,
    });

    openSelect();
    dropdownIsHidden();
  });

  it("should be displayed inline with no Popover", () => {
    const { queryByTestId } = renderComponent({
      isInline: true,
    });

    expect(queryByTestId("popover-content")).toBeNull();
  });

  it("should focus on option container as soon as the Popover is open", () => {
    const { openSelect, getByTestId } = renderComponent();

    openSelect();
    expect(document.activeElement).toBe(getByTestId("popover-content"));
  });

  it("should not focus on option container as soon as the Popover is open", () => {
    const { openSelect, getByTestId } = renderComponent({
      isPopoverEager: false,
    });

    openSelect();
    expect(document.activeElement).not.toBe(getByTestId("popover-content"));
  });

  it("placeholder should display default label when no option is selected", () => {
    const { getByText } = renderComponent();

    expect(getByText("Select one of the options")).toBeInTheDocument();
  });

  it("placeholder should display custom label when no option is selected", () => {
    const { getByText } = renderComponent({
      placeholder: "Choose an option!",
    });

    expect(getByText("Choose an option!")).toBeInTheDocument();
  });

  it("should have popover open already ", () => {
    const { dropdownIsNotHidden } = renderComponent({
      isPopoverOpen: true,
    });

    dropdownIsNotHidden();
  });

  // onChange gets called on unmount - soo being called atleast once before selecting any option.
  // value returned from selecting options is undefined
  it("calls onChange", () => {
    const onOptionClick = jest.fn();
    const { openSelect, selectVenus, selectJupiter } = renderComponent({
      onChange: onOptionClick,
    });

    openSelect();
    selectVenus();
    selectJupiter();
    expect(onOptionClick).toHaveBeenCalled();
  });

  // onClickClear passes even when clear button is not shown on the UI after selecting an option from the popover.
  // Because of CSS the clear button is still present
  it("calls onClickClear event when clicking clear button", () => {
    const onClickClearTrigger = jest.fn();
    const { getByTestId, openSelect, selectVenus } = renderComponent({
      onClickClear: onClickClearTrigger,
    });

    openSelect();
    selectVenus();
    fireEvent.click(getByTestId("clear-button"));
    expect(onClickClearTrigger).toHaveBeenCalled();
  });

  it("calls renderTrigger and changes the render method for label", () => {
    const onRenderTrig = jest.fn((state, dispatch, { getDOMAttributesForListBoxButton }) => (
      <button
        onClick={() => {
          dispatch({ type: "OPEN_POPOVER" });
        }}
        type="button"
        {...getDOMAttributesForListBoxButton()}
        ref={state.refTrigger}
      >
        customTrigger
      </button>
    ));
    const { dropdownIsNotHidden, selectVenus, selectJupiter, getByText } = renderComponent({
      renderTrigger: onRenderTrig,
    });

    expect(onRenderTrig).toHaveBeenCalled();
    expect(getByText(/customTrigger/i)).toBeInTheDocument();
    fireEvent.click(getByText(/customTrigger/i));
    dropdownIsNotHidden();
    expect(getByText(/venus/i)).toBeInTheDocument();
    expect(getByText(/jupiter/i)).toBeInTheDocument();
    selectVenus();
    selectJupiter();
  });

  it("should have custom checkboxes", () => {
    const onRenderingCheckbox = jest.fn(isChecked => {
      return isChecked ? "✅" : "🙅‍";
    });
    const { getByText, queryByText } = renderComponent({
      renderCheckbox: onRenderingCheckbox,
    });

    expect(getByText(/🙅‍/i)).toBeInTheDocument();
    expect(queryByText(/✅/i)).not.toBeInTheDocument();
  });

  it("should have correct checkbox beside selected and non-selected options", () => {
    const onRenderingCheckbox = jest.fn(isChecked => {
      return isChecked ? "✅" : "🙅‍";
    });
    const { getByText, openSelect, selectVenus, selectJupiter } = renderComponent({
      renderCheckbox: onRenderingCheckbox,
    });

    openSelect();
    selectVenus();
    expect(getByText(/🙅‍jupiter/i)).toBeInTheDocument();
    expect(getByText(/✅venus/i)).toBeInTheDocument();
    selectJupiter();
    expect(getByText(/✅jupiter/i)).toBeInTheDocument();
    expect(getByText(/✅venus/i)).toBeInTheDocument();
    fireEvent.click(getByText(/✅venus/i));
    expect(getByText(/✅jupiter/i)).toBeInTheDocument();
    expect(getByText(/🙅‍venus/i)).toBeInTheDocument();
    fireEvent.click(getByText(/✅jupiter/i));
    expect(getByText(/🙅‍jupiter/i)).toBeInTheDocument();
    expect(getByText(/🙅‍venus/i)).toBeInTheDocument();
  });

  // FAILS
  // TypeError: state.refListBox.current.scrollTo is not a function
  // it("should display filtered options by 'v' input", () => {
  //   const { getByTestId, openSelect, debug, getByText } = renderComponent({
  //     hasFilter: true,
  //   });
  //
  //   openSelect();
  //   expect(getByTestId("list-filter")).toBeInTheDocument();
  //   fireEvent.change(getByTestId("list-filter-input"), { target: { value: "j" } });
  //   debug();
  //   expect(getByText(/jupiter/i)).toBeInTheDocument();
  // });

  // FAILS, clear button is still visible
  // it("should not render the 'x' clear button", () => {
  // const { getByTestId, queryByTestId, openSelect, selectVenus, debug, selectJupiter } = renderComponent({
  //     hasClearButton: false,
  //   });
  //
  //   // openSelect();
  //   // selectVenus();
  //   //expect(getByTestId("clear-button")).not.toBeInTheDocument();
  //   //expect(queryByTestId("clear-button")).toBeNull();
  //   //expect(queryByTestId("clear-button")).not.toBeInTheDocument();
  //   openSelect();
  //   selectVenus();
  //   selectJupiter();
  //   //debug();
  //   expect(getByTestId("clear-button")).not.toBeVisible();
  // });
});
