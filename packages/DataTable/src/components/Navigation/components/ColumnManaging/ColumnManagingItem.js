import React from "react";
import PropTypes from "prop-types";
import Switch from "@paprika/switch";
import { useDataTableState } from "../../../..";
import useToggleColumn from "../../../../hooks/useToggleColumn";

const propTypes = {
  columnId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default function ColumnManagingItem(props) {
  const { columnId } = props;
  const { columns } = useDataTableState();
  const column = columns[columnId];
  const toggleColumn = useToggleColumn();

  function handleClick() {
    toggleColumn(columnId);
  }

  return (
    <React.Fragment>
      {columnId}
      <Switch onClick={handleClick} isChecked={!column.isHidden} isDisabled={!column.canHide} />
    </React.Fragment>
  );
}

ColumnManagingItem.propTypes = propTypes;
