import React from "react";
import PropTypes from "prop-types";
import Switch from "@paprika/switch";
import { useDataTableState, useDispatch } from "../../../..";
import { useLocalStorage } from "../../../../context";

const propTypes = {
  columnId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default function ColumnManagingItem(props) {
  const { columnId } = props;
  const dispatch = useDispatch();
  const { columns } = useDataTableState();
  const column = columns[columnId];
  const updateLocalStorage = useLocalStorage();

  function handleClick() {
    dispatch({ type: "TOGGLE_COLUMN", payload: columnId });
    const newColumn = {
      ...columns[columnId],
      isHidden: !columns[columnId].isHidden,
    };
    updateLocalStorage({ columns: { ...columns, [columnId]: newColumn } });
  }

  return (
    <React.Fragment>
      {columnId}
      <Switch onClick={handleClick} isChecked={!column.isHidden} isDisabled={!column.canHide} />
    </React.Fragment>
  );
}

ColumnManagingItem.propTypes = propTypes;
