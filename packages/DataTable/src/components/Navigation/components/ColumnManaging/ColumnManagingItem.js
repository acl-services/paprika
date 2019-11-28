import React from "react";
import PropTypes from "prop-types";
import Switch from "@paprika/switch";
import { useDataTableState, useDispatch } from "../../../..";

const propTypes = {
  columnId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
};

export default function ColumnManagingItem(props) {
  const { columnId, header } = props;
  const dispatch = useDispatch();
  const { columns } = useDataTableState();

  function handleClick() {
    dispatch({ type: "TOGGLE_COLUMN", payload: columnId });
  }

  return (
    <React.Fragment>
      <Switch onClick={handleClick} isChecked={!columns[columnId].isHidden} />
      {header}
    </React.Fragment>
  );
}

ColumnManagingItem.propTypes = propTypes;
