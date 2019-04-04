import React from "react";
import getI18n from "../../getI18n";

// A real-life example would be the `Collapsible` component (but its not available in Paprika yet)
export default function SomePaprikaComponentThatUsesLocalization() {
  const i18n = getI18n();
  const translatedText = i18n.t("moreInformation");
  return <button type="button">{translatedText}</button>;
}
