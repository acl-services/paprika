# Icon

## Description

`<Icon>` component is a graphic to represent something else

## Installation

```
yarn add @paprika/icon
```

or with npm:

```
npm install @paprika/icon
```

## Usage

> IMPORTANT: PAPRIKA MAKES USE OF SOME PROPRIETARY ICONS THAT REQUIRE A LICENCE IN ORDER TO BE CONSUMED. PLEASE REPLACE THOSE PROPRIETARY ICONS OUTSIDE OF THE HIGHBOND PLATFORM. PLEASE DO NOT CONSUME THESE ICONS DIRECTLY.

For each SVG icon, we export the respective `<Icon>` component from the `@paprika/icon` package. You can [see the full list of these icons](https://github.com/acl-services/paprika/tree/master/packages/Icon/src/svg).

To add a custom icon to paprika components, you can do the following:

```jsx
import { ArrowDown } from "@paprika/icon";
import tokens from "@paprika/tokens";

// Usually tokens.icon.sizeSm should be used for size
<ArrowDownIcon size={tokens.icon.sizeSm} />;
```

### Note

- The exported `@paprika/icon` is using _PascalCase_ naming (for example ArrowDown, ArrowLeft)

- If you are a consumer who needs a custom icon for your project, you have to use [wasabicons](https://design.wegalvanize.com/icons) _(only accessible to Galvanize users)_
