import data from "./fixtures";
import { getData, getOptionByKey } from "../src/helpers";

describe("ListBoxBrowser", () => {
  it("should return a data with proper keys", () => {
    const modifiedData = getData({ data });

    expect(modifiedData).toMatchSnapshot();
  });

  it("should return option with $$key === 0", () => {
    const option = getOptionByKey(getData({ data }), "0");
    expect(option).toMatchSnapshot();
  });

  it("should return option with $$key === 1", () => {
    const option = getOptionByKey(getData({ data }), "1");
    expect(option).toMatchSnapshot();
  });

  it("should return option with $$key === 2/1", () => {
    const option = getOptionByKey(getData({ data }), "2/1");
    expect(option).toMatchSnapshot();
  });

  it("should return option with $$key === 1/2/1", () => {
    const option = getOptionByKey(getData({ data }), "1/2/1");
    expect(option).toMatchSnapshot();
  });
});
