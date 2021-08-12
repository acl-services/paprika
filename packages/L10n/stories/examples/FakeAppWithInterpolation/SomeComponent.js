import React from "react";
import { Trans } from "react-i18next";
import Button from "@paprika/button";
import Link from "@paprika/external-link";
import { useI18n } from "../../../src";

export default function SomeComponent() {
  const x = useI18n();

  return (
    <Trans i18nKey="help_text" i18n={x.i18n} count={14}>
      <Button
        kind="link"
        onClick={() => {
          alert("You clicked on tab 2");
        }}
      />
      <Link href="https://google.ca" hasNoUnderline />
    </Trans>
  );
}
