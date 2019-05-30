import React from "react";
import { configure, render, fireEvent } from "react-testing-library";

import ListBox from "../../../src";

configure({ testIdAttribute: "data-qa-anchor" });

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
    closeSelect: () => {
      fireEvent.click(rendered.getByText(/select/i));
    },
    selectVenus: () => {
      fireEvent.click(rendered.getByText(/venus/i));
    },
    selectJupiter: () => {
      fireEvent.click(rendered.getByText(/jupiter/i));
    },
    expectDropdownIsHidden: () => {
      expect(rendered.getByTestId("popover-content").getAttribute("aria-hidden")).toBeTruthy();
    },
    expectDropdownIsNotHidden: () => {
      expect(rendered.getByTestId("popover-content").getAttribute("aria-hidden")).toMatch(/false/i);
    },
  };
}

describe("Listbox multi select", () => {
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

  it("popover should not close when selecting and show chosen options in trigger", () => {
    const { getByTestId, expectDropdownIsNotHidden, openSelect, selectVenus, selectJupiter } = renderComponent();

    openSelect();
    selectVenus();
    expectDropdownIsNotHidden();
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
    expect(getByTestId("trigger")).toHaveTextContent(/select/i);
  });

  it("should have a filter in dropdown", () => {
    const { getByTestId, openSelect } = renderComponent(null, [<ListBox.Filter key="filter" />, [...childrenContent]]);

    openSelect();
    expect(getByTestId("list-filter")).toBeInTheDocument();
  });

  it("should display message when filter input does not find a match", () => {
    const { openSelect, getByTestId, getByText } = renderComponent({}, [
      <ListBox.Filter key="filter" noResultsMessage="No match" />,
      [...childrenContent],
    ]);

    openSelect();
    fireEvent.change(getByTestId("list-filter-input"), { target: { value: "g" } });
    expect(getByTestId("no-results")).toBeInTheDocument();
    expect(getByText("No match")).toBeInTheDocument();
  });

  it("should have custom height of 500", () => {
    const { getByTestId } = renderComponent({
      height: 600,
    });

    expect(getByTestId("styled-list").getAttribute("height")).toMatch("600");
  });

  it("should be disabled", () => {
    const { openSelect, expectDropdownIsHidden } = renderComponent({
      isDisabled: true,
    });

    openSelect();
    expectDropdownIsHidden();
  });

  it("should be displayed inline with no Popover", () => {
    const { queryByTestId } = renderComponent({
      isInline: true,
    });

    expect(queryByTestId("popover-content")).toBeNull();
  });

  it("should focus on option container as soon as the Popover is open", done => {
    const { openSelect, getByTestId } = renderComponent();

    openSelect();
    // THIS IS A CRAPPY TEST. The Listbox wait until the popover finish animating
    // to trigger the focus, one we improved the way of the Popover communicated when the animation
    // ends we can improve this test :/

    setTimeout(() => {
      expect(document.activeElement).toBe(getByTestId("popover-content"));
      done();
    }, 350);
  });

  it("should not focus on option container as soon as the Popover is open", () => {
    const { openSelect, getByTestId } = renderComponent({}, [
      <ListBox.Popover key="Popover" shouldKeepFocus />,
      [...childrenContent],
    ]);

    openSelect();
    expect(document.activeElement).not.toBe(getByTestId("popover-content"));
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
    const { expectDropdownIsNotHidden } = renderComponent({
      isOpen: true,
    });

    expectDropdownIsNotHidden();
  });

  // onChange gets called on unmount - soo being called atleast once before selecting any option.
  // value returned from selecting options is undefined
  it("calls onChange", () => {
    const onChange = jest.fn();
    const { openSelect, selectVenus, selectJupiter } = renderComponent({
      onChange,
    });

    openSelect();
    selectVenus();
    selectJupiter();
    expect(onChange).toHaveBeenCalled();
  });

  it("onChange should have a correct signature (selectedOptions, options, option, more)", () => {
    const customChildrenContent = [
      <ListBox.Option key="1" value="11">
        Venus
      </ListBox.Option>,
      <ListBox.Option key="2" value="21">
        Jupiter
      </ListBox.Option>,
    ];

    function onChange(selectedOptions, options, option, more) {
      expect(arguments.length).toBe(4);
      expect(Array.isArray(selectedOptions)).toBeTruthy();

      expect(options[0].value).toBe("11");
      expect(options[1].value).toBe("21");
      expect(options[0].label).toBe("Venus");
      expect(options[1].label).toBe("Jupiter");

      expect(typeof option).toBe("number");
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
    const onClickClear = jest.fn();
    const { getByTestId, openSelect, selectVenus } = renderComponent({}, [
      <ListBox.Trigger key="Trigger" onClickClear={onClickClear} />,
      [...childrenContent],
    ]);

    openSelect();
    selectVenus();
    fireEvent.click(getByTestId("clear-button"));
    expect(onClickClear).toHaveBeenCalled();
  });

  it("calls renderTrigger and changes the render method for label", () => {
    const togglePopover = (dispatch, types) => () => {
      dispatch({ type: types.togglePopover });
    };

    const onRenderTrig = jest.fn((state, dispatch, { propsForTrigger, types, refTrigger }) => {
      return (
        <button type="button" {...propsForTrigger()} onClick={togglePopover(dispatch, types)} ref={refTrigger}>
          Toggle Listbox
        </button>
      );
    });

    const { expectDropdownIsNotHidden, selectVenus, selectJupiter, getByText } = renderComponent({}, [
      <ListBox.Trigger key="trigger">{onRenderTrig}</ListBox.Trigger>,
      [...childrenContent],
    ]);

    expect(onRenderTrig).toHaveBeenCalled();
    expect(getByText(/toggle listbox/i)).toBeInTheDocument();
    fireEvent.click(getByText(/toggle listbox/i));
    expectDropdownIsNotHidden();
    expect(getByText(/venus/i)).toBeInTheDocument();
    expect(getByText(/jupiter/i)).toBeInTheDocument();
    selectVenus();
    selectJupiter();
  });

  it("should have custom checkboxes", () => {
    const renderCheckbox = jest.fn(({ isSelected }) => {
      return isSelected ? "✅" : "🙅‍";
    });
    const { getByText, queryByText } = renderComponent({}, [
      <ListBox.Option key="option1">{renderCheckbox}</ListBox.Option>,
    ]);

    expect(renderCheckbox).toHaveBeenCalled();
    expect(getByText(/🙅‍/i)).toBeInTheDocument();
    expect(queryByText(/✅/i)).not.toBeInTheDocument();
  });

  //
  it("should have correct checkbox beside selected and non-selected options", () => {
    function createOptions() {
      return ["option1", "option2", "option3"].map(option => {
        return (
          <ListBox.Option key={option}>
            {({ isSelected }) => {
              return isSelected ? `✅ ${option}` : `🙅 ${option}‍`;
            }}
          </ListBox.Option>
        );
      });
    }

    const { getByText, getByTestId } = renderComponent({}, createOptions());

    fireEvent.click(getByTestId("trigger"));

    fireEvent.click(getByText(/option2/i));
    expect(getByText(/✅ option2/i)).toBeInTheDocument();

    fireEvent.click(getByText(/option3/i));
    expect(getByText(/✅ option3/i)).toBeInTheDocument();

    fireEvent.click(getByText(/option3/i));
    expect(getByText(/🙅 option3/i)).toBeInTheDocument();
  });

  it("should not render the 'x' clear button", () => {
    const { queryByTestId, openSelect, selectVenus, selectJupiter } = renderComponent({}, [
      <ListBox.Trigger key="trigger" hasClearButton={false} />,
      [...childrenContent],
    ]);
    openSelect();
    selectVenus();
    selectJupiter();
    expect(queryByTestId("clear-button")).toBeNull();
  });
});
