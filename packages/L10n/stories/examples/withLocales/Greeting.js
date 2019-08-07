import React from "react";
import useI18n from "@paprika/l10n/lib/useI18n";

export default function Greeting() {
  const i18n = useI18n();
  return <h1>{i18n.t("customlocalegreeting")}</h1>;
}
