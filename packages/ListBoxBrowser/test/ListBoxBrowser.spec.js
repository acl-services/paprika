import data from "./fixtures";
import { getData, getOptionByKey } from "../src/helpers";

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
});
