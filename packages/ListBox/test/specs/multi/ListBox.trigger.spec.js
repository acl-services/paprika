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
      expect(rendered.getByTestId("popover.content").getAttribute("aria-hidden")).toBeTruthy();
    },
    expectDropdownIsNotHidden: () => {
      expect(rendered.getByTestId("popover.content").getAttribute("aria-hidden")).toMatch(/false/i);
    },
  };
}

describe("ListBox.Trigger", () => {
  describe("Placeholder", () => {
    it("should display default label when no option is selected", () => {
      const { getByText } = renderComponent();

      expect(getByText(/Select/i)).toBeInTheDocument();
    });

    it("should display custom label when no option is selected", () => {
      const { getByText } = renderComponent({
        placeholder: "Choose an option!",
      });

      expect(getByText("Choose an option!")).toBeInTheDocument();
    });
  });

  it("calls renderTrigger and changes the render method for label", () => {
    const togglePopover = (dispatch, types) => () => {
      dispatch({ type: types.togglePopover });
    };

    const onRenderTrigger = jest.fn((selected, options, current, { dispatch, propsForTrigger, types, refTrigger }) => {
      return (
        <button type="button" {...propsForTrigger()} onClick={togglePopover(dispatch, types)} ref={refTrigger}>
          Toggle ListBox
        </button>
      );
    });

    const { expectDropdownIsNotHidden, selectVenus, selectJupiter, getByText } = renderComponent({}, [
      <ListBox.Trigger key="trigger">{onRenderTrigger}</ListBox.Trigger>,
      [...childrenContent],
    ]);

    expect(onRenderTrigger).toHaveBeenCalled();
    expect(getByText(/toggle listbox/i)).toBeInTheDocument();
    fireEvent.click(getByText(/toggle listbox/i));
    expectDropdownIsNotHidden();
    expect(getByText(/venus/i)).toBeInTheDocument();
    expect(getByText(/jupiter/i)).toBeInTheDocument();
    selectVenus();
    selectJupiter();
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

  it("should clear selected options when x is clicked", () => {
    const { queryByTestId, getByTestId, openSelect, selectVenus, selectJupiter } = renderComponent();

    openSelect();
    selectVenus();
    selectJupiter();
    expect(getByTestId("list-box-trigger")).toHaveTextContent(/venus, jupiter/i);
    expect(getByTestId("clear-button")).toBeVisible();
    fireEvent.click(getByTestId("clear-button"));
    expect(queryByTestId("clear-button")).toBeNull();
    expect(getByTestId("list-box-trigger")).not.toHaveTextContent(/venus, jupiter/i);
    expect(getByTestId("list-box-trigger")).toHaveTextContent(/select/i);
  });
});
