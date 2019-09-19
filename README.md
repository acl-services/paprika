![Paprika logo](https://user-images.githubusercontent.com/10501940/52080175-07327400-254c-11e9-9748-7a00f93a13a8.png)

<h1 align="center">Paprika</h1>
<p align="center">Paprika is a react component library of the <a href="https://design.wegalvanize.com">Starling Design System</a>.</p>
<div align="center">
<img alt="GitHub issues" src="https://img.shields.io/github/issues/acl-services/paprika">
<img alt="GitHub" src="https://img.shields.io/github/license/acl-services/paprika">
</div>
<br>

It has a collection of reusable components that are versioned and downloaded individually. Paprika is built and maintained by [Galvanize](https://www.wegalvanize.com).

*Our list of components can be find for now at [npm](https://www.npmjs.com/org/paprika).*

[Storybook](https://paprika.highbond.com)
[Airtable](https://airtable.com/tblKm8hk9hxOhSjqZ/viwWfRyRdodyS2xVv?blocks=hide)

All paprika components can be installed as:

```sh
  npm install @paprika/ComponentToConsume
```

or

```sh
  yarn add @paprika/ComponentToConsume
```

---

## Contributors guide.

### Basic installation

Follow the next steps to start coding on paprika

1.- Install dependencies

```sh
$ yarn
```

2.- Link packages with Lerna

```sh
$ npx lerna bootstrap
```

That's all you are ready to go from here you can:

### run storybook

run storybook and explore paprika's components

```sh
$ yarn storybook
```

### run test

We use [jest](https://jestjs.io/docs/en/expect) and [react-testing-library](https://github.com/testing-library/react-testing-library) as one of our tools for testing.

```sh
  yarn test
```

or

For debugging your jest test via chrome, just run the command below, [more info](https://artsy.github.io/blog/2018/08/24/How-to-debug-jest-tests/)

```sh
  yarn test:debug
```

### minimum requirements

#### yarn version

yarn v1.12.3 (which contains yarn audit command) or update via:

```sh
$ brew install yarn
```

#### node version

v10.0.0 which is required by `eslint`

### Build <L10n> Translations

The L10n component uses only JavaScript functions -- no YAML parsing is needed. To accomplish this, the `prepublish` build step [will] converts the .yml files to .js files. If you'd like to run this translation manually, run:

```sh
$ yarn translate
```
