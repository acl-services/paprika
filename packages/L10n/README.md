<!-- start: Autogenerated - do not modify -->

# @paprika/l10n

## Description

L10n component can be used in one of two ways: Translating Paprika components, or Translating your own components.

## Installation

```
yarn add @paprika/l10n
```

or with npm:

```
npm install @paprika/l10n
```

## Props

### L10n

| Prop     | Type   | required | default | Description                 |
| -------- | ------ | -------- | ------- | --------------------------- |
| locale   | string | false    | "en"    | Sets the preferred language |
| locales  | object | false    | null    |                             |
| children | node   | true     | -       | Children of the L10n        |

<!-- end: Autogenerated - do not modify -->
<!-- content -->

## Usage

This component can be used in one of two ways: Translating Paprika components, or Translating your own components.

##### Translating Paprika components

When someone wants to use a Paprika component that has translatable text (like the `<Collapsible>`) in a language other than English, they'd do it like this:

```jsx
import L10n from "@paprika/l10n";
import Collapsible from "@paprika/collapsible";

<L10n locale="fr">
  ...
  <h4>Mon app</h4>
  <Collapsible />
  ...
</L10n>;
```

##### Translating your own components

When someone wants to add their own translations to their own app/components, they'd do it like this:

```jsx
// App.js
import React from "react";
import L10n from "@paprika/l10n";
import YourLocales from "./YourLocales";
import GreetingHeader from "./GreetingHeader";

export default function FakeAppWithLocales(props) {
  return (
    <L10n locale="fr" locales={YourLocales}>
      ...
      <GreetingHeader />
      ...
    </L10n>
  );
}
```

```jsx
// GreetingHeader.js
import React from "react";
import useI18n from "@paprika/l10n/lib/useI18n";

export default function GreetingHeader() {
  const i18n = useI18n();
  return <h1>{i18n.t("greeting")}</h1>;
}
```

```jsx
// YourLocales/index.js
const locales = {};

["en", "fr"].forEach(lng => {
  // eslint-disable-next-line
  Object.assign(locales, require(`./${lng}.js`).default);
});

export default locales;
```

```jsx
// YourLocales/en.js
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
```

```jsx
// YourLocales/fr.js
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

Please do not using the same translation key as paprika's to avoid overriding. You can check them from here: https://github.com/acl-services/paprika/blob/master/packages/L10n/src/locales/en.yml

##### Adding new translations

After you have added a new translation to en.yml, in order to see it in Storybook you will need to delete the `lib` folder and regenerate it:

```
rm -rf packages/L10n/lib/ && npx lerna bootstrap
```

<!-- eoContent -->

## Links

- [Storybook Showcase](https://paprika.highbond.com/?path=/story/utilities-l10n--showcase)
- [GitHub source code](https://github.com/acl-services/paprika/tree/master/packages/L10n/src)
- [Create GitHub issue](https://github.com/acl-services/paprika/issues/new?label=[]&title=@paprika/l10n%20[help]:%20your%20short%20description&body=%0A%23%20Help%20wanted%0A%0A%23%23%20Please%20write%20your%20question.%0A*A%20clear%20and%20concise%20description%20of%20what%20the%20question%20is*%0A%0A%23%23%20Additional%20context%0A*Add%20any%20other%20context%20or%20screenshots%20about%20your%20question%20here.*%0A)
- [CHANGELOG](https://github.com/acl-services/paprika/tree/master/packages/L10n/CHANGELOG.md)
