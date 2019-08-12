import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import { emptyValueStyles } from "./Responses.styles";

const propTypes = {
  /** The title / question / term for this Response item. */
  heading: PropTypes.node.isRequired,

  /** The content / body / answer / definition for this Response item. */
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const Item = ({ heading, children }) => {
  const I18n = useI18n();

  return (
    <>
      <dt data-pka-anchor="responses.item.heading">{heading}</dt>
      <dd data-pka-anchor="responses.item.body">
        {children || <span css={emptyValueStyles}>{I18n.t("progressAccordion.no_response")}</span>}
      </dd>
    </>
  );
};

Item.displayName = "ProgressAccordion.Responses.Item";
Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
