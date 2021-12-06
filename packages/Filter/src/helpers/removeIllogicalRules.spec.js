import removeIllogicalRules from "./removeIllogicalRules";
import { logicalFilterOperators, rules } from "../rules";

const columnId = "goals";
const existingFilters = [{ id: 1, columnId, rule: rules.EQUALS, value: 99 }];

describe("removeIllogicalRules", () => {
  it("includes non-binary rules (even if there is already a filter on this column)", () => {
    const includeRule = removeIllogicalRules(logicalFilterOperators.AND, rules.CONTAINS, existingFilters, columnId);
    expect(includeRule).toBe(true);
  });

  it("includes/excludes binary rules based on operator", () => {
    let includeRule = removeIllogicalRules(logicalFilterOperators.OR, rules.EQUALS, existingFilters, columnId);
    expect(includeRule).toBe(true);

    includeRule = removeIllogicalRules(logicalFilterOperators.AND, rules.EQUALS, existingFilters, columnId);
    expect(includeRule).toBe(false);
  });

  it("includes binary rules if there are no filters on this column", () => {
    const includeRule = removeIllogicalRules(logicalFilterOperators.AND, rules.EQUALS, existingFilters, "age");
    expect(includeRule).toBe(true);
  });

  it("includes/excludes binary comparators when this column has another filter on it, based on if we are looking at ourself", () => {
    let includeRule = removeIllogicalRules(logicalFilterOperators.AND, rules.EQUALS, existingFilters, columnId);
    expect(includeRule).toBe(false);

    includeRule = removeIllogicalRules(
      logicalFilterOperators.AND,
      rules.EQUALS,
      existingFilters,
      columnId,
      existingFilters[0].id
    );
    expect(includeRule).toBe(true);
  });
});
