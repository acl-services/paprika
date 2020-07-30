import React from "react";
import PropTypes from "prop-types";
import * as sc from "./CurrentPageItem.styles";

const propTypes = {
  /* Description of the CurrentPageItem for assistive technology */
  a11yText: PropTypes.string,

  /** The page number */
  pageNumber: PropTypes.number.isRequired,

  /** Value for role attribute to override the default */
  role: PropTypes.string,
};

const defaultProps = {
  a11yText: null,
  role: "button",
};

function CurrentPageItem(props) {
  const { a11yText, role, pageNumber } = props;
  return (
    <sc.CurrentPageItem aria-current aria-disabled aria-label={(a11yText, pageNumber)} role={role}>
      <sc.CurrentPageItemContent>{pageNumber}</sc.CurrentPageItemContent>
    </sc.CurrentPageItem>
  );
}

CurrentPageItem.defaultProps = defaultProps;
CurrentPageItem.displayName = "Pagination.CurrentPageItem";
CurrentPageItem.propTypes = propTypes;

export default CurrentPageItem;
