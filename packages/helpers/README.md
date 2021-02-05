# @paprika/helpers

<br />

## Description

JavaScript and React helper utilities.

<br />

## Installation

```
yarn add @paprika/helpers
```

or with npm:

```
npm install @paprika/helpers
```

<br />

## Usage

Import the helper function you want to use by name from the Paprika `helpers` package:

```jsx
import { helperFunction } from "@paprika/helpers";
```

Polyfills must be imported directly from their source in the `lib` folder. For example:

```jsx
import "@paprika/helpers/lib/polyfills/elementClosest";
```

<br />

## Contents

<br />

#### callAll(functions[])

Returns a function that will call all functions passed as arguments.

#### extractChildren(children, types[])

Get a hash table of components from `chilren` argument where the `displayName` property of `child` matches an item provided in the `types` argument with the keys of the return object matching the items in `types`.

#### extractChildrenProps(children, target)

Get the `props` object from the `target` argument component type if it exists in `children` argument.

#### isDevEnv()

Returns true if `NODE_ENV` is `undefined` or "development".

<br />

### Custom PropTypes

A variety of custom React prop types including:

- `ShirtSizes`
- `AlignTypes`
- `deprecated`
- `InputValidTypes`
- `FocusPropTypes`
- `RefOf`

<br />

### DOM Functions

#### isElementContainsFocus(element)

Returns `true` if the `document.activeElement` is the `element` argument, or any descendent of `element`.

<br />

### Components

#### &lt;LockBodyScroll&gt;

Sets body `overlow` to `hidden`.

#### &lt;Portal&gt;

Wrapper for `ReactDOM.createPortal`.

<br />

### Hooks

#### useDebounce(value, delay)

Provides a `value` after a specified `delay`.

#### useForwardDomRef(ref, parentRef)

Set `parentRef` to `ref`.

#### useMountedRef()

Provides a ref with a `current` value of `true` if component is (still) mounted.

#### usePrevious(value)

Provides the previous value of the `value` argument.

<br />

### Polyfills

#### elementClosest

IE polyfill for `Element.closest()`.

#### elementScroll

IE polyfill for `Element.scroll()`, `Element.scrollTo()`, `Element.scrollBy()`.

<br />

## Links

- [GitHub source code](https://github.com/acl-services/paprika/tree/master/packages/helpers/src)
- [Create GitHub issue](https://github.com/acl-services/paprika/issues/new?label=[]&title=@paprika/helpers%20[help]:%20your%20short%20description&body=%0A%23%20Help%20wanted%0A%0A%23%23%20Please%20write%20your%20question.%0A*A%20clear%20and%20concise%20description%20of%20what%20the%20question%20is*%0A%0A%23%23%20Additional%20context%0A*Add%20any%20other%20context%20or%20screenshots%20about%20your%20question%20here.*%0A)
- [CHANGELOG](https://github.com/acl-services/paprika/tree/master/packages/helpers/CHANGELOG.md)
