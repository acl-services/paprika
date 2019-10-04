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
  it("should display empty in input by default", () => {
    const { getByTestId } = render();

    expect(getByTestId("datepicker.input").value).toEqual("");
  });

  it("should display initial date", () => {
    const { getByTestId } = render({ date: moment("2019-01-02") });

    expect(getByTestId("datepicker.input").value).toEqual("January 02, 2019");
  });

  it("should update date if props updated", () => {
    const { getByTestId, rerender } = render({ date: moment("2019-01-02") });

    rerender({ date: moment("2019-03-01") });

    expect(getByTestId("datepicker.input").value).toEqual("March 01, 2019");
  });

  it("should render input as error state hasError", () => {
    render({ date: moment("2019-01-02") }, { hasError: true });

    expect(document.getElementsByClassName("form-input--has-error").length).toEqual(1);
  });

  it("should render date correctly with different timezones", () => {
    const utcOffSetPlusOneHour = moment("2019-04-02").utcOffset(1, true);
    const { getByTestId, rerender } = render({ date: utcOffSetPlusOneHour });
    expect(getByTestId("datepicker.input").value).toEqual("April 02, 2019");

    const utcOffSetMinusOneHour = moment("2019-06-06").utcOffset(-1, true);
    rerender({ date: utcOffSetMinusOneHour });
    expect(getByTestId("datepicker.input").value).toEqual("June 06, 2019");
  });
});
