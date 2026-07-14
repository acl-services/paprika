import { renderHook, act } from "@testing-library/react-hooks";
import useFilter from "../../src/hooks/useFilter";
import { columnTypes } from "../../src/types";
import { logicalFilterOperators, defaultRulesByType } from "../../src/rules";

const columns = [
  { id: "name", type: columnTypes.TEXT, label: "Name" },
  { id: "age", type: columnTypes.NUMBER, label: "Age" },
  { id: "active", type: columnTypes.BOOLEAN, label: "Active" },
];

const data = [
  { name: "Alice", age: 30, active: true },
  { name: "Bob", age: 25, active: false },
  { name: "Charlie", age: 35, active: true },
];

function renderUseFilter(overrides = {}) {
  return renderHook(() =>
    useFilter({
      columns,
      data,
      rulesByType: defaultRulesByType,
      ...overrides,
    })
  );
}

describe("useFilter", () => {
  describe("onAddFilter", () => {
    it("adds a filter with correct default fields", () => {
      const { result } = renderUseFilter();

      act(() => {
        result.current.getFilterProps().onAddFilter();
      });

      expect(result.current.filters).toHaveLength(1);
      const filter = result.current.filters[0];
      expect(filter.columnId).toBe(columns[0].id);
      expect(filter.rule).toBe(defaultRulesByType[columnTypes.TEXT][0]);
      expect(filter.id).toBeDefined();
    });

    it("adds multiple filters with unique ids", () => {
      const { result } = renderUseFilter();

      act(() => {
        result.current.getFilterProps().onAddFilter();
        result.current.getFilterProps().onAddFilter();
      });

      expect(result.current.filters).toHaveLength(2);
      expect(result.current.filters[0].id).not.toBe(result.current.filters[1].id);
    });
  });

  describe("onDeleteFilter", () => {
    it("removes filter by id", () => {
      const { result } = renderUseFilter();

      act(() => {
        result.current.getFilterProps().onAddFilter();
      });

      const filterId = result.current.filters[0].id;

      act(() => {
        result.current.getFilterItemProps().onDeleteFilter(filterId);
      });

      expect(result.current.filters).toHaveLength(0);
    });

    it("removes only the targeted filter", () => {
      const { result } = renderUseFilter();

      act(() => {
        result.current.getFilterProps().onAddFilter();
        result.current.getFilterProps().onAddFilter();
      });

      const [first, second] = result.current.filters;

      act(() => {
        result.current.getFilterItemProps().onDeleteFilter(first.id);
      });

      expect(result.current.filters).toHaveLength(1);
      expect(result.current.filters[0].id).toBe(second.id);
    });
  });

  describe("onChangeFilter", () => {
    it("FILTER_VALUE updates value for the correct filter", () => {
      const { result } = renderUseFilter();

      act(() => {
        result.current.getFilterProps().onAddFilter();
      });

      const filterId = result.current.filters[0].id;

      act(() => {
        result.current.getFilterItemProps().onChangeFilter("FILTER_VALUE", { id: filterId, value: "Alice" });
      });

      expect(result.current.filters[0].value).toBe("Alice");
    });

    it("RULE updates rule for the correct filter", () => {
      const { result } = renderUseFilter();

      act(() => {
        result.current.getFilterProps().onAddFilter();
      });

      const filterId = result.current.filters[0].id;

      act(() => {
        result.current.getFilterItemProps().onChangeFilter("RULE", { id: filterId, rule: "CONTAINS" });
      });

      expect(result.current.filters[0].rule).toBe("CONTAINS");
    });

    it("COLUMN switches columnId and resets rule to first rule of new type", () => {
      const { result } = renderUseFilter();

      act(() => {
        result.current.getFilterProps().onAddFilter();
      });

      const filterId = result.current.filters[0].id;

      act(() => {
        result.current.getFilterItemProps().onChangeFilter("COLUMN", { id: filterId, columnId: "age" });
      });

      expect(result.current.filters[0].columnId).toBe("age");
      expect(result.current.filters[0].rule).toBe(defaultRulesByType[columnTypes.NUMBER][0]);
    });
  });

  describe("onChangeOperator", () => {
    it("switches operator from AND to OR", () => {
      const { result } = renderUseFilter();

      expect(result.current.getFilterProps().operator).toBe(logicalFilterOperators.AND);

      act(() => {
        result.current.getFilterProps().onChangeOperator(logicalFilterOperators.OR);
      });

      expect(result.current.getFilterProps().operator).toBe(logicalFilterOperators.OR);
    });

    it("switches operator from OR to AND", () => {
      const { result } = renderUseFilter({ initialState: { operator: logicalFilterOperators.OR } });

      act(() => {
        result.current.getFilterProps().onChangeOperator(logicalFilterOperators.AND);
      });

      expect(result.current.getFilterProps().operator).toBe(logicalFilterOperators.AND);
    });
  });

  describe("onApply", () => {
    it("updates numberApplied to match current filter count", () => {
      const { result } = renderUseFilter();

      act(() => {
        result.current.getFilterProps().onAddFilter();
        result.current.getFilterProps().onAddFilter();
      });

      act(() => {
        result.current.getFilterProps().onApply();
      });

      expect(result.current.getFilterProps().numberApplied).toBe(2);
    });

    it("updates filteredData when not result-controlled", () => {
      const { result } = renderUseFilter();

      act(() => {
        result.current.getFilterProps().onAddFilter();
      });

      const filterId = result.current.filters[0].id;

      act(() => {
        result.current.getFilterItemProps().onChangeFilter("FILTER_VALUE", { id: filterId, value: "Alice" });
      });

      act(() => {
        result.current.getFilterProps().onApply();
      });

      expect(result.current.filteredData).toHaveLength(1);
      expect(result.current.filteredData[0].name).toBe("Alice");
    });

    it("does not update filteredData when isResultControlled is true", () => {
      const { result } = renderUseFilter({ initialState: { isResultControlled: true } });

      act(() => {
        result.current.getFilterProps().onAddFilter();
        result.current.getFilterProps().onApply();
      });

      expect(result.current.filteredData).toBeNull();
    });
  });

  describe("onClear", () => {
    it("resets filters to empty array", () => {
      const { result } = renderUseFilter();

      act(() => {
        result.current.getFilterProps().onAddFilter();
        result.current.getFilterProps().onAddFilter();
      });

      act(() => {
        result.current.getFilterProps().onClear();
      });

      expect(result.current.filters).toHaveLength(0);
    });

    it("resets numberApplied to 0", () => {
      const { result } = renderUseFilter();

      act(() => {
        result.current.getFilterProps().onAddFilter();
        result.current.getFilterProps().onApply();
        result.current.getFilterProps().onClear();
      });

      expect(result.current.getFilterProps().numberApplied).toBe(0);
    });

    it("restores filteredData to full dataset", () => {
      const { result } = renderUseFilter();

      act(() => {
        result.current.getFilterProps().onAddFilter();
      });

      const filterId = result.current.filters[0].id;

      act(() => {
        result.current.getFilterItemProps().onChangeFilter("FILTER_VALUE", { id: filterId, value: "Alice" });
        result.current.getFilterProps().onApply();
      });

      act(() => {
        result.current.getFilterProps().onClear();
      });

      expect(result.current.filteredData).toHaveLength(data.length);
    });
  });

  describe("updateData", () => {
    it("replaces data and recalculates filteredData with active filters", () => {
      const { result } = renderUseFilter();

      act(() => {
        result.current.getFilterProps().onAddFilter();
      });

      const filterId = result.current.filters[0].id;

      act(() => {
        result.current.getFilterItemProps().onChangeFilter("FILTER_VALUE", { id: filterId, value: "Dave" });
        result.current.getFilterProps().onApply();
      });

      expect(result.current.filteredData).toHaveLength(0);

      const newData = [...data, { name: "Dave", age: 40, active: true }];

      act(() => {
        result.current.updateData(newData);
      });

      expect(result.current.filteredData).toHaveLength(1);
      expect(result.current.filteredData[0].name).toBe("Dave");
    });
  });
});
