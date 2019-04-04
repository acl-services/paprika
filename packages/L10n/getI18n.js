import { useContext } from "react";
import { L10nContext } from "./L10n";
import { i18n } from "./i18n";
import Locales from "./locales";

export const getI18nObject = (locale = "en") => {
  const _i18n = i18n(Locales);
  return {
    locale,
    t: _i18n.getFixedT(locale),
  };
};

export default function getI18n() {
  const _i18n = useContext(L10nContext);
  return _i18n || getI18nObject();
}
