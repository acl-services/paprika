import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import { getIcon } from "./ArrowItem.styles";
import * as sc from "./ArrowItem.styles";

const propTypes = {
  /* Description of the ArrowItem for assistive technology */
  a11yText: PropTypes.string,

  /** To set the ArrowItem as disabled */
  isDisabled: PropTypes.bool,

  /** Callback to be executed when the ArrowItem is clicked or activated by keyboard. */
  onClick: PropTypes.func,

  /** What type of arrow to display */
  type: PropTypes.string,
};

const defaultProps = {
  a11yText: null,
  isDisabled: false,
  onClick: () => {},
  type: "right",
};

function ArrowItem(props) {
  const { a11yText, isDisabled, onClick, type } = props;
  const Icon = getIcon(type);
  const I18n = useI18n();

  return (
    <sc.ArrowItem aria-label={a11yText || I18n.t(`pagination.${type}`)} isDisabled={isDisabled} onClick={onClick}>
      <Icon isDisabled={isDisabled} />
    </sc.ArrowItem>
  );
}

ArrowItem.defaultProps = defaultProps;
ArrowItem.displayName = "Pagination.ArrowItem";
ArrowItem.propTypes = propTypes;

export default ArrowItem;
