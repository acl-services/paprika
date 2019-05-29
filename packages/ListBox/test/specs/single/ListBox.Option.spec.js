import React from "react";
import { configure, render, fireEvent } from "react-testing-library";
import ListBox from "../../../src";

configure({ testIdAttribute: "data-qa-anchor" });

function renderComponent(props = {}) {
  const rendered = render(
    <ListBox>
      <ListBox.Option {...props}>Venus</ListBox.Option>
      <ListBox.Option>Jupiter</ListBox.Option>
    </ListBox>
  );
  return {
    ...rendered,
    openSelect: () => {
      fireEvent.click(rendered.getByTestId("trigger"));
    },
    selectVenus: () => {
      fireEvent.click(rendered.getByText(/venus/i));
    },
  };
}

describe("ListBox.Option", () => {
  it("should be disabled", () => {
    const { openSelect, selectVenus, getByText, getByTestId } = renderComponent({
      isDisabled: true,
    });

    openSelect();
    expect(getByText(/Select/i)).toBeInTheDocument();
    selectVenus();
    expect(getByTestId("trigger")).toHaveTextContent(/Select/i);
    expect(getByTestId("trigger")).not.toHaveTextContent(/venus/i);
  });

  it("should be hidden", () => {
    const { openSelect, queryByText, getByText } = renderComponent({
      isHidden: true,
    });

    openSelect();
    expect(queryByText(/venus/i)).not.toBeInTheDocument();
    expect(getByText(/jupiter/i)).toBeInTheDocument();
  });

  it("should be preselected", () => {
    const { getByTestId } = renderComponent({
      isSelected: true,
    });

    expect(getByTestId("trigger")).toHaveTextContent(/venus/i);
  });

  it("calls onClick on selection", () => {
    const onClickFunc = jest.fn();
    const { openSelect, selectVenus } = renderComponent({
      onClick: onClickFunc,
    });

    openSelect();
    selectVenus();
    expect(onClickFunc).toHaveBeenCalled();
  });

  it("should show value of label prop in trigger", () => {
    const planetV = <img alt="planetvenus" src="#" />;
    const planetJ = <img alt="planetjupiter" src="#" />;
    const { getByTestId, getByAltText } = render(
      <ListBox>
        <ListBox.Filter />
        <ListBox.Option label="venus">{planetV}</ListBox.Option>
        <ListBox.Option label="jupiter">{planetJ}</ListBox.Option>
      </ListBox>
    );

    fireEvent.click(getByTestId("trigger"));
    fireEvent.click(getByAltText("planetvenus"));
    expect(getByTestId("trigger")).toHaveTextContent(/venus/i);
  });

  it("should prevent default selection ability", () => {
    const { openSelect, selectVenus, getByTestId } = renderComponent({
      preventDefaultOnSelect: true,
    });

    openSelect();
    selectVenus();
    expect(getByTestId("trigger")).toHaveTextContent(/select/i);
  });

  it("should prevent default selection ability using <ListBox.RawItem />", () => {
    const { getByText, getByTestId } = render(
      <ListBox>
        <ListBox.RawItem>Venus</ListBox.RawItem>
        <ListBox.RawItem>Jupiter</ListBox.RawItem>
      </ListBox>
    );

    fireEvent.click(getByTestId("trigger"));
    fireEvent.click(getByText(/venus/i));

    expect(getByTestId("trigger")).toHaveTextContent(/select/i);
  });
});
