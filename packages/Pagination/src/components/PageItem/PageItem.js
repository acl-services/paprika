import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
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
  const I18n = useI18n();

  return (
    <sc.PageItem aria-label={(a11yText || I18n.t("pagination.page"), pageNumber)} onClick={onClick}>
      {pageNumber}
    </sc.PageItem>
  );
}

PageItem.defaultProps = defaultProps;
PageItem.displayName = "Pagination.PageItem";
PageItem.propTypes = propTypes;

export default PageItem;
