import React from "react";
import PropTypes from "prop-types";
import AddIcon from "@paprika/icon/lib/Add";
import Button from "@paprika/button";
import FilterIcon from "@paprika/icon/lib/Filter";
import Panel from "@paprika/panel";
import useI18n from "@paprika/l10n/lib/useI18n";
import FilterItem from "./components/FilterItem";
import FilterContext from "./context";
import columnShape from "./columnShape";
import * as types from "./types";

import * as sc from "./Filters.styles";

function getLabelText(numberOfFilters, I18n) {
  switch (numberOfFilters) {
    case 0:
      return I18n.t("filters.label");
    case 1:
      return I18n.t("filters.singular_label");
    default:
      return I18n.t("filters.plural_label", { numberOfFilters });
  }
}

export default function Filters(props) {
  const {
    appliedNumber,
    children,
    columns,
    data,
    onAddFilter,
    onApply,
    onCancel,
    onChangeOperator,
    onClear,
    onOpen,
    operator,
    rulesByType,
  } = props;
  const I18n = useI18n();
  const filtersRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);

  function handleClickTrigger() {
    setIsOpen(prevIsOpen => {
      if (prevIsOpen) return false;

      onOpen();
      return true;
    });
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
      <Panel data-pka-anchor="filters.panel" isCompact isOpen={isOpen} onClose={handleCancel}>
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
          {getLabelText(appliedNumber, I18n)}
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

Filters.types = {
  operator: types.logicalFilterOperators,
  rule: types.rules,
  rulesByType: types.defaultRulesByType,
};

const propTypes = {
  appliedNumber: PropTypes.number,
  children: PropTypes.node,
  columns: PropTypes.arrayOf(PropTypes.shape(columnShape)).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  onAddFilter: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  onChangeOperator: PropTypes.func,
  onClear: PropTypes.func,
  onOpen: PropTypes.func,
  operator: PropTypes.oneOf([Filters.types.operator.AND, Filters.types.operator.OR]),

  rulesByType: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.objectOf(Filters.types.rule))),
};

const defaultProps = {
  appliedNumber: 0,
  children: null,
  data: null,
  onCancel: () => {},
  onChangeOperator: null,
  onClear: () => {},
  onOpen: () => {},
  operator: Filters.types.operator.AND,
  rulesByType: Filters.types.rulesByType,
};

Filters.displayName = "Filters";
Filters.propTypes = propTypes;
Filters.defaultProps = defaultProps;

Filters.defaultRulesByType = types.defaultRulesByType;
Filters.rules = types.rules;
Filters.Item = FilterItem;
Filters.types = types;
