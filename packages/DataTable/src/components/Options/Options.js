import React from "react";
import PropTypes from "prop-types";
import DropdownMenu from "@paprika/dropdown-menu";
import ArrowDown from "@paprika/icon/lib/ArrowDown";
import SortOption from "./SortOption";
import { useDispatch, useDataTableState } from "../../context";
import { sortDirections, plugins } from "../../constants";
import useToggleColumn from "../../hooks/useToggleColumn";

const propTypes = {
  columnId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default function Options(props) {
  const { columnId } = props;
  const dispatch = useDispatch();
  const { columns, enabledPlugins } = useDataTableState();
  const { momentParsingFormat, canHide, canSort } = columns[columnId];
  const enabledPluginsAppliedToThisColumn = enabledPlugins.filter(plugin => {
    switch (plugin) {
      case plugins.SORT:
        return canSort;
      case plugins.FILTERS:
        return true;
      case plugins.COLUMN_MANAGING:
        return canHide;
      default:
        return false;
    }
  });
  const toggleColumn = useToggleColumn();

  function handleClickAddFilter() {
    dispatch({ type: "ADD_FILTER", payload: columnId });
  }

  function handleToggleColumn() {
    toggleColumn(columnId);
  }

  if (enabledPluginsAppliedToThisColumn.length === 0) return null;

  return (
    <DropdownMenu align="bottom" data-pka-anchor="datatable-dropdown">
      <DropdownMenu.Trigger buttonType="icon" kind="minor" size="small">
        <ArrowDown />
      </DropdownMenu.Trigger>
      {enabledPluginsAppliedToThisColumn.includes(plugins.SORT)
        ? Object.keys(sortDirections).map(key => (
            <SortOption
              key={sortDirections[key]}
              columnId={columnId}
              direction={sortDirections[key]}
              momentParsingFormat={momentParsingFormat}
            />
          ))
        : null}
      {enabledPluginsAppliedToThisColumn.includes(plugins.COLUMN_MANAGING) ? (
        <DropdownMenu.Item onClick={handleToggleColumn}>Hide this column</DropdownMenu.Item>
      ) : null}
      {enabledPluginsAppliedToThisColumn.includes(plugins.FILTERS) ? (
        <DropdownMenu.Item onClick={handleClickAddFilter}>Add filter for this column</DropdownMenu.Item>
      ) : null}
    </DropdownMenu>
  );
}

Options.propTypes = propTypes;
