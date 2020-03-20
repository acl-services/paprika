import React from "react";
import moment from "moment";
import { render as renderReactTestingLibrary, configure, fireEvent } from "@testing-library/react";
import DateInput from "../src";

configure({ testIdAttribute: "data-pka-anchor" });

function render(props = {}) {
  const handleChange = props.onChange || (() => {});
  const rendered = renderReactTestingLibrary(
    <DateInput {...props} onChange={handleChange} data-pka-anchor="dateinput" />
  );
  const { rerender } = rendered;

  return {
    ...rendered,
    rerender: updatedProps => {
      rerender(<DateInput {...updatedProps} onChange={handleChange} data-pka-anchor="dateinput" />);
    },
  };
}

describe("DateInput", () => {
  it("should display empty in input by default", () => {
    const { getByTestId } = render();

    expect(getByTestId("dateinput").value).toEqual("");
  });

  it("should display initial date", () => {
    const { getByTestId } = render({ date: moment("2019-01-02") });

    expect(getByTestId("dateinput").value).toEqual("January 02, 2019");
  });

  it("should update date if props updated", () => {
    const { getByTestId, rerender } = render({ date: moment("2019-01-02") });

    rerender({ date: moment("2019-03-01") });

    expect(getByTestId("dateinput").value).toEqual("March 01, 2019");
  });

  it("should render input as error state hasError", () => {
    render({ date: moment("2019-01-02"), hasError: true });

    expect(document.getElementsByClassName("form-input--has-error").length).toEqual(1);
  });

  it("should show error state if it cannot parse the typing string", () => {
    const { getByTestId } = render();

    fireEvent.change(getByTestId("dateinput"), { target: { value: "abc" } });

    fireEvent.keyUp(getByTestId("dateinput"), { key: "Enter", code: 13 });

    expect(document.getElementsByClassName("form-input--has-error").length).toEqual(1);
  });

  it("should reset format after focus/blur", () => {
    const { getByTestId } = render({ date: moment("2019-01-02") });

    expect(getByTestId("dateinput").value).toEqual("January 02, 2019");

    getByTestId("dateinput").focus();

    expect(getByTestId("dateinput").value).toEqual("01/02/2019");

    getByTestId("dateinput").blur();

    expect(getByTestId("dateinput").value).toEqual("January 02, 2019");
  });

  it("should render date correctly with different timezones", () => {
    const utcOffSetPlusOneHour = moment("2019-04-02").utcOffset(1, true);
    const { getByTestId, rerender } = render({ date: utcOffSetPlusOneHour });
    expect(getByTestId("dateinput").value).toEqual("April 02, 2019");

    const utcOffSetMinusOneHour = moment("2019-06-06").utcOffset(-1, true);
    rerender({ date: utcOffSetMinusOneHour });
    expect(getByTestId("dateinput").value).toEqual("June 06, 2019");
  });
});
