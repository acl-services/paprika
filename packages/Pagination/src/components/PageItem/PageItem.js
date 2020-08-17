import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import * as sc from "./PageItem.styles";

const propTypes = {
  /** Callback to be executed when the PageItem is clicked or activated by keyboard. */
  onClick: PropTypes.func.isRequired,

  /** The page number */
  pageNumber: PropTypes.number.isRequired,
};

function PageItem(props) {
  const { pageNumber, onClick } = props;
  const I18n = useI18n();

  return (
    <sc.PageItem aria-label={I18n.t("pagination.page", { pageNumber })} onClick={onClick}>
      {pageNumber}
    </sc.PageItem>
  );
}

PageItem.displayName = "Pagination.PageItem";
PageItem.propTypes = propTypes;

export default PageItem;
