import React from "react";
import useI18n from "../../useI18n";

// A real-life example would be the `Collapsible` component (but its not available in Paprika yet)
export default function SomePaprikaComponent() {
  const i18n = useI18n();
  const translatedText = i18n.t("moreInformation");
  return <button type="button">{translatedText}</button>;
}
