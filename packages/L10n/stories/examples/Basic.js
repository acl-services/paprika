import React, { useContext } from "react";
import { string } from "prop-types";
import L10n, { L10nContext } from "../../L10n";

function SomeAclUiComponentThatUsesLocalization() {
  // an example would be the `Collapsible` component (not using it as its not in paprika yet)
  const i18n = useContext(L10nContext);
  const translatedText = i18n.t("moreInformation");
  return <button type="button">{translatedText}</button>;
}

const propTypes = {
  locale: string,
};

const defaultProps = {
  locale: "en",
};

export default function MyFakeConsumerApp(props) {
  return (
    <L10n locale={props.locale}>
      <SomeAclUiComponentThatUsesLocalization />
    </L10n>
  );
}

MyFakeConsumerApp.propTypes = propTypes;
MyFakeConsumerApp.defaultProps = defaultProps;
