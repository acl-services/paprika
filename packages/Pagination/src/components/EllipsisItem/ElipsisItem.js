import React from "react";
import PropTypes from "prop-types";
import * as sc from "./ElipsisItem.styles";

const propTypes = {
  /* Description of the ElipsisItem for assistive technology */
  a11yText: PropTypes.string,

  /** Value for role attribute to override the default */
  role: PropTypes.string,
};

const defaultProps = {
  a11yText: null,
  role: "button",
};

function ElipsisItem(props) {
  const { a11yText, role } = props;
  return (
    <sc.ElipsisItem aria-disabled aria-label={a11yText} role={role}>
      <sc.ElipsisItemElipse>...</sc.ElipsisItemElipse>
    </sc.ElipsisItem>
  );
}

ElipsisItem.defaultProps = defaultProps;
ElipsisItem.displayName = "Pagination.ElipsisItem";
ElipsisItem.propTypes = propTypes;

export default ElipsisItem;
