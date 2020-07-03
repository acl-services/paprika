import testers from "../../src/hooks/useFilter/testers";
import Filter from "../../src/components/Filter/Filter";

import sort, { compareNumber, compareDate } from "../../src/hooks/useSort/sort";
import sampleData from "../data";

describe("ActionBar Filter", () => {
  it("should run filter rules IS NOT", () => {
    expect(testers[Filter.rules.IS_NOT]("value", "")).toBe(true);
    expect(testers[Filter.rules.IS_NOT]("value", "testValue")).toBe(true);
    expect(testers[Filter.rules.IS_NOT]("value", "value")).toBe(false);
  });

  it("should run filter rules DOES NOT CONTAIN", () => {
    expect(testers[Filter.rules.DOES_NOT_CONTAIN]("value", "test value")).toBe(true);
    expect(testers[Filter.rules.DOES_NOT_CONTAIN]("test VaLue", "value")).toBe(false);
  });

  it("should run filter rules IS NOT BLANK", () => {
    expect(testers[Filter.rules.IS_NOT_BLANK]("test value")).toBe(true);
    expect(testers[Filter.rules.IS_NOT_BLANK]("")).toBe(false);
  });

  it("should run filter rules IS NOT EQUAL TO", () => {
    expect(testers[Filter.rules.NOT_EQUAL_TO](100, 200)).toBe(true);
    expect(testers[Filter.rules.NOT_EQUAL_TO](100, 100)).toBe(false);
  });

  it("should run filter rules IS GREATER THAN OR EQUAL TO ", () => {
    expect(testers[Filter.rules.GREATER_THAN_OR_EQUAL_TO](200, 200)).toBe(true);
    expect(testers[Filter.rules.GREATER_THAN_OR_EQUAL_TO](250, 200)).toBe(true);
    expect(testers[Filter.rules.GREATER_THAN_OR_EQUAL_TO](150, 200)).toBe(false);
  });

  it("should run filter rules IS LESS THAN OR EQUAL TO ", () => {
    expect(testers[Filter.rules.LESS_THAN_OR_EQUAL_TO](200, 200)).toBe(true);
    expect(testers[Filter.rules.LESS_THAN_OR_EQUAL_TO](150, 200)).toBe(true);
    expect(testers[Filter.rules.LESS_THAN_OR_EQUAL_TO](250, 200)).toBe(false);
  });

  it("should run filter rules IS NOT EMPTY", () => {
    expect(testers[Filter.rules.IS_NOT_BLANK]("test value")).toBe(true);
    expect(testers[Filter.rules.IS_NOT_BLANK]("")).toBe(false);
  });

  it("should run filter rules IS AFTER", () => {
    expect(testers[Filter.rules.IS_AFTER]("10/08/2020", "10/02/2020", { momentParsingFormat: "MM/DD/YYYY" })).toBe(
      true
    );
    expect(testers[Filter.rules.IS_AFTER]("10/02/2020", "10/08/2020", { momentParsingFormat: "MM/DD/YYYY" })).toBe(
      false
    );
  });

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

describe("ActionBar Sort", () => {
  it("should sort by name STRING ASC", () => {
    expect(sort({ data: sampleData, columnId: "name", direction: "ASCEND", columnType: "TEXT" })).toMatchSnapshot();
  });

  it("should sort by name STRING DESC", () => {
    expect(
      sort({ data: sampleData, columnId: "shareable", direction: "DESCEND", columnType: "TEXT" })
    ).toMatchSnapshot();
  });

  it("should sort by goals NUMBER ASC", () => {
    expect(sort({ data: sampleData, columnId: "goals", direction: "ASCEND", columnType: "NUMBER" })).toMatchSnapshot();
  });

  it("should sort by goals NUMBER DESC", () => {
    expect(sort({ data: sampleData, columnId: "goals", direction: "DESCEND", columnType: "NUMBER" })).toMatchSnapshot();
  });

  it("should sort by joined by DATE ASC", () => {
    expect(
      sort({
        data: sampleData,
        columnId: "joined",
        direction: "ASCEND",
        columnType: "DATE",
        momentParsingFormat: "MM/DD/YYYY",
      })
    ).toMatchSnapshot();
  });

  it("should sort by joined by DATE DESC", () => {
    expect(
      sort({
        data: sampleData,
        columnId: "joined",
        direction: "DESCEND",
        columnType: "DATE",
        momentParsingFormat: "MM/DD/YYYY",
      })
    ).toMatchSnapshot();
  });

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

  it("should sort by shareable by BOOLEAN ASC", () => {
    expect(
      sort({
        data: sampleData,
        columnId: "shareable",
        direction: "ASCEND",
        columnType: "BOOLEAN",
      })
    ).toMatchSnapshot();
  });

  it("should sort by shareable by BOOLEAN DESC", () => {
    expect(
      sort({
        data: sampleData,
        columnId: "shareable",
        direction: "DESCEND",
        columnType: "BOOLEAN",
      })
    ).toMatchSnapshot();
  });
});
