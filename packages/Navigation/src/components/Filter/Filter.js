import React from "react";
import PropTypes from "prop-types";
import Popover from "@paprika/popover";
import Button from "@paprika/button";
import useI18n from "@paprika/l10n/lib/useI18n";
import FilterItem from "./FilterItem";
import { rulesByType } from "./rules";
import { FiltersPanelStyled } from "./Filter.styles";

const propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      filterId: PropTypes.string,
      columnId: PropTypes.string.isRequired,
      rule: PropTypes.string.isRequired,
      value: PropTypes.string,
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

const defaultProps = {
  onChange: null,
};

export default function Filter(props) {
  const { onDeleteFilter, onAddFilter, filters, columns, onChange } = props;
  const I18n = useI18n();

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
    <Popover align="bottom" edge="left" maxWidth={1200} offset={8}>
      <Popover.Trigger kind="flat">
        {handler => (
          <Button kind="flat" onClick={handler}>
            {getLabelText(filters.length)}
          </Button>
        )}
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Card>
          <FiltersPanelStyled>
            {filters.map((filter, index) => (
              <FilterItem
                key={filter.id}
                filter={filter}
                columns={columns}
                onDeleteFilter={onDeleteFilter}
                onChange={onChange}
                isFirst={index === 0}
              />
            ))}
            <Button onClick={onAddFilter} kind="minor">
              {I18n.t(`navigation.filter.add_filter`)}
            </Button>
          </FiltersPanelStyled>
        </Popover.Card>
        <Popover.Tip />
      </Popover.Content>
    </Popover>
  );
}

Filter.propTypes = propTypes;
Filter.defaultProps = defaultProps;
Filter.displayName = "Navigation.Filter";
Filter.rulesByType = rulesByType;
