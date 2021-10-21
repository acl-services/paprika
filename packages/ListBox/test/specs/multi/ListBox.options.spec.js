import React from "react";
import { configure, render, fireEvent } from "@testing-library/react";
import { ControlledAndSelected } from "../../../stories/examples/Multi/ControlledAndSelected";
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
  };
}

describe("ListBox.Options", () => {
  it("should have custom checkboxes", () => {
    const renderCheckbox = jest.fn(({ isSelected }) => (isSelected ? "✅" : "🙅‍"));
    const { getByText, queryByText, openSelect } = renderComponent({}, [
      <ListBox.Option key="option1">{renderCheckbox}</ListBox.Option>,
    ]);

    openSelect();
    expect(renderCheckbox).toHaveBeenCalled();
    expect(getByText(/🙅‍/i)).toBeInTheDocument();
    expect(queryByText(/✅/i)).not.toBeInTheDocument();
  });

  it("should have correct checkbox beside selected and non-selected options", () => {
    function createOptions() {
      return ["option1", "option2", "option3"].map(option => (
        <ListBox.Option key={option}>
          {({ isSelected }) => (isSelected ? `✅ ${option}` : `🙅 ${option}‍`)}
        </ListBox.Option>
      ));
    }

    const { getByText, getByTestId } = renderComponent({}, createOptions());

    fireEvent.click(getByTestId("list-box-trigger"));

    fireEvent.click(getByText(/option2/i));
    expect(getByText(/✅ option2/i)).toBeInTheDocument();

    fireEvent.click(getByText(/option3/i));
    expect(getByText(/✅ option3/i)).toBeInTheDocument();

    fireEvent.click(getByText(/option3/i));
    expect(getByText(/🙅 option3/i)).toBeInTheDocument();
  });

  it("should select an option via a controlled button", () => {
    const { getByTestId, getAllByTestId } = render(<ControlledAndSelected />);
    const dataAttributeIsSelected = "list-option--is-selected";
    const button1 = getByTestId("button_1");
    expect(button1).not.toBeNull();
    fireEvent.click(button1);

    expect(getAllByTestId(dataAttributeIsSelected).length).toBe(1);
    expect(getByTestId(dataAttributeIsSelected).textContent).toBe("Wonder Woman");

    const button2 = getByTestId("button_2");
    expect(button2).not.toBeNull();

    fireEvent.click(button2);

    expect(getAllByTestId(dataAttributeIsSelected).length).toBe(2);
    expect(getAllByTestId(dataAttributeIsSelected)[0].textContent).toBe("Wonder Woman");
    expect(getAllByTestId(dataAttributeIsSelected)[1].textContent).toBe("Spiderman");

    fireEvent.click(button2);
    expect(getAllByTestId(dataAttributeIsSelected).length).toBe(1);
  });
});
