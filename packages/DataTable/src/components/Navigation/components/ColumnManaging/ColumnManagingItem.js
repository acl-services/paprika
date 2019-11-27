import React from "react";
import PropTypes from "prop-types";
import DropdownMenu from "@paprika/dropdown-menu";
import sort from "../../../../helpers/sort";
import { actions } from "../../../../constants";
import { useDataTableState, useDispatch } from "../../../..";
import Switch from "@paprika/switch";

const propTypes = {
  columnId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const defaultProps = {
  // columns: [],
};

const noop = () => {};

export default function ColumnManagingItem(props) {
  // const { sortColumn, sortDirection } = useDataTableState();
  const { columnId, header } = props;
  const dispatch = useDispatch();
  const { columns } = useDataTableState();

  function handleClick() {
    dispatch({ type: "TOGGLE_COLUMN", payload: columnId });
  }

  return (
    <DropdownMenu.Item onClick={noop}>
      <Switch onClick={handleClick} isChecked={!columns[columnId].isHidden} />
      {header}
    </DropdownMenu.Item>
  );
}

ColumnManagingItem.propTypes = propTypes;
ColumnManagingItem.defaultProps = defaultProps;
