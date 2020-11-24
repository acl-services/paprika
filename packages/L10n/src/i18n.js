import i18next from "i18next";
import paprikaLocales from "./locales";

export const defaultLocale = "en";

export const i18n = locales => {
  const i18nConfig = {
    lng: defaultLocale,
    fallbackLng: defaultLocale,
    lowerCaseLng: true,
    resources: locales || paprikaLocales,
    interpolation: {
      escapeValue: false,
    },
  };

  const newInstance = i18next.createInstance(i18nConfig, err => {
    if (err) return console.log("something went wrong loading i18next", err);
    return null;
  });

  return newInstance;
};
