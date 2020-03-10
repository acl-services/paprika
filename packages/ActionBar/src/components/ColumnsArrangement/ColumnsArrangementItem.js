import React from "react";
import PropTypes from "prop-types";

import * as styled from "./ColumnsArrangement.styles";

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
    <styled.Item>
      <styled.ColumnLabel>{label}</styled.ColumnLabel>
      <styled.Switch onClick={handleClick} isChecked={!isHidden} isDisabled={isDisabled} size="small" />
    </styled.Item>
  );
}

ColumnsArrangementItem.propTypes = propTypes;
ColumnsArrangementItem.defaultProps = defaultProps;
