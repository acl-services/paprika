import React from "react";
import { node, string } from "prop-types";
import { i18n } from ".";
import Locales from "./locales";

export const L10nContext = React.createContext();

const propTypes = {
  locale: string,
  children: node.isRequired,
};

const defaultProps = {
  locale: "en",
};

export default function L10n(props) {
  const _i18n = i18n(Locales);
  _i18n.changeLanguage(props.locale);
  return <L10nContext.Provider value={_i18n}>{props.children}</L10nContext.Provider>;
}

L10n.propTypes = propTypes;
L10n.defaultProps = defaultProps;
