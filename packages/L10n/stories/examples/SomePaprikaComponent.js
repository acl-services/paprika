import React from "react";
import Button from "@paprika/button";
import useI18n from "../../src/useI18n";

// A real-life example would be the `Collapsible` component (but its not available in Paprika yet)
export default function SomePaprikaComponent() {
  const i18n = useI18n();
  const translatedText = i18n.t("moreInformation");
  return <Button>{translatedText}</Button>;
}
