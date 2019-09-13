import React from "react";
import useI18n from "../../../src/useI18n";

export default function Greeting() {
  const i18n = useI18n();
  return <h1>Custom locale greeting: {i18n.t("customlocalegreeting")}</h1>;
}
