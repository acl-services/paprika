import React from "react";
import PropTypes from "prop-types";
import Switch from "@paprika/switch";
import { useDataTableState, useDispatch } from "../../../..";

const propTypes = {
  columnId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default function ColumnManagingItem(props) {
  const { columnId } = props;
  const dispatch = useDispatch();
  const { columns } = useDataTableState();
  const column = columns[columnId];

  function handleClick() {
    dispatch({ type: "TOGGLE_COLUMN", payload: columnId });
  }

  return (
    <React.Fragment>
      {columnId}
      <Switch onClick={handleClick} isChecked={!column.isHidden} isDisabled={!column.canHide} />
    </React.Fragment>
  );
}

ColumnManagingItem.propTypes = propTypes;
