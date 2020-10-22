# @paprika/stylers

## Description

The `stylers` package is a companion for the `tokens` package, they are both implementations of the [Starling Design System](https://design.wegalvanize.com/) for use in styling user interfaces. The `stylers` are more than just simple values however, they are helper functions and bundles of CSS rules.

## Installation

```sh
yarn add @paprika/stylers
```

or with npm:

```sh
npm install @paprika/stylers
```

## Usage

`stylers` are intended for use **internally and externally**.

Internally, when contributors create Paprika components, and externally, when application developers consume Paprika to create user interfaces with the Starling Design System.

### Consumers

Typically consumers will be using tokens with Sass. They can be included in any Sass file with:

```scss
@import "@paprika/stylers/lib/helpers.scss";
```

Then you should be able to use Sass functions like `font-size()` and `spacer()` as well as mixins like `@include truncate-text;` and `@include focus-ring(true)`.

### Contributors

For scalability, in implementation of the `stylers` is split into:

- `includes.js` + `formIncludes.js` (for bundles of styling rules)
- `helpers.js` (functions that take an input and generate a value or styling rule/rules).

## Links

- [Paprika coding conventions wiki](https://github.com/acl-services/paprika/wiki/Coding-Conventions#stylers)
- [Github source code](https://github.com/acl-services/paprika/tree/master/packages/Stylers/src)
- [Github create issue](https://github.com/acl-services/paprika/issues/new?label=[]&title=@paprika/stylers%20[help]:%20your%20short%20description&body=%0A%23%20Help%20wanted%0A%0A%23%23%20Please%20write%20your%20question.%0A*A%20clear%20and%20concise%20description%20of%20what%20the%20question%20is*%0A%0A%23%23%20Additional%20context%0A*Add%20any%20other%20context%20or%20screenshots%20about%20your%20question%20here.*%0A)
- [ChangeLog](https://github.com/acl-services/paprika/tree/master/packages/Stylers/CHANGELOG.md)
