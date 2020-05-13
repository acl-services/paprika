import testers from "../src/hooks/useFilter/testers";
import Filter from "../src/components/Filter";
import { compareNumber, compareDate } from "../src/hooks/useSort/sort";

describe("filter", () => {
  it("Should have Filter.rules.IS set to true if testvalue is empty", () => {
    expect(testers[Filter.rules.IS]("any value", "")).toBe(true);
  });

  it("Should have Filter.rules.CONTAINS set to true if testvalue is empty", () => {
    expect(testers[Filter.rules.CONTAINS]("any value", "")).toBe(true);
  });

  it("Should have Filter.rules.IS_BLANK set to true if value is undefined, null, or empty", () => {
    expect(testers[Filter.rules.IS_BLANK](null)).toBe(true);
    expect(testers[Filter.rules.IS_BLANK](undefined)).toBe(true);
    expect(testers[Filter.rules.IS_BLANK]("")).toBe(true);
    expect(testers[Filter.rules.IS_BLANK]("any value")).toBe(false);
    expect(testers[Filter.rules.IS_BLANK](0)).toBe(false);
  });

  it("Should have Filter.rules.EQUALS set to true if testvalue is empty", () => {
    expect(testers[Filter.rules.EQUALS]("any value", "")).toBe(true);
    expect(testers[Filter.rules.EQUALS]("any value", "any value")).toBe(false);
  });

  it("Should have Filter.rules.GREATER_THAN set to true if testvalue is empty", () => {
    expect(testers[Filter.rules.GREATER_THAN]("any value", "")).toBe(true);
    expect(testers[Filter.rules.GREATER_THAN]("any value", "any value")).toBe(false);
    expect(testers[Filter.rules.GREATER_THAN](2, 1)).toBe(true);
    expect(testers[Filter.rules.GREATER_THAN](1, 2)).toBe(false);
  });

  it("Should have Filter.rules.LESS_THAN set to true if testvalue is empty", () => {
    expect(testers[Filter.rules.LESS_THAN]("any value", "")).toBe(true);
    expect(testers[Filter.rules.LESS_THAN]("any value", "any value")).toBe(false);
    expect(testers[Filter.rules.LESS_THAN](2, 1)).toBe(false);
    expect(testers[Filter.rules.LESS_THAN](1, 2)).toBe(true);
  });

  it("Should have Filter.rules.IS_EMPTY set to true if value is null, undefined, or empty", () => {
    expect(testers[Filter.rules.IS_EMPTY](null)).toBe(true);
    expect(testers[Filter.rules.IS_EMPTY](undefined)).toBe(true);
    expect(testers[Filter.rules.IS_EMPTY]("")).toBe(true);
    expect(testers[Filter.rules.IS_EMPTY]("any value")).toBe(false);
  });

  it("Should have Filter.rules.IS_BEFORE set to true", () => {
    expect(testers[Filter.rules.IS_BEFORE]("1994-06-05", "1994-09-08", "YYYY-MM-DD")).toBe(true);
  });
});

describe("Sort", () => {
  it("Should return the number differance", () => {
    const a = 2;
    const b = 1;
    expect(compareNumber(a, b)).toBe(1);
  });

  it("Should display the date/time differance", () => {
    const a = "1994-06-05";
    const b = "1994-09-08";
    // differance displayed in seconds
    expect(compareDate(a, b, "YYYY-MM-DD")).toBe(-8208000);
  });
});
