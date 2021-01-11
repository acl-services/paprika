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

import * as sc from "./Filters.styles";

function getLabelText(numberOfFilters, I18n) {
  return numberOfFilters ? I18n.t("filters.lowercase_label", { count: numberOfFilters }) : I18n.t("filters.label");
}

export default function Filters(props) {
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
  } = props;
  const I18n = useI18n();
  const filtersRef = React.useRef(null);
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
    <FilterContext.Provider value={{ filtersRef, columns, data, operator, onChangeOperator, rulesByType }}>
      <Panel
        a11yText={I18n.t("filters.label")}
        data-pka-anchor="filters.panel"
        isCompact
        isOpen={isOpen}
        onClose={handleCancel}
      >
        <Panel.Header>
          <sc.PanelHeaderWrapper>
            <FilterIcon aria-hidden="true" />
            {I18n.t("filters.label")}
          </sc.PanelHeaderWrapper>
        </Panel.Header>

        <Panel.Trigger
          data-pka-anchor="filters.panelTrigger"
          icon={<FilterIcon />}
          isSemantic={false}
          kind={Button.types.kind.FLAT}
          onClick={handleClickTrigger}
        >
          {getLabelText(numberApplied, I18n)}
        </Panel.Trigger>
        <sc.FiltersPanel ref={filtersRef}>
          {React.Children.count(children) === 0 ? (
            <sc.GenericNoAppliedPlaceholder>{I18n.t("filters.no_filters_applied")}</sc.GenericNoAppliedPlaceholder>
          ) : (
            children
          )}
          <Button data-pka-anchor="filters.addFilterButton" icon={<AddIcon />} onClick={onAddFilter}>
            {I18n.t("filters.actions.add")}
          </Button>
        </sc.FiltersPanel>
        <Panel.Footer isSticky>
          <sc.Footer>
            <Button data-pka-anchor="filters.applyButton" onClick={handleApply} kind="primary">
              {I18n.t("actions.apply")}
            </Button>
            <Button data-pka-anchor="filters.cancelButton" onClick={handleCancel} kind="minor">
              {I18n.t("actions.cancel")}
            </Button>
            <Button data-pka-anchor="filters.clearButton" onClick={handleClear} kind="minor">
              {I18n.t("filters.actions.clear")}
            </Button>
          </sc.Footer>
        </Panel.Footer>
      </Panel>
    </FilterContext.Provider>
  );
}

Filters.displayName = "Filters";

Filters.defaultRulesByType = defaultRulesByType;
Filters.Item = Item;
Filters.operator = logicalFilterOperators;
Filters.rules = rules;
Filters.types = types;

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
  operator: PropTypes.oneOf([Filters.operator.AND, Filters.operator.OR]),
  rulesByType: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.oneOf(Object.values(Filters.rules)))),
};

const defaultProps = {
  numberApplied: 0,
  children: null,
  data: null,
  onCancel: () => {},
  onChangeOperator: null,
  onClear: () => {},
  operator: Filters.operator.AND,
  rulesByType: Filters.defaultRulesByType,
};

Filters.propTypes = propTypes;
Filters.defaultProps = defaultProps;
