import React from "react";
import { render, fireEvent, configure } from "@testing-library/react";
import { OnChange } from "../../../stories/examples/Single/OnChange";
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

describe("ListBox callbacks", () => {
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

  it("should not create a stale state when reading the state on handleChange", () => {
    const log = [];
    const storeLog = msg => log.push(msg);
    const originalConsoleLog = console.log;
    console.log = jest.fn(storeLog);

    const { getByText } = render(<OnChange />);

    const options = [getByText(/Wonder Woman/), getByText(/Thor/), getByText(/Batman/)];
    fireEvent.click(options[0]);
    fireEvent.click(options[1]);
    fireEvent.click(options[2]);

    expect(log.includes(null)).toBe(true);
    expect(log.includes("Wonder Woman")).toBe(true);
    expect(log.includes("Thor")).toBe(true);
    expect(log.includes("Batman")).toBe(false);
    console.log = originalConsoleLog;
  });
});
