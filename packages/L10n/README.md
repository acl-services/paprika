This component can be used in one of two ways:

1. When someone wants to use a Paprika component that has translatable text (like the `<Collapsible>`) in a language other than English, they'd do it like this:

```
import L10n from "@paprika/L10n";
import Collapsible from "@paprika/collapsible";

<L10n locale="fr">
  ...
  <h4>Mon app</h4>
  <Collapsible />
  ...
</L10n>
```

2. When someone wants to add their own translations to their own app/components, they'd do it like this:

```
//App.js
import React from "react";
import L10n from "@paprika/L10n";
import YourLocales from "./YourLocales";
import Greeting from "./Greeting";

export default function FakeAppWithLocales(props) {
  return (
    <L10n locale="fr" locales={YourLocales}>
      ...
      <Greeting />
      ...
    </L10n>
  );
}


//Greeting.js
import React from "react";
import useI18n from "@paprika/l10n/lib/useI18n";

export default function Greeting() {
  const i18n = useI18n();
  return <h1>{i18n.t("customlocalegreeting")}</h1>;
}


//YourLocales/index.js
const locales = {};

["en", "fr"].forEach(lng => {
  // eslint-disable-next-line
  Object.assign(locales, require(`./${lng}.js`).default);
});

export default locales;


//YourLocales/en.js
const locales = {
  en: {
    translation: {
      greeting: "Hello",
      farewell: "Goodbye",
      x: "xxx",
      y: "yyy",
      z: "zzz",
    },
  },
};
export default locales;


//YourLocales/fr.js
const locales = {
  fr: {
    translation: {
      greeting: "Bonjour",
      farewell: "Au revoir",
      x: "xxx",
      y: "yyy",
      z: "zzz",
    },
  },
};
export default locales;

```
