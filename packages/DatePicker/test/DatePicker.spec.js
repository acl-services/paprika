import React from "react";
import moment from "moment";
import { render as renderReactTestingLibrary, configure } from "@testing-library/react";
import L10n from "@paprika/l10n";
import DatePicker from "../src";

configure({ testIdAttribute: "data-pka-anchor" });

function render(props = {}, inputProps = {}) {
  const { onChange, ...moreProps } = props;
  const handleChange = onChange || (() => {});
  const rendered = renderReactTestingLibrary(
    <L10n>
      <DatePicker onChange={handleChange} {...moreProps}>
        <DatePicker.Input {...inputProps} data-pka-anchor="datepicker.input" />
      </DatePicker>
    </L10n>
  );
  const { rerender } = rendered;

  return {
    ...rendered,

    rerender: updatedProps => {
      rerender(
        <L10n>
          <DatePicker onChange={handleChange} {...moreProps} {...updatedProps}>
            <DatePicker.Input {...inputProps} data-pka-anchor="datepicker.input" />
          </DatePicker>
        </L10n>
      );
    },
  };
}

describe("DatePicker", () => {
  const datePickerInputTestId = "datepicker.input";
  describe("DatePicker default state", () => {
    it("should display empty in input", () => {
      const { getByTestId } = render();
      expect(getByTestId(datePickerInputTestId).value).toEqual("");
    });
  });

  describe("When Date Picker recieves changes ", () => {
    let getByTestId;
    let rerender;

    beforeEach(() => {
      ({ getByTestId, rerender } = render({ date: moment("2019-01-02") }));
    });

    it("should display initial date", () => {
      expect(getByTestId(datePickerInputTestId).value).toEqual("January 02, 2019");
    });
    it("should update date if props updated", () => {
      rerender({ date: moment("2019-03-01") });
      expect(getByTestId(datePickerInputTestId).value).toEqual("March 01, 2019");
    });
    it("should render input as error state hasError", () => {
      render({ date: moment("2019-01-02") }, { hasError: true });
      expect(document.getElementsByClassName("form-input--has-error").length).toEqual(1);
    });
  });
});
