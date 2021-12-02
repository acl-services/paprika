import getIllogicalFilters from "./getIllogicalFilters";
import { rules } from "../rules";

describe("getIllogicalFilters", () => {
  it("should remove proper filters 1", () => {
    const filters = [
      { columnId: "goals", rule: rules.LESS_THAN, value: "", id: "a" },
      { columnId: "goals", rule: rules.EQUALS, value: "", id: "b" }, // should be removed
    ];

    const result = getIllogicalFilters(filters);
    expect(result.length).toBe(1);
    expect(result[0].id).toBe("b");
  });

  it("should remove proper filters 2", () => {
    const filters = [
      { columnId: "goals", rule: rules.EQUALS, value: "", id: "a" }, // should be removed
      { columnId: "goals", rule: rules.GREATER_THAN, value: "", id: "b" },
    ];

    const result = getIllogicalFilters(filters);
    expect(result.length).toBe(1);
    expect(result[0].id).toBe("a");
  });

  it("should remove proper filters 3", () => {
    const filters = [
      { columnId: "goals", rule: rules.EQUALS, value: "", id: "a" },
      { columnId: "goals", rule: rules.EQUALS, value: "", id: "b" }, // should be removed
    ];

    const result = getIllogicalFilters(filters);
    expect(result.length).toBe(1);
    expect(result[0].id).toBe("b");
  });

  it("should remove proper filters 4", () => {
    const filters = [
      { columnId: "goals", rule: rules.GREATER_THAN, value: "", id: "a" },
      { columnId: "goals", rule: rules.LESSER_THAN, value: "", id: "b" },
    ];

    const result = getIllogicalFilters(filters);
    expect(result.length).toBe(0);
  });

  it("should remove proper filters 5", () => {
    const filters = [
      { columnId: "goals", rule: rules.GREATER_THAN, value: "", id: "a" },
      { columnId: "goals", rule: rules.EQUALS, value: "", id: "b" }, // should be removed
      { columnId: "goals", rule: rules.EQUALS, value: "", id: "c" }, // should be removed
    ];

    const result = getIllogicalFilters(filters);
    expect(result.length).toBe(2);
    expect(result[0].id).toBe("b");
    expect(result[1].id).toBe("c");
  });

  it("should remove proper filters 6", () => {
    const filters = [
      { columnId: "goals", rule: rules.GREATER_THAN, value: "", id: "a" },
      { columnId: "goals", rule: rules.LESSER_THAN, value: "", id: "b" },
      { columnId: "goals", rule: rules.EQUALS, value: "", id: "c" }, // should be removed
      { columnId: "goals", rule: rules.EQUALS, value: "", id: "d" }, // should be removed
      { columnId: "age", rule: rules.LESSER_THAN, value: "", id: "e" },
    ];

    const result = getIllogicalFilters(filters);
    expect(result.length).toBe(2);
    expect(result[0].id).toBe("c");
    expect(result[1].id).toBe("d");
  });

  it("should remove proper filters 7", () => {
    const filters = [
      { columnId: "goals", rule: rules.GREATER_THAN, value: "", id: "a" },
      { columnId: "goals", rule: rules.EQUALS, value: "", id: "b" }, // should be removed
      { columnId: "goals", rule: rules.LESSER_THAN, value: "", id: "c" },
      { columnId: "age", rule: rules.LESSER_THAN, value: "", id: "d" },
      { columnId: "goals", rule: rules.LESSER_THAN, value: "", id: "e" },
      { columnId: "age", rule: rules.EQUALS, value: "", id: "f" }, // should be removed
    ];

    const result = getIllogicalFilters(filters);
    expect(result.length).toBe(2);
    expect(result[0].id).toBe("b");
    expect(result[1].id).toBe("f");
  });
});
