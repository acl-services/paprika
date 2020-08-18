import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import * as sc from "./CurrentPageItem.styles";

const propTypes = {
  /** The page number */
  pageNumber: PropTypes.number.isRequired,
};

function CurrentPageItem(props) {
  const { pageNumber } = props;

  const I18n = useI18n();

  return (
    <sc.Wrapper>
      <sc.CurrentPageItem
        aria-current
        aria-disabled
        aria-label={I18n.t("pagination.page", { pageNumber })}
        role="button"
      >
        <sc.CurrentPageItemContent>{pageNumber}</sc.CurrentPageItemContent>
      </sc.CurrentPageItem>
    </sc.Wrapper>
  );
}

CurrentPageItem.displayName = "Pagination.CurrentPageItem";
CurrentPageItem.propTypes = propTypes;

export default CurrentPageItem;
