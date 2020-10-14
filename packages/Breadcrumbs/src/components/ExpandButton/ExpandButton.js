import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import EllipsisIcon from "@paprika/icon/lib/Ellipsis";
import IsDarkContext from "../../context";

import * as sc from "./ExpandButton.styles";

function ExpandButton(props) {
  const { onClick } = props;
  const I18n = useI18n();

  return (
    <sc.ExpandButtonWrapper>
      <IsDarkContext.Consumer>
        {isDark => (
          <sc.ExpandButton
            a11yText={I18n.t("breadcrumbs.aria_expand")}
            data-pka-anchor="breadcrumbs.expandButton"
            kind="minor"
            size="small"
            onClick={onClick}
            isDark={isDark}
          >
            <EllipsisIcon />
          </sc.ExpandButton>
        )}
      </IsDarkContext.Consumer>
    </sc.ExpandButtonWrapper>
  );
}

const propTypes = {
  onClick: PropTypes.func.isRequired,
};

ExpandButton.propTypes = propTypes;

export default ExpandButton;
