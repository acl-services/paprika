import { withDecimalSeparatorOnly } from "../src/components/Numeric/Numeric";

// only can test US locale in node with Intl
// https://stackoverflow.com/questions/39626119/where-does-intl-numberformat-support-come-from-in-node-js
// https://stackoverflow.com/questions/55183776/different-behaviour-of-intl-numberformat-in-node-and-browser

describe("DataField", () => {
  it("should display locale FR number with only decimal locale separator", () => {
    const testNumber1 = 3210.32;
    expect(withDecimalSeparatorOnly({ number: testNumber1, locale: "en" })).toBe("3210.32");
  });

  it("should display locale US number with only decimal locale separator", () => {
    const testNumber2 = 44443210.561;
    expect(withDecimalSeparatorOnly({ number: testNumber2, locale: "en" })).toBe("44443210.561");
  });
});
