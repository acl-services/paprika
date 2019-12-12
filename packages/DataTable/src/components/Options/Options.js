import React from "react";
import PropTypes from "prop-types";
import DropdownMenu from "@paprika/dropdown-menu";
import ArrowDown from "@paprika/icon/lib/ArrowDown";
import SortOption from "./SortOption";
import { useDispatch, useDataTableState } from "../../context";
import { sortDirections, plugins } from "../../constants";

const propTypes = {
  columnId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default function Options(props) {
  const { columnId } = props;
  const dispatch = useDispatch();
  const { columns, enabledPlugins } = useDataTableState();
  const { momentParsingFormat, canHide, canSort } = columns[columnId];

  function handleClickAddFilter() {
    dispatch({ type: "ADD_FILTER", payload: columnId });
  }

  function handleToggleColumn() {
    dispatch({ type: "TOGGLE_COLUMN", payload: columnId });
  }

  if (enabledPlugins.length === 0) return null;

  return (
    <DropdownMenu
      align="bottom"
      data-pka-anchor="datatable-dropdown"
      renderTrigger={({ isOpen, handleOpenMenu }) => (
        <DropdownMenu.Trigger
          isOpen={isOpen}
          onOpenMenu={handleOpenMenu}
          icon={<ArrowDown />}
          kind="minor"
          size="small"
        />
      )}
    >
      {enabledPlugins.includes(plugins.SORT) && canSort
        ? Object.keys(sortDirections).map(key => (
            <SortOption
              key={sortDirections[key]}
              columnId={columnId}
              direction={sortDirections[key]}
              momentParsingFormat={momentParsingFormat}
            />
          ))
        : null}
      {enabledPlugins.includes(plugins.COLUMN_MANAGING) && canHide ? (
        <DropdownMenu.Item onClick={handleToggleColumn}>Hide this column</DropdownMenu.Item>
      ) : null}
      {enabledPlugins.includes(plugins.FILTERS) ? (
        <DropdownMenu.Item onClick={handleClickAddFilter}>Add filter for this column</DropdownMenu.Item>
      ) : null}
    </DropdownMenu>
  );
}

Options.propTypes = propTypes;
