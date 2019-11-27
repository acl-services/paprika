import React from "react";
import PropTypes from "prop-types";
import DropdownMenu from "@paprika/dropdown-menu";
import sort from "../../../../helpers/sort";
import { actions } from "../../../../constants";
import { useDataTableState, useDispatch } from "../../../..";
import Switch from "@paprika/switch";
import ColumnManagingItem from "./ColumnManagingItem";

const propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    })
  ),
};

const defaultProps = {
  columns: [],
};

export default function ColumnManaging(props) {
  const { columns, columnsOrder } = useDataTableState();

  return (
    <DropdownMenu
      align="bottom"
      renderTrigger={({ isOpen, handleOpenMenu }) => (
        <DropdownMenu.Trigger isOpen={isOpen} onOpenMenu={handleOpenMenu}>
          Show/hide column
        </DropdownMenu.Trigger>
      )}
    >
      {columnsOrder.map(columnId => {
        const { header, canHide } = columns[columnId];
        if (!canHide) return null;

        return <ColumnManagingItem key={columnId} header={header} columnId={columnId} />;
      })}
    </DropdownMenu>
  );
}

ColumnManaging.propTypes = propTypes;
ColumnManaging.defaultProps = defaultProps;

ColumnManaging.reducer = (state, action) => {
  if (action.type === "TOGGLE_COLUMN") {
    return {
      ...action.changes,
      columns: {
        ...action.changes.columns,
        [action.payload]: {
          ...action.changes.columns[action.payload],
          isHidden: !action.changes.columns[action.payload].isHidden,
        },
      },
    };
  }

  return action.changes;
};
