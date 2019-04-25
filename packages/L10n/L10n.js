import React from "react";
import PropTypes from "prop-types";
import { getI18nObject } from "./useI18n";
import Locales from "./locales";

export const L10nContext = React.createContext();

const propTypes = {
  locale: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  locale: "en",
};

export default function L10n(props) {
  const value = React.useMemo(() => getI18nObject(props.locale), [props.locale, Locales]);
  return <L10nContext.Provider value={value}>{props.children}</L10nContext.Provider>;
}

L10n.propTypes = propTypes;
L10n.defaultProps = defaultProps;
