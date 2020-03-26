import React from "react";
import PropTypes from "prop-types";
import Popover from "@paprika/popover";
import Button from "@paprika/button";
import useI18n from "@paprika/l10n/lib/useI18n";
import CheckIcon from "@paprika/icon/lib/Check";
import FilterItem from "./FilterItem";
import { rules, defaultRulesByType } from "./rules";
import FilterContext from "./context";

import * as sc from "./Filter.styles";
import { GenericNoAppliedPlaceholder } from "../../ActionBar.styles";
import { logicalFilterOperators } from "../../constants";

const propTypes = {
  appliedNumber: PropTypes.number,
  children: PropTypes.node,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddFilter: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  onChangeOperator: PropTypes.func,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  operator: PropTypes.oneOf([logicalFilterOperators.AND, logicalFilterOperators.OR]),
  rulesByType: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.oneOf(rules))),
};

const defaultProps = {
  appliedNumber: 0,
  children: null,
  onChangeOperator: null,
  onCancel: () => {},
  onClose: () => {},
  onOpen: () => {},
  operator: logicalFilterOperators.AND,
  rulesByType: defaultRulesByType,
};

export default function Filter(props) {
  const {
    appliedNumber,
    children,
    columns,
    onAddFilter,
    onApply,
    onCancel,
    onChangeOperator,
    onClose,
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

  function handleClose() {
    setIsOpen(false);
    onClose();
  }

  function handleApply() {
    setIsOpen(false);
    onApply();
  }

  function handleCancel() {
    setIsOpen(false);
    onCancel();
  }

  function getLabelText(numberOfFilters) {
    switch (numberOfFilters) {
      case 0:
        return I18n.t("actionBar.filter.label");
      case 1:
        return I18n.t("actionBar.filter.singular_label");
      default:
        return I18n.t("actionBar.filter.plural_label", { numberOfFilters });
    }
  }

  return (
    <FilterContext.Provider value={{ filtersRef, columns, operator, onChangeOperator, rulesByType }}>
      <Popover align="bottom" edge="left" maxWidth={600} offset={8} isOpen={isOpen} onClose={handleClose}>
        <sc.Trigger
          isSemantic={false}
          kind="flat"
          onClick={handleClickTrigger}
          hasFilterApplied={appliedNumber > 0}
          isOpen={isOpen}
        >
          <sc.Icon />
          {getLabelText(appliedNumber)}
        </sc.Trigger>
        <Popover.Content>
          <Popover.Card>
            <sc.FiltersPanel ref={filtersRef} tabIndex={-1}>
              {React.Children.count(children) === 0 ? (
                <GenericNoAppliedPlaceholder>
                  {I18n.t("actionBar.filter.no_filters_applied")}
                </GenericNoAppliedPlaceholder>
              ) : null}
              {children}
            </sc.FiltersPanel>
            <sc.Footer>
              <Button onClick={onAddFilter} kind="minor" data-pka-anchor="actionBar.filter.addFilterButton">
                {I18n.t(`actionBar.filter.add_filter`)}
              </Button>
              <Button onClick={handleApply} kind="flat" icon={<CheckIcon />}>
                {I18n.t("actions.apply")}
              </Button>
              <Button onClick={handleCancel} kind="minor">
                {I18n.t("actions.cancel")}
              </Button>
            </sc.Footer>
          </Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
    </FilterContext.Provider>
  );
}

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;
Filter.displayName = "ActionBar.Filter";
Filter.defaultRulesByType = defaultRulesByType;
Filter.rules = rules;
Filter.Item = FilterItem;
