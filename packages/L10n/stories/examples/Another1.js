import i18n from "../../src/i18n-new";

export default function ConsumingApp() {
  i18n.changeLanguage("fr");
  return i18n.t("timePicker.custom");
}
