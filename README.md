![Paprika logo](https://user-images.githubusercontent.com/10501940/52080175-07327400-254c-11e9-9748-7a00f93a13a8.png)

<h1 align="center">Paprika</h1>
<p align="center">Paprika is a react component library of the <a href="https://design.wegalvanize.com">Starling Design System</a>.</p>
<div align="center">
<img alt="GitHub issues" src="https://img.shields.io/github/issues/acl-services/paprika">
<img alt="GitHub" src="https://img.shields.io/github/license/acl-services/paprika">
</div>
<br>

Paprika is a collection of reusable components that are versioned and downloaded individually. Paprika is built and maintained by [Galvanize](https://www.wegalvanize.com).

*Our list of components can be find for now at [npm](https://www.npmjs.com/org/paprika).*

[Storybook](https://paprika.highbond.com) | 
[Airtable](https://airtable.com/tblKm8hk9hxOhSjqZ/viwWfRyRdodyS2xVv?blocks=hide)

## Installation and usage
### Prerequisites
Paprika has a `peerDependecy` of `styled-components` so make sure to install it as a dependency in your project.
```sh
yarn add styled-components
```

- Node v10.0.0+
- Yarn v1.12.3+

### Example of installing the button component
1. Installing the button package:
```sh
yarn add @paprika/button
```

2. In your project:
```js
import React from 'react';
import Button from '@paprika/button';

export default (<Button>Hello</Button>);
```

## Contributors guide
We welcome anyone to contribute to paprika by submitting a pull request, filing a bug report or asking for a feature request. For more information please check out our [contributing guidelines](https://github.com/acl-services/paprika/wiki/Contributing-Guidelines) wiki page.

### How to run paprika locally
1. Install dependencies
```sh
$ yarn
```

2. Link packages with Lerna
```sh
$ npx lerna bootstrap
```

### How to run storybook locally
```sh
$ yarn storybook
```

### Running tests

We use [jest](https://jestjs.io/docs/en/expect) and [react-testing-library](https://github.com/testing-library/react-testing-library) for testing.
```sh
  yarn test
```

### Build <L10n> Translations

The L10n component uses only JavaScript functions -- no YAML parsing is needed. To accomplish this, the `prepublish` build step [will] converts the .yml files to .js files. If you'd like to run this translation manually, run:

```sh
$ yarn translate
```

## License
[The MIT License (MIT)](https://github.com/acl-services/paprika/blob/master/LICENSE)
