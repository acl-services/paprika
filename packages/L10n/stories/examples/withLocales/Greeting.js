import React from "react";
import useI18n from "../../../src/useI18n";

export default function Greeting() {
  const i18n = useI18n();
  return i18n.t("new_message");
}
