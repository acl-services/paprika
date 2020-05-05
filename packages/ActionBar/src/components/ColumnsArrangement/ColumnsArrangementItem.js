import React from "react";
import PropTypes from "prop-types";

import * as sc from "./ColumnsArrangement.styles";

const propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isDisabled: PropTypes.bool,
  isHidden: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChangeVisibility: PropTypes.func.isRequired,
};

const defaultProps = {
  isHidden: false,
  isDisabled: false,
};

export default function ColumnsArrangementItem(props) {
  const { id, label, isDisabled, isHidden, onChangeVisibility } = props;

  function handleClick() {
    onChangeVisibility(id);
  }

  return (
    <sc.Item>
      <sc.ColumnLabel>{label}</sc.ColumnLabel>
      <sc.Switch onClick={handleClick} isChecked={!isHidden} isDisabled={isDisabled} size="small" />
    </sc.Item>
  );
}

ColumnsArrangementItem.propTypes = propTypes;
ColumnsArrangementItem.defaultProps = defaultProps;
