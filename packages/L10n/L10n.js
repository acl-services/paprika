import React from "react";
import { i18n } from ".";
import Locales from "./locales";

export const L10nContext = React.createContext();

export default function L10n(props) {
  const _i18n = i18n(Locales);
  _i18n.changeLanguage(props.locale);
  return <L10nContext.Provider value={_i18n}>{props.children}</L10nContext.Provider>;
}
