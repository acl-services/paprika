import testers from "../../src/hooks/useFilter/testers";
import Filter from "../../src/components/Filter/Filter";

import sort from "../../src/hooks/useSort/sort";
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
});
