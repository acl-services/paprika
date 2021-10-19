import React from "react";
import { configure, render, fireEvent, waitFor, screen } from "@testing-library/react";
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

describe("ListBox multi select", () => {
  describe("callbacks", () => {
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
  });
});
