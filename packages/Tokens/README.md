# @paprika/tokens

## Description

The `tokens` package is the implementation of the Starling Design System's design tokens for use with Sass and JavaScript (for use with `styled-components`).

They include an extensive colour palette, spacing values, and other CSS properties to keep the styling conssitent for apps created with Paprika.

On the Paprika wiki pages, you can [read more about using design tokens](https://github.com/acl-services/paprika/wiki/Coding-Conventions#tokens).

The Starling Design System site has a [**tokens reference page**](https://design.wegalvanize.com/tokens).

## Installation

```sh
yarn add @paprika/tokens
```

or with npm:

```sh
npm install @paprika/tokens
```

## Usage

Tokens are intended for use **internally and externally**.

Internally, when contributors create Paprika components, and externally, when application developers consume Paprika to create user interfaces with the Starling Design System.

### Consumers

Typically consumers will be using tokens with Sass. They can be included in any Sass file with:

```scss
@import "@paprika/tokens/lib/tokens.scss";
```

Then you should be able to use variables like `$space` and `$color--black-lighten-10`.

### Contributors

When using tokens in Paprika, or even in an application that uses `styled-components` or another CSS-in-JS framework, the tokens can be imported with:

```js
import tokens from "@paprika/tokens";
```

Then you can access the tokens from that `tokens` object, like `tokens.space` or `tokens.color.blackLighten10`.

With `styled-components` you will usually use them in a template string, interpolated like `${tokens.space}`.

#### Adding New Tokens

The source file for the tokens is `src/tokens.yaml`. New tokens can be added there and then generated for Sass, JavaScript and even for the Starling Design System reference page by running the folloing in the `packages/Tokens` directory:

```sh
yarn pretranspile
```

Which will generate the following:

- tokens.js
- tokens.json
- tokens.scss
- tokens.md

## Links

- [Starling Design System tokens reference](https://design.wegalvanize.com/tokens)
- [Paprika coding conventions wiki](https://github.com/acl-services/paprika/wiki/Coding-Conventions#tokens)
- [Github source code](https://github.com/acl-services/paprika/tree/master/packages/Tokens/src)
- [Github create issue](https://github.com/acl-services/paprika/issues/new?label=[]&title=@paprika/tokens%20[help]:%20your%20short%20description&body=%0A%23%20Help%20wanted%0A%0A%23%23%20Please%20write%20your%20question.%0A*A%20clear%20and%20concise%20description%20of%20what%20the%20question%20is*%0A%0A%23%23%20Additional%20context%0A*Add%20any%20other%20context%20or%20screenshots%20about%20your%20question%20here.*%0A)
- [ChangeLog](https://github.com/acl-services/paprika/tree/master/packages/Tokens/CHANGELOG.md)
