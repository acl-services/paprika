import React from "react";
import PropTypes from "prop-types";
import { getI18nObject } from "./useI18n";
import L10nContext from "./L10nContext";

const propTypes = {
  locale: PropTypes.string,
  locales: PropTypes.object /* eslint-disable-line react/forbid-prop-types */,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  locale: "en",
  locales: null,
};

export default function L10n(props) {
  const value = React.useMemo(() => getI18nObject(props.locale, props.locales), [props.locale, props.locales]);
  return <L10nContext.Provider value={value}>{props.children}</L10nContext.Provider>;
}

L10n.propTypes = propTypes;
L10n.defaultProps = defaultProps;
L10n.displayName = "L10n";
