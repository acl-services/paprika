import React from "react";
import PropTypes from "prop-types";
import * as sc from "./PageItem.styles";

const propTypes = {
  /* Description of the PageItem for assistive technology */
  a11yText: PropTypes.string,

  /** Callback to be executed when the PageItem is clicked or activated by keyboard. */
  onClick: PropTypes.func,

  /** The page number */
  pageNumber: PropTypes.number.isRequired,
};

const defaultProps = {
  a11yText: null,
  onClick: () => {},
};

function PageItem(props) {
  const { a11yText, onClick, pageNumber } = props;
  return (
    <sc.PageItem aria-label={(a11yText, pageNumber)} onClick={onClick}>
      {pageNumber}
    </sc.PageItem>
  );
}

PageItem.defaultProps = defaultProps;
PageItem.displayName = "Pagination.PageItem";
PageItem.propTypes = propTypes;

export default PageItem;
