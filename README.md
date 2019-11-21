![Paprika logo](https://user-images.githubusercontent.com/10501940/52080175-07327400-254c-11e9-9748-7a00f93a13a8.png)

<p align="center">Paprika is the React component library for the generic UI components of the <a href="https://design.wegalvanize.com/">Starling Design System</a> by <a href="https://www.wegalvanize.com/">Galvanize</a>.</p>
<p align="center">
  <a href="https://www.npmjs.com/org/paprika">NPM</a> |
  <a href="https://paprika.highbond.com/">Storybook</a> |
  <a href="https://airtable.com/shrkJwkvtbgc3FT22">Component Status</a> |
  <a href="https://github.com/acl-services/paprika/wiki">Contributing Guidelines</a>
</p>
<p align="center">
  <img alt="react version" src="https://img.shields.io/badge/react-v16.8.2-green.svg">
  <img alt="node version" src="https://img.shields.io/badge/node-v10.0.0%2B-brightgreen.svg">
  <img alt="yarn version" src="https://img.shields.io/badge/yarn-v1.12.3%2B-yellowgreen.svg">
  <img alt="lerna version" src="https://img.shields.io/badge/lerna-v3.13.0-blue.svg">
  <img alt="styled components version" src="https://img.shields.io/badge/styled--components-4.2.0-yellow">
  <img alt="prettier" src="https://img.shields.io/badge/codestyle-prettier-%23ff69b4">
  <a href="https://github.com/acl-services/paprika/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/acl-services/paprika"></a>
  <a href="https://github.com/acl-services/paprika/blob/master/LICENSE"><img alt="MIT license" src="https://img.shields.io/github/license/acl-services/paprika"></a>
</p>

---

## Getting Started

#### Environment

- Node v10.0.0+
- Yarn v1.12.3+

Paprika has a `peerDependency` on `styled-components` and most packages also have a `peerDependency` on `@paprika/l10n` (for localization). 
You will need to include them as dependencies in your project. 

```sh
$ yarn add styled-components
$ yarn add @paprika/l10n
```
[More details about using the L10n component](https://github.com/acl-services/paprika/blob/master/packages/L10n/README.md).

#### Installing a Component

For example, to install the `<Button>` component:

```sh
$ yarn add @paprika/button
```

Then, to use the component in your project:

```js
import React from "react";
import Button from "@paprika/button";

export default () => <Button>Hello</Button>;
```

## Contributing

Contributors are welcome to [submit a bug report](https://github.com/acl-services/paprika/issues/new?assignees=&labels=Bug+%F0%9F%90%9B&template=bug_report.md), 
[make a feature request](https://github.com/acl-services/paprika/issues/new?assignees=&labels=Feature+request+%F0%9F%92%A1&template=feature_request.md),
or open a pull request. 
If you're just getting started, check out the [Help Wanted](https://github.com/acl-services/paprika/issues?q=is%3Aissue+is%3Aopen+label%3A%22Help+Wanted%22) or [Good First Issues](https://github.com/acl-services/paprika/issues?q=is%3Aissue+is%3Aopen+label%3A%22Good+First+Issue%22).

For more information please check out our [Contributing Guidelines](https://github.com/acl-services/paprika/wiki/Contributing-Guidelines).

## Components

Paprika components are individually versioned and distributed packages in a Lerna monorepo. 
To browse a list of components, [view the source code](https://github.com/acl-services/paprika/tree/master/packages), 
visit the [NPM registry](https://www.npmjs.com/org/paprika), 
or refer to the [AirTable summary](https://airtable.com/shrkJwkvtbgc3FT22).

<a href="https://www.npmjs.com/package/@paprika/button"><img src="https://img.shields.io/npm/v/@paprika/button?label=Button" /></a>
<a href="https://www.npmjs.com/package/@paprika/checkbox"><img src="https://img.shields.io/npm/v/@paprika/checkbox?label=Checkbox" /></a>
<a href="https://www.npmjs.com/package/@paprika/collapsible"><img src="https://img.shields.io/npm/v/@paprika/collapsible?label=Collapsible" /></a>
<a href="https://www.npmjs.com/package/@paprika/collapsible-checklists"><img src="https://img.shields.io/npm/v/@paprika/collapsible-checklists?label=CollapsibleChecklists" /></a>
<a href="https://www.npmjs.com/package/@paprika/collapsible-text"><img src="https://img.shields.io/npm/v/@paprika/collapsible-text?label=CollapsibleText" /></a>
<a href="https://www.npmjs.com/package/@paprika/confirmation"><img src="https://img.shields.io/npm/v/@paprika/confirmation?label=Confirmation" /></a>
<a href="https://www.npmjs.com/package/@paprika/counter"><img src="https://img.shields.io/npm/v/@paprika/counter?label=Counter" /></a>
<a href="https://www.npmjs.com/package/@paprika/date-picker"><img src="https://img.shields.io/npm/v/@paprika/date-picker?label=DatePicker" /></a>
<a href="https://www.npmjs.com/package/@paprika/dropdown-menu"><img src="https://img.shields.io/npm/v/@paprika/dropdown-menu?label=DropdownMenu" /></a>
<a href="https://www.npmjs.com/package/@paprika/form-element"><img src="https://img.shields.io/npm/v/@paprika/form-element?label=FormElement" /></a>
<a href="https://www.npmjs.com/package/@paprika/guard"><img src="https://img.shields.io/npm/v/@paprika/guard?label=Guard" /></a>
<a href="https://www.npmjs.com/package/@paprika/heading"><img src="https://img.shields.io/npm/v/@paprika/heading?label=Heading" /></a>
<a href="https://www.npmjs.com/package/@paprika/helpers"><img src="https://img.shields.io/npm/v/@paprika/helpers?label=helpers" /></a>
<a href="https://www.npmjs.com/package/@paprika/icon"><img src="https://img.shields.io/npm/v/@paprika/icon?label=Icon" /></a>
<a href="https://www.npmjs.com/package/@paprika/input"><img src="https://img.shields.io/npm/v/@paprika/input?label=Input" /></a>
<a href="https://www.npmjs.com/package/@paprika/l10n"><img src="https://img.shields.io/npm/v/@paprika/l10n?label=L10n" /></a>
<a href="https://www.npmjs.com/package/@paprika/listbox"><img src="https://img.shields.io/npm/v/@paprika/listbox?label=ListBox" /></a>
<a href="https://www.npmjs.com/package/@paprika/listbox-browser"><img src="https://img.shields.io/npm/v/@paprika/listbox-browser?label=ListBox" /></a>
<a href="https://www.npmjs.com/package/@paprika/pill"><img src="https://img.shields.io/npm/v/@paprika/pill?label=Pill" /></a>
<a href="https://www.npmjs.com/package/@paprika/popover"><img src="https://img.shields.io/npm/v/@paprika/popover?label=Popover" /></a>
<a href="https://www.npmjs.com/package/@paprika/progress-accordion"><img src="https://img.shields.io/npm/v/@paprika/progress-accordion?label=ProgressAccordion" /></a>
<a href="https://www.npmjs.com/package/@paprika/raw-button"><img src="https://img.shields.io/npm/v/@paprika/raw-button?label=RawButton" /></a>
<a href="https://www.npmjs.com/package/@paprika/select"><img src="https://img.shields.io/npm/v/@paprika/select?label=Select" /></a>
<a href="https://www.npmjs.com/package/@paprika/sidepanel"><img src="https://img.shields.io/npm/v/@paprika/sidepanel?label=SidePanel" /></a>
<a href="https://www.npmjs.com/package/@paprika/sortable"><img src="https://img.shields.io/npm/v/@paprika/sortable?label=Sortable" /></a>
<a href="https://www.npmjs.com/package/@paprika/spinner"><img src="https://img.shields.io/npm/v/@paprika/spinner?label=Spinner" /></a>
<a href="https://www.npmjs.com/package/@paprika/stylers"><img src="https://img.shields.io/npm/v/@paprika/stylers?label=stylers" /></a>
<a href="https://www.npmjs.com/package/@paprika/switch"><img src="https://img.shields.io/npm/v/@paprika/switch?label=Switch" /></a>
<a href="https://www.npmjs.com/package/@paprika/tabs"><img src="https://img.shields.io/npm/v/@paprika/tabs?label=Tabs" /></a>
<a href="https://www.npmjs.com/package/@paprika/takeover"><img src="https://img.shields.io/npm/v/@paprika/takeover?label=Takeover" /></a>
<a href="https://www.npmjs.com/package/@paprika/textarea"><img src="https://img.shields.io/npm/v/@paprika/textarea?label=Textarea" /></a>
<a href="https://www.npmjs.com/package/@paprika/toast"><img src="https://img.shields.io/npm/v/@paprika/toast?label=Toast" /></a>
<a href="https://www.npmjs.com/package/@paprika/tokens"><img src="https://img.shields.io/npm/v/@paprika/tokens?label=tokens" /></a>
<a href="https://www.npmjs.com/package/@paprika/uploader"><img src="https://img.shields.io/npm/v/@paprika/uploader?label=Uploader" /></a>

## License

[The MIT License (MIT)](https://github.com/acl-services/paprika/blob/master/LICENSE)
