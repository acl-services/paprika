import React from "react";
import PropTypes from "prop-types";
import Popover from "@paprika/popover";
import Button from "@paprika/button";
import useI18n from "@paprika/l10n/lib/useI18n";
import FilterItem from "./FilterItem";
import { rulesByType } from "./rules";
import * as styled from "./Filter.styles";

const propTypes = {
  onChange: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      filterId: PropTypes.string,
      columnId: PropTypes.string.isRequired,
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
};

export default function Filter(props) {
  const { onDeleteFilter, onAddFilter, filters, columns, onChange } = props;
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
      <Popover.Trigger kind="flat">
        {(handler, attributes) => (
          <styled.Trigger {...attributes} isSemantic={false} onClick={handler} hasFilterApplied={filters.length > 0}>
            <styled.Icon />
            {getLabelText(filters.length)}
          </styled.Trigger>
        )}
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Card>
          <styled.FiltersPanel ref={filtersRef} tabIndex={-1}>
            {filters.map((filter, index) => (
              <FilterItem
                key={filter.filterId}
                filter={filter}
                columns={columns}
                onDeleteFilter={onDeleteFilter}
                onChange={onChange}
                isFirst={index === 0}
                filtersRef={filtersRef}
              />
            ))}
          </styled.FiltersPanel>
          <Button onClick={onAddFilter} kind="minor">
            {I18n.t(`navigation.filter.add_filter`)}
          </Button>
        </Popover.Card>
        <Popover.Tip />
      </Popover.Content>
    </Popover>
  );
}

Filter.propTypes = propTypes;
Filter.displayName = "Navigation.Filter";
Filter.rulesByType = rulesByType;
