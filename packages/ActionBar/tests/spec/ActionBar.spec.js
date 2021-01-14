import sort, { compareNumber, compareDate } from "../../src/hooks/useSort/sort";
import sampleData from "../data";

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
