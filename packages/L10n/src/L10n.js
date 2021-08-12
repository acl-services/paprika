import React from "react";
import PropTypes from "prop-types";
import { getI18nObject } from "./useI18n";
import L10nContext from "./L10nContext";

const propTypes = {
  /** Sets the preferred language */
  locale: PropTypes.string,
  locales: PropTypes.object /* eslint-disable-line react/forbid-prop-types */,
  /** Children of the L10n */
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  locale: "en",
  locales: null,
};

export default function L10n(props) {
  const value = React.useMemo(() => getI18nObject(props.locale, props.locales), [props.locale, props.locales]);
  value.i18n.changeLanguage(props.locale);
  return <L10nContext.Provider value={value}>{props.children}</L10nContext.Provider>;
}

L10n.propTypes = propTypes;
L10n.defaultProps = defaultProps;
L10n.displayName = "L10n";
