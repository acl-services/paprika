import { render } from "@testing-library/react";
import React from "react";
import data from "./fixtures/multiple";
import dataMultipleFirstOptionNoOptions from "./fixtures/multiple.firstOptionNoOptions";
import dataNoOptions from "./fixtures/multiple.withNotOptions";
import { getData, getOptionByKey } from "../src/helpers";
import ListBoxBrowser from "../src";

describe("ListBoxBrowser", () => {
  it("should return a data with proper keys", () => {
    const selectedOptions = { current: {} };
    const modifiedData = getData({ data, selectedOptions });

    expect(modifiedData).toMatchSnapshot();
    expect(selectedOptions).toMatchSnapshot();
  });

  it("should return option with $$key === 0", () => {
    const selectedOptions = { current: {} };
    const option = getOptionByKey(getData({ data, selectedOptions }), "0");
    expect(option).toMatchSnapshot();
  });

  it("should return option with $$key === 1", () => {
    const selectedOptions = { current: {} };
    const option = getOptionByKey(getData({ data, selectedOptions }), "1");
    expect(option).toMatchSnapshot();
  });

  it("should return option with $$key === 2/1", () => {
    const selectedOptions = { current: {} };
    const option = getOptionByKey(getData({ data, selectedOptions }), "2/1");
    expect(option).toMatchSnapshot();
  });

  it("should return option with $$key === 1/2/1", () => {
    const selectedOptions = { current: {} };
    const option = getOptionByKey(getData({ data, selectedOptions }), "1/2/1");
    expect(option).toMatchSnapshot();
  });

  it("should render the ListBoxBrowser with selected option", () => {
    const { getByText } = render(
      <ListBoxBrowser data={dataMultipleFirstOptionNoOptions} rootTitle="Universes" browserTitle="Heroes">
        <ListBoxBrowser.OptionsSelected />
      </ListBoxBrowser>
    );

    const selectedOption = document.querySelector("[data-ppk-is-root-selected='true']");
    expect(selectedOption).toBeInTheDocument();
    expect(selectedOption.textContent).toBe("Starcraft Universe");
    expect(getByText(/Terrans/)).toBeInTheDocument();
    expect(getByText(/Zergs/)).toBeInTheDocument();
    expect(getByText(/Protos/)).toBeInTheDocument();
  });

  it("should throw Error with message 'At least one option should have options attribute' when none option has options", () => {
    expect.assertions(1);
    const error = console.error;
    console.error = () => {};
    try {
      render(
        <ListBoxBrowser data={dataNoOptions}>
          <ListBoxBrowser.OptionsSelected />
        </ListBoxBrowser>
      );
    } catch (e) {
      expect(e.message).toBe("At least one option should have options attribute");
      console.error = error;
    }
  });
});
