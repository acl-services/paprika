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
    selectVenus: () => {
      fireEvent.click(rendered.getByText(/venus/i));
    },
  };
}

describe("ListBox.Trigger", () => {
  it("should clear selected option when x is clicked", () => {
    const { queryByTestId, getByTestId, openSelect, selectVenus } = renderComponent();

    openSelect();
    selectVenus();
    fireEvent.click(getByTestId("clear-button"));
    expect(queryByTestId("clear-button")).toBeNull();
    expect(getByTestId("list-box-trigger")).not.toHaveTextContent(/venus/i);
    expect(getByTestId("list-box-trigger")).toHaveTextContent(/select/i);
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

  it("calls renderTrigger and changes the render method for label", () => {
    const togglePopover = (dispatch, types) => () => {
      dispatch({ type: types.togglePopover });
    };

    const onRenderTrigger = jest.fn((selected, options, { dispatch, propsForTrigger, types, refTrigger }) => (
        <button type="button" {...propsForTrigger()} onClick={togglePopover(dispatch, types)} ref={refTrigger}>
          Toggle ListBox
        </button>
      ));

    const { getByText } = renderComponent({}, [
      <ListBox.Trigger key="trigger">{onRenderTrigger}</ListBox.Trigger>,
      [...childrenContent],
    ]);

    expect(onRenderTrigger).toHaveBeenCalled();
    expect(getByText(/toggle listbox/i)).toBeInTheDocument();
    fireEvent.click(getByText(/toggle listbox/i));
    expect(getByText(/venus/i)).toBeInTheDocument();
    expect(getByText(/jupiter/i)).toBeInTheDocument();
  });
});
