import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import { emptyValueStyles } from "./Responses.styles";

const propTypes = {
  heading: PropTypes.node.isRequired,
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const Item = ({ heading, children }) => {
  const I18n = useI18n();

  return (
    <>
      <dt>{heading}</dt>
      <dd>{children || <span css={emptyValueStyles}>{I18n.t("progressAccordion.no_response")}</span>}</dd>
    </>
  );
};

Item.displayName = "ProgressAccordion.Responses.Item";
Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
