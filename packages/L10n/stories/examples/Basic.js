import React, { useContext } from "react";
import L10n, { L10nContext } from "../../L10n";

// When someone wants to use a paprika component (like the <Collapsible>) they'd do it like this:
//
// import Collapsible from "@paprika/collapsible";
//
// <h4>My app</h4>
// <Collapsible />
//
//
// but if they want it to be in a language other than english, they have to do:
//
// import Collapsible from "@paprika/collapsible";
// import L10n from "@paprika/L10n";
//
// <h4>My app</h4>
// <L10n locale="fr">
//   <Collapsible />
// </L10n>
//
//
//
// If they dont wrap it in an L10n, need it to default to en

function SampleComponentThatUsesAPaprikaComponent(props) {
  const i18n = useContext(L10nContext);
  const translatedText = i18n.t("moreInformation");
  return <button>{translatedText}</button>; // this simulates a paprika component
  // return <Collapsible />; // this component has aria text in the defined language; test on it.
}

export default function MyNewComponent(props) {
  return (
    <L10n locale="fr">
      <SampleComponentThatUsesAPaprikaComponent {...props} />
    </L10n>
  );
}
