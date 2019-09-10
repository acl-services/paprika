import React from "react";
import L10nContext from "./L10nContext";
import { i18n } from "./i18n";
import PaprikaLocales from "./locales";

function mergeTranslation(customLocales, paprikaLocales) {
  const result = {};

  Object.keys(paprikaLocales).forEach(lang => {
    result[lang] = {
      translation: {
        ...(customLocales[lang] ? customLocales[lang].translation : {}),
        ...(paprikaLocales[lang] ? paprikaLocales[lang].translation : {}),
      },
    };
  });

  return result;
}

export const getI18nObject = (locale = "en", locales) => {
  const _i18n = i18n(locales ? mergeTranslation(locales, PaprikaLocales) : PaprikaLocales);

  return {
    locale,
    t: _i18n.getFixedT(locale),
  };
};

export default function useI18n() {
  const _i18n = React.useContext(L10nContext);
  return _i18n || getI18nObject();
}
