import React from "react";
import PropTypes from "prop-types";
import Popover from "@paprika/popover";
import Button from "@paprika/button";
import useI18n from "@paprika/l10n/lib/useI18n";
import CheckIcon from "@paprika/icon/lib/Check";
import FilterItem from "./FilterItem";
import { rulesByType } from "./rules";
import * as styled from "./Filter.styles";
import { GenericPopoverPlaceholder } from "../../Navigation.styles";

const propTypes = {
  appliedNumber: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      columnId: PropTypes.string.isRequired,
      filterId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      renderValueField: PropTypes.func,
      rule: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    })
  ).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteFilter: PropTypes.func.isRequired,
  onAddFilter: PropTypes.func.isRequired,
  operator: PropTypes.oneOf(["AND", "OR"]),
  onChangeOperator: PropTypes.func,
  onApply: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

const defaultProps = {
  appliedNumber: 0,
  operator: "AND",
  onChangeOperator: null,
};

export default function Filter(props) {
  const {
    appliedNumber,
    onDeleteFilter,
    onAddFilter,
    filters,
    columns,
    onChange,
    operator,
    onChangeOperator,
    onApply,
    onCancel,
  } = props;
  const I18n = useI18n();
  const filtersRef = React.useRef(null);

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
    <Popover align="bottom" edge="left" maxWidth={600} offset={8}>
      <Popover.Trigger>
        {(handler, attributes, isOpen) => (
          <styled.Trigger
            {...attributes}
            isSemantic={false}
            onClick={handler}
            hasFilterApplied={appliedNumber > 0}
            isOpen={isOpen}
          >
            <styled.Icon />
            {getLabelText(appliedNumber)}
          </styled.Trigger>
        )}
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Card>
          <styled.FiltersPanel ref={filtersRef} tabIndex={-1}>
            {filters.length === 0 ? (
              <GenericPopoverPlaceholder>{I18n.t("navigation.filter.no_filters_applied")}</GenericPopoverPlaceholder>
            ) : null}
            {filters.map((filter, index) => (
              <FilterItem
                key={filter.filterId}
                filter={filter}
                columns={columns}
                onDeleteFilter={onDeleteFilter}
                onChange={onChange}
                index={index}
                filtersRef={filtersRef}
                operator={operator}
                onChangeOperator={onChangeOperator}
              />
            ))}
          </styled.FiltersPanel>
          <styled.Footer>
            <Button onClick={onAddFilter} kind="minor" data-pka-anchor="navigation.filter.addFilterButton">
              {I18n.t(`navigation.filter.add_filter`)}
            </Button>
            <Button onClick={onApply} kind="flat" icon={<CheckIcon />}>
              Apply
            </Button>
            <Button onClick={onCancel} kind="minor">
              Cancel
            </Button>
          </styled.Footer>
        </Popover.Card>
      </Popover.Content>
      <Popover.Tip />
    </Popover>
  );
}

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;
Filter.displayName = "Navigation.Filter";
Filter.rulesByType = rulesByType;
