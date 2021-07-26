import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Locales from "./locales";

i18next.use(initReactI18next).init({
  debug: false,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: Locales,
});

export default i18next;
