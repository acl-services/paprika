import React from "react";
import moment from "moment";
import { render as renderReactTestingLibrary, configure } from "@testing-library/react";
import L10n from "@paprika/l10n";
import DateRangePicker from "../src";

configure({ testIdAttribute: "data-pka-anchor" });

function render(props = {}, startInputProps = {}, endInputProps = {}) {
  const { onChange, ...moreProps } = props;
  const handleChange = onChange || (() => {});
  const rendered = renderReactTestingLibrary(
    <L10n>
      <DateRangePicker onChange={handleChange} {...moreProps}>
        <DateRangePicker.StartInput {...startInputProps} data-pka-anchor="daterangepicker.startinput" />
        <DateRangePicker.EndInput {...endInputProps} data-pka-anchor="daterangepicker.endinput" />
      </DateRangePicker>
    </L10n>
  );
  const { rerender } = rendered;

  return {
    ...rendered,
    rerender: updatedProps => {
      rerender(
        <L10n>
          <DateRangePicker onChange={handleChange} {...moreProps} {...updatedProps}>
            <DateRangePicker.StartInput {...startInputProps} data-pka-anchor="daterangepicker.startinput" />
            <DateRangePicker.EndInput {...endInputProps} data-pka-anchor="daterangepicker.endinput" />
          </DateRangePicker>
        </L10n>
      );
    },
  };
}

describe("DateRangePicker", () => {
  it("should display empty in inputs by default", () => {
    const { getByTestId } = render();

    expect(getByTestId("daterangepicker.startinput").value).toEqual("");
    expect(getByTestId("daterangepicker.endinput").value).toEqual("");
  });

  it("should display initial date", () => {
    const { getByTestId } = render({ startDate: moment("2019-01-02") });

    expect(getByTestId("daterangepicker.startinput").value).toEqual("January 02, 2019");
  });

  it("should update date if props updated", () => {
    const { getByTestId, rerender } = render({ startDate: moment("2019-01-02") });

    rerender({ startDate: moment("2019-03-01") });

    expect(getByTestId("daterangepicker.startinput").value).toEqual("March 01, 2019");
  });

  it("should render input as error state hasError", () => {
    render({ startDate: moment("2019-01-02") }, { hasError: true });

    expect(document.getElementsByClassName("form-input--has-error").length).toEqual(1);
  });

  it("should render date correctly with different timezones", () => {
    const utcOffSetPlusOneHour = moment("2019-04-02").utcOffset(1, true);
    const { getByTestId, rerender } = render({ startDate: utcOffSetPlusOneHour });
    expect(getByTestId("daterangepicker.startinput").value).toEqual("April 02, 2019");

    const utcOffSetMinusOneHour = moment("2019-06-06").utcOffset(-1, true);
    rerender({ startDate: utcOffSetMinusOneHour });
    expect(getByTestId("daterangepicker.startinput").value).toEqual("June 06, 2019");
  });
});
