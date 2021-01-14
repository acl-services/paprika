import React from "react";
import PropTypes from "prop-types";
import AddIcon from "@paprika/icon/lib/Add";
import Button from "@paprika/button";
import FilterIcon from "@paprika/icon/lib/Filter";
import Panel from "@paprika/panel";
import useI18n from "@paprika/l10n/lib/useI18n";
import Item from "./components/Item";
import FilterContext from "./context";
import columnShape from "./columnShape";
import * as types from "./types";
import rules, { defaultRulesByType, logicalFilterOperators } from "./rules";

import * as sc from "./Filter.styles";

function getLabelText(numberOfFilters, I18n) {
  return numberOfFilters ? I18n.t("filter.lowercase_label", { count: numberOfFilters }) : I18n.t("filter.label");
}

export default function Filter(props) {
  const {
    numberApplied,
    children,
    columns,
    data,
    onAddFilter,
    onApply,
    onCancel,
    onChangeOperator,
    onClear,
    operator,
    rulesByType,
    zIndex,
  } = props;
  const I18n = useI18n();
  const filterRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);

  function handleClickTrigger() {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }

  function handleApply() {
    onApply();
    setIsOpen(false);
  }

  function handleCancel() {
    setIsOpen(false);
    onCancel();
  }

  function handleClear() {
    onClear();
  }

  return (
    <FilterContext.Provider value={{ filterRef, columns, data, operator, onChangeOperator, rulesByType }}>
      <Panel
        a11yText={I18n.t("filter.label")}
        data-pka-anchor="filter.panel"
        isCompact
        isOpen={isOpen}
        onClose={handleCancel}
        zIndex={zIndex}
      >
        <Panel.Header>
          <sc.PanelHeaderWrapper>
            <FilterIcon aria-hidden="true" />
            {I18n.t("filter.label")}
          </sc.PanelHeaderWrapper>
        </Panel.Header>

        <Panel.Trigger
          icon={<FilterIcon />}
          isSemantic={false}
          kind={Button.types.kind.FLAT}
          onClick={handleClickTrigger}
        >
          {getLabelText(numberApplied, I18n)}
        </Panel.Trigger>
        <sc.FilterPanel ref={filterRef}>
          {React.Children.count(children) === 0 ? (
            <sc.GenericNoAppliedPlaceholder>{I18n.t("filter.no_filters_applied")}</sc.GenericNoAppliedPlaceholder>
          ) : (
            children
          )}
          <Button data-pka-anchor="filter.addFilterButton" icon={<AddIcon />} onClick={onAddFilter}>
            {I18n.t("filter.actions.add")}
          </Button>
        </sc.FilterPanel>
        <Panel.Footer isSticky>
          <sc.Footer>
            <Button data-pka-anchor="filter.applyButton" onClick={handleApply} kind="primary">
              {I18n.t("actions.apply")}
            </Button>
            <Button data-pka-anchor="filter.cancelButton" onClick={handleCancel} kind="minor">
              {I18n.t("actions.cancel")}
            </Button>
            <Button data-pka-anchor="filter.clearButton" onClick={handleClear} kind="minor">
              {I18n.t("filter.actions.clear")}
            </Button>
          </sc.Footer>
        </Panel.Footer>
      </Panel>
    </FilterContext.Provider>
  );
}

Filter.displayName = "Filter";

Filter.defaultRulesByType = defaultRulesByType;
Filter.Item = Item;
Filter.operator = logicalFilterOperators;
Filter.rules = rules;
Filter.types = types;

const propTypes = {
  numberApplied: PropTypes.number,
  children: PropTypes.node,
  columns: PropTypes.arrayOf(PropTypes.shape(columnShape)).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  onAddFilter: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  onChangeOperator: PropTypes.func,
  onClear: PropTypes.func,
  operator: PropTypes.oneOf([Filter.operator.AND, Filter.operator.OR]),
  rulesByType: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.oneOf(Object.values(Filter.rules)))),
  zIndex: PropTypes.number,
};

const defaultProps = {
  numberApplied: 0,
  children: null,
  data: null,
  onCancel: () => {},
  onChangeOperator: null,
  onClear: () => {},
  operator: Filter.operator.AND,
  rulesByType: Filter.defaultRulesByType,
  zIndex: undefined,
};

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;
