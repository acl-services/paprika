import filterTesters from "../../src/helpers/filterTesters";
import rules from "../../src/components/Navigation/components/Filters/rules";

describe("helpers/filterTesters", () => {
  it("IS", () => {
    expect(filterTesters[rules.IS]("abc", "abc")).toBeTruthy();
    expect(filterTesters[rules.IS]("cba", "abc")).toBeFalsy();
    expect(filterTesters[rules.IS]("cba", "")).toBeTruthy();
  });

  it("IS_NOT", () => {
    expect(filterTesters[rules.IS_NOT]("abc", "abc")).toBeFalsy();
    expect(filterTesters[rules.IS_NOT]("cba", "abc")).toBeTruthy();
    expect(filterTesters[rules.IS_NOT]("cba", "")).toBeTruthy();
  });

  it("CONTAINS", () => {
    expect(filterTesters[rules.CONTAINS]("abc", "b")).toBeTruthy();
    expect(filterTesters[rules.CONTAINS]("cba", "c")).toBeTruthy();
    expect(filterTesters[rules.CONTAINS]("cba", "d")).toBeFalsy();
    expect(filterTesters[rules.CONTAINS]("cba", "")).toBeTruthy();
  });

  it("DOES_NOT_CONTAIN", () => {
    expect(filterTesters[rules.DOES_NOT_CONTAIN]("abc", "b")).toBeFalsy();
    expect(filterTesters[rules.DOES_NOT_CONTAIN]("cba", "c")).toBeFalsy();
    expect(filterTesters[rules.DOES_NOT_CONTAIN]("cba", "d")).toBeTruthy();
    expect(filterTesters[rules.DOES_NOT_CONTAIN]("cba", "")).toBeTruthy();
  });

  it("IS_BLANK", () => {
    expect(filterTesters[rules.IS_BLANK]("abc")).toBeFalsy();
    expect(filterTesters[rules.IS_BLANK](undefined)).toBeTruthy();
    expect(filterTesters[rules.IS_BLANK](null)).toBeTruthy();
    expect(filterTesters[rules.IS_BLANK]("")).toBeTruthy();
    expect(filterTesters[rules.IS_BLANK](0)).toBeFalsy();
  });

  it("IS_NOT_BLANK", () => {
    expect(filterTesters[rules.IS_NOT_BLANK]("abc")).toBeTruthy();
    expect(filterTesters[rules.IS_NOT_BLANK](undefined)).toBeFalsy();
    expect(filterTesters[rules.IS_NOT_BLANK](null)).toBeFalsy();
    expect(filterTesters[rules.IS_NOT_BLANK]("")).toBeFalsy();
    expect(filterTesters[rules.IS_NOT_BLANK](0)).toBeTruthy();
  });

  it("EQUALS", () => {
    expect(filterTesters[rules.EQUALS](1, "abc")).toBeFalsy();
    expect(filterTesters[rules.EQUALS](1, "1")).toBeTruthy();
    expect(filterTesters[rules.EQUALS](1.1, "1.1")).toBeTruthy();
    expect(filterTesters[rules.EQUALS](1.1, "1.2")).toBeFalsy();
    expect(filterTesters[rules.EQUALS](-1, "-1")).toBeTruthy();
    expect(filterTesters[rules.EQUALS](0, "-0")).toBeTruthy();
    expect(filterTesters[rules.EQUALS](1, "")).toBeTruthy();
  });

  it("NOT_EQUAL_TO", () => {
    expect(filterTesters[rules.NOT_EQUAL_TO](1, "abc")).toBeFalsy();
    expect(filterTesters[rules.NOT_EQUAL_TO](1, "1")).toBeFalsy();
    expect(filterTesters[rules.NOT_EQUAL_TO](1.1, "1.1")).toBeFalsy();
    expect(filterTesters[rules.NOT_EQUAL_TO](1.1, "1.2")).toBeTruthy();
    expect(filterTesters[rules.NOT_EQUAL_TO](-1, "-1")).toBeFalsy();
    expect(filterTesters[rules.NOT_EQUAL_TO](0, "-0")).toBeFalsy();
    expect(filterTesters[rules.EQUALS](1, "")).toBeTruthy();
  });

  it("GREATER_THAN", () => {
    expect(filterTesters[rules.GREATER_THAN](1, "abc")).toBeFalsy();
    expect(filterTesters[rules.GREATER_THAN](1, "1")).toBeFalsy();
    expect(filterTesters[rules.GREATER_THAN](1.1, "1.1")).toBeFalsy();
    expect(filterTesters[rules.GREATER_THAN](1.3, "1.2")).toBeTruthy();
    expect(filterTesters[rules.GREATER_THAN](1.3, "1.4")).toBeFalsy();
    expect(filterTesters[rules.GREATER_THAN](1, "")).toBeTruthy();
  });

  it("GREATER_THAN_OR_EQUAL_TO", () => {
    expect(filterTesters[rules.GREATER_THAN_OR_EQUAL_TO](1, "abc")).toBeFalsy();
    expect(filterTesters[rules.GREATER_THAN_OR_EQUAL_TO](1, "1")).toBeTruthy();
    expect(filterTesters[rules.GREATER_THAN_OR_EQUAL_TO](1.1, "1.1")).toBeTruthy();
    expect(filterTesters[rules.GREATER_THAN_OR_EQUAL_TO](1.3, "1.2")).toBeTruthy();
    expect(filterTesters[rules.GREATER_THAN_OR_EQUAL_TO](1.3, "1.4")).toBeFalsy();
    expect(filterTesters[rules.GREATER_THAN_OR_EQUAL_TO](1, "")).toBeTruthy();
  });

  it("LESS_THAN", () => {
    expect(filterTesters[rules.LESS_THAN](1, "abc")).toBeFalsy();
    expect(filterTesters[rules.LESS_THAN](1, "1")).toBeFalsy();
    expect(filterTesters[rules.LESS_THAN](1.1, "1.1")).toBeFalsy();
    expect(filterTesters[rules.LESS_THAN](1.3, "1.2")).toBeFalsy();
    expect(filterTesters[rules.LESS_THAN](1.3, "1.4")).toBeTruthy();
    expect(filterTesters[rules.LESS_THAN](1, "")).toBeTruthy();
  });

  it("LESS_THAN_OR_EQUAL_TO", () => {
    expect(filterTesters[rules.LESS_THAN_OR_EQUAL_TO](1, "abc")).toBeFalsy();
    expect(filterTesters[rules.LESS_THAN_OR_EQUAL_TO](1, "1")).toBeTruthy();
    expect(filterTesters[rules.LESS_THAN_OR_EQUAL_TO](1.1, "1.1")).toBeTruthy();
    expect(filterTesters[rules.LESS_THAN_OR_EQUAL_TO](1.3, "1.2")).toBeFalsy();
    expect(filterTesters[rules.LESS_THAN_OR_EQUAL_TO](1.3, "1.4")).toBeTruthy();
    expect(filterTesters[rules.LESS_THAN_OR_EQUAL_TO](1, "")).toBeTruthy();
  });

  it("IS_EMPTY", () => {
    expect(filterTesters[rules.IS_EMPTY](1)).toBeFalsy();
    expect(filterTesters[rules.IS_EMPTY](0)).toBeFalsy();
    expect(filterTesters[rules.IS_EMPTY]("")).toBeTruthy();
  });

  it("IS_NOT_EMPTY", () => {
    expect(filterTesters[rules.IS_NOT_EMPTY](1)).toBeTruthy();
    expect(filterTesters[rules.IS_NOT_EMPTY](0)).toBeTruthy();
    expect(filterTesters[rules.IS_NOT_EMPTY]("")).toBeFalsy();
  });

  it("IS_BEFORE", () => {
    expect(
      filterTesters[rules.IS_BEFORE]("20/03/2019", "16/04/2019", { momentParsingFormat: "DD/MM/YYYY" })
    ).toBeTruthy();
    expect(
      filterTesters[rules.IS_BEFORE]("16/04/2019", "16/04/2019", { momentParsingFormat: "DD/MM/YYYY" })
    ).toBeFalsy();
    expect(
      filterTesters[rules.IS_BEFORE]("20/04/2019", "16/04/2019", { momentParsingFormat: "DD/MM/YYYY" })
    ).toBeFalsy();
    expect(filterTesters[rules.IS_BEFORE]("20/03/2019", "", { momentParsingFormat: "DD/MM/YYYY" })).toBeTruthy();
    expect(filterTesters[rules.IS_BEFORE]("20/03/2019", "xxxxxx", { momentParsingFormat: "DD/MM/YYYY" })).toBeFalsy();
  });

  it("IS_AFTER", () => {
    expect(
      filterTesters[rules.IS_AFTER]("20/03/2019", "16/04/2019", { momentParsingFormat: "DD/MM/YYYY" })
    ).toBeFalsy();
    expect(
      filterTesters[rules.IS_AFTER]("16/04/2019", "16/04/2019", { momentParsingFormat: "DD/MM/YYYY" })
    ).toBeFalsy();
    expect(
      filterTesters[rules.IS_AFTER]("20/04/2019", "16/04/2019", { momentParsingFormat: "DD/MM/YYYY" })
    ).toBeTruthy();
    expect(filterTesters[rules.IS_AFTER]("20/03/2019", "", { momentParsingFormat: "DD/MM/YYYY" })).toBeTruthy();
    expect(filterTesters[rules.IS_AFTER]("20/03/2019", "xxxxxx", { momentParsingFormat: "DD/MM/YYYY" })).toBeFalsy();
  });
});
