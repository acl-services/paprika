![Paprika logo](https://user-images.githubusercontent.com/10501940/52080175-07327400-254c-11e9-9748-7a00f93a13a8.png)

<h1 align="center">Paprika</h1>
<p align="center">React component library of the <a href="https://design.wegalvanize.com">Starling Design System</a>.</p>
<div align="center">
<img alt="react version" src="https://img.shields.io/badge/react-v16.8.2-green.svg">
<img alt="node version" src="https://img.shields.io/badge/node-v10.0.0%2B-brightgreen.svg">
<img alt="yarn version" src="https://img.shields.io/badge/yarn-v1.12.3%2B-yellowgreen.svg">
<img alt="lerna version" src="https://img.shields.io/badge/lerna-v3.13.0-blue.svg">
<img alt="styled components version" src="https://img.shields.io/badge/styled--components-4.2.0-yellow">
<img alt="prettier" src="https://img.shields.io/badge/codestyle-prettier-%23ff69b4">
<a href="https://github.com/acl-services/paprika/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/acl-services/paprika"></a>
<a href="https://github.com/acl-services/paprika/blob/master/LICENSE"><img alt="MIT license" src="https://img.shields.io/github/license/acl-services/paprika"></a>
</div>
<br>

Paprika is a collection of individually versioned and distributed reusable components built and maintained by [Galvanize](https://www.wegalvanize.com).

[Storybook](https://paprika.highbond.com) |
[Npm](https://www.npmjs.com/org/paprika) |
[Airtable](https://airtable.com/shrkJwkvtbgc3FT22)

## Installation and usage

### Prerequisites

Paprika has a `peerDependency` on `styled-components` so make sure to install it as a dependency in your project.

```sh
yarn add styled-components
```

- Node v10.0.0+
- Yarn v1.12.3+

Paprika also has a `peerDependency` on `@paprika/l10n` to localize your application and paprika components. To install it, run:

```sh
yarn add @paprika/l10n
```

Optional: If you want to use different locales, then wrapping your project using `<L10n>`.

```js
import L10n from "@paprika/l10n";

function YourProject(props) {
  return (
    <L10n locale="fr" locales={YourLocales}>
      ...
      <GreetingHeader />
      ...
    </L10n>
  );
}
```

For more details, you can check it from here: https://github.com/acl-services/paprika/tree/master/packages/L10n

### Example of installing a component

The following is an example of the button component, but all other components will be installed in a similar way.

1. Installing the button package:

```sh
yarn add @paprika/button
```

2. In your project:

```js
import React from "react";
import Button from "@paprika/button";

export default () => <Button>Hello</Button>;
```

## Contributors guide

We welcome anyone to contribute to paprika by submitting a pull request, filing a bug report or making a feature request. For more information please check out our [contributing guidelines](https://github.com/acl-services/paprika/wiki/Contributing-Guidelines) wiki page.

### How to run paprika locally

1. Install dependencies

```sh
yarn
```

2. Link packages with Lerna

```sh
npx lerna bootstrap
```

### How to run storybook locally

```sh
yarn storybook
```

### Running tests

We use [jest](https://jestjs.io/docs/en/expect) and [react-testing-library](https://github.com/testing-library/react-testing-library) for testing.

```sh
yarn test
```

### Build <L10n> Translations

Translations are automatically built when `npx lerna bootstrap` is executed. If you are adding new translation keys, remember to run `yarn translate` to see your changes locally.

```sh
yarn translate
```

## License

[The MIT License (MIT)](https://github.com/acl-services/paprika/blob/master/LICENSE)
