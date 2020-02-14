import React from "react";
import PropTypes from "prop-types";
import Popover from "@paprika/popover";
import Button from "@paprika/button";
import useI18n from "@paprika/l10n/lib/useI18n";
import CheckIcon from "@paprika/icon/lib/Check";
import FilterItem from "./FilterItem";
import { rulesByType } from "./rules";
import FilterContext from "./context";

import * as styled from "./Filter.styles";
import { GenericPopoverPlaceholder } from "../../Navigation.styles";

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
  operator: PropTypes.oneOf(["AND", "OR"]),
};

const defaultProps = {
  appliedNumber: 0,
  children: null,
  onChangeOperator: null,
  onCancel: () => {},
  onClose: () => {},
  onOpen: () => {},
  operator: "AND",
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
        return I18n.t("navigation.filter.label");
      case 1:
        return I18n.t("navigation.filter.singular_label");
      default:
        return I18n.t("navigation.filter.plural_label", { numberOfFilters });
    }
  }

  return (
    <FilterContext.Provider value={{ filtersRef, columns, operator, onChangeOperator }}>
      <Popover align="bottom" edge="left" maxWidth={600} offset={8} isOpen={isOpen} onClose={handleClose}>
        <styled.Trigger
          isSemantic={false}
          kind="flat"
          onClick={handleClickTrigger}
          hasFilterApplied={appliedNumber > 0}
          isOpen={isOpen}
        >
          <styled.Icon />
          {getLabelText(appliedNumber)}
        </styled.Trigger>
        <Popover.Content>
          <Popover.Card>
            <styled.FiltersPanel ref={filtersRef} tabIndex={-1}>
              {React.Children.count(children) === 0 ? (
                <GenericPopoverPlaceholder>{I18n.t("navigation.filter.no_filters_applied")}</GenericPopoverPlaceholder>
              ) : null}
              {children}
            </styled.FiltersPanel>
            <styled.Footer>
              <Button onClick={onAddFilter} kind="minor" data-pka-anchor="navigation.filter.addFilterButton">
                {I18n.t(`navigation.filter.add_filter`)}
              </Button>
              <Button onClick={handleApply} kind="flat" icon={<CheckIcon />}>
                Apply
              </Button>
              <Button onClick={handleCancel} kind="minor">
                Cancel
              </Button>
            </styled.Footer>
          </Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
    </FilterContext.Provider>
  );
}

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;
Filter.displayName = "Navigation.Filter";
Filter.rulesByType = rulesByType;
Filter.Item = FilterItem;
