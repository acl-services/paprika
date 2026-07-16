import filterData from "../../src/helpers/filterData";
import { columnTypes } from "../../src/types";
import { logicalFilterOperators, rules } from "../../src/rules";

const columns = [
  { id: "name", type: columnTypes.TEXT, label: "Name" },
  { id: "age", type: columnTypes.NUMBER, label: "Age" },
];

const data = [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }];

describe("filterData", () => {
  it("returns original data when filters array is empty", () => {
    const result = filterData({ filters: [], operator: logicalFilterOperators.AND, columns, data });
    expect(result).toBe(data);
  });

  it("returns null when data is null and filters are empty", () => {
    const result = filterData({ filters: [], operator: logicalFilterOperators.AND, columns, data: null });
    expect(result).toBeNull();
  });

  it("filters by a single TEXT IS rule", () => {
    const filters = [{ id: "f1", columnId: "name", rule: rules.IS, value: "Alice" }];
    const result = filterData({ filters, operator: logicalFilterOperators.AND, columns, data });
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Alice");
  });

  it("returns all rows when filter value is empty string (passthrough)", () => {
    const filters = [{ id: "f1", columnId: "name", rule: rules.IS, value: "" }];
    const result = filterData({ filters, operator: logicalFilterOperators.AND, columns, data });
    expect(result).toHaveLength(data.length);
  });

  it("filters by CONTAINS rule case-insensitively", () => {
    const filters = [{ id: "f1", columnId: "name", rule: rules.CONTAINS, value: "ali" }];
    const result = filterData({ filters, operator: logicalFilterOperators.AND, columns, data });
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Alice");
  });

  it("AND operator: returns rows matching ALL filters", () => {
    const filters = [
      { id: "f1", columnId: "name", rule: rules.CONTAINS, value: "a" },
      { id: "f2", columnId: "age", rule: rules.GREATER_THAN, value: 28 },
    ];
    const result = filterData({ filters, operator: logicalFilterOperators.AND, columns, data });
    // Alice (age 30 > 28, name contains 'a') and Charlie (age 35 > 28, name contains 'a')
    expect(result).toHaveLength(2);
    expect(result.map(r => r.name)).toEqual(expect.arrayContaining(["Alice", "Charlie"]));
  });

  it("OR operator: returns rows matching ANY filter", () => {
    const filters = [
      { id: "f1", columnId: "name", rule: rules.IS, value: "Alice" },
      { id: "f2", columnId: "name", rule: rules.IS, value: "Bob" },
    ];
    const result = filterData({ filters, operator: logicalFilterOperators.OR, columns, data });
    expect(result).toHaveLength(2);
    expect(result.map(r => r.name)).toEqual(expect.arrayContaining(["Alice", "Bob"]));
  });

  it("returns empty array when no rows match AND filters", () => {
    const filters = [
      { id: "f1", columnId: "name", rule: rules.IS, value: "Alice" },
      { id: "f2", columnId: "name", rule: rules.IS, value: "Bob" },
    ];
    const result = filterData({ filters, operator: logicalFilterOperators.AND, columns, data });
    expect(result).toHaveLength(0);
  });

  it("IS_BLANK returns rows where value is empty", () => {
    const dataWithBlank = [...data, { name: "", age: 20 }];
    const filters = [{ id: "f1", columnId: "name", rule: rules.IS_BLANK, value: "" }];
    const result = filterData({ filters, operator: logicalFilterOperators.AND, columns, data: dataWithBlank });
    expect(result).toHaveLength(1);
    expect(result[0].age).toBe(20);
  });
});
