import React from "react";
import moment from "moment";
import { render as renderReactTestingLibrary, configure } from "react-testing-library";
import L10n from "@paprika/l10n";
import DatePicker from "../src";

configure({ testIdAttribute: "data-qa-anchor" });

function render(props = {}) {
  const { onChange, ...moreProps } = props;
  const handleChange = onChange || (() => {});
  const rendered = renderReactTestingLibrary(
    <L10n>
      <DatePicker onChange={handleChange} {...moreProps}>
        <DatePicker.Input data-qa-anchor="datepicker.input" />
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
            <DatePicker.Input data-qa-anchor="datepicker.input" />
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
});
