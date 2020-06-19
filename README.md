![Paprika logo](https://user-images.githubusercontent.com/10501940/52080175-07327400-254c-11e9-9748-7a00f93a13a8.png)

<p align="center">Paprika is the React component library for the generic UI components of the <a href="https://design.wegalvanize.com/">Starling Design System</a> by <a href="https://www.wegalvanize.com/">Galvanize</a>.</p>
<p align="center">
  Quick Links: 
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
  <a href="https://github.com/acl-services/paprika/pulls"><img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/acl-services/paprika"></a>
  <a href="https://github.com/acl-services/paprika/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/acl-services/paprika"></a>
  <a href="https://github.com/acl-services/paprika/blob/master/LICENSE"><img alt="MIT license" src="https://img.shields.io/github/license/acl-services/paprika"></a>
</p>

---

## Getting Started Using Paprika

#### Dependencies

If you want to spice up your application with Paprika, you will need to start by adding the required dependencies. Paprika has a `peerDependency` on `React v16.8`, `styled-components` and most packages also have a `peerDependency` on the [Paprika L10n component](https://github.com/acl-services/paprika/blob/master/packages/L10n/README.md) (`@paprika/l10n`) for localization.

You will need to include them as dependencies in your project.

```sh
$ yarn add react styled-components @paprika/l10n
```

#### Adding a Component

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

#### More Information

For more information about using Paprika in your project, including code examples and FAQs, visit the [Using Paprika wiki pages](https://github.com/acl-services/paprika/wiki/Using-Paprika).

## Components

Paprika components are individually versioned and distributed packages in a Lerna monorepo.
To browse a list of components, open the [Storybook](https://paprika.highbond.com/),
view the [source code](https://github.com/acl-services/paprika/tree/master/packages),
visit the [NPM registry](https://www.npmjs.com/org/paprika),
or refer to the [AirTable summary](https://airtable.com/shrkJwkvtbgc3FT22).

#### NPM Packages

<a href="https://www.npmjs.com/package/@paprika/action-bar"><img src="https://img.shields.io/npm/v/@paprika/action-bar?label=ActionBar" /></a>
<a href="https://www.npmjs.com/package/@paprika/button"><img src="https://img.shields.io/npm/v/@paprika/button?label=Button" /></a>
<a href="https://www.npmjs.com/package/@paprika/button-group"><img src="https://img.shields.io/npm/v/@paprika/button-group?label=ButtonGroup" /></a>
<a href="https://www.npmjs.com/package/@paprika/card"><img src="https://img.shields.io/npm/v/@paprika/card?label=Card" /></a>
<a href="https://www.npmjs.com/package/@paprika/checkbox"><img src="https://img.shields.io/npm/v/@paprika/checkbox?label=Checkbox" /></a>
<a href="https://www.npmjs.com/package/@paprika/collapsible"><img src="https://img.shields.io/npm/v/@paprika/collapsible?label=Collapsible" /></a>
<a href="https://www.npmjs.com/package/@paprika/collapsible-checklists"><img src="https://img.shields.io/npm/v/@paprika/collapsible-checklists?label=CollapsibleChecklists" /></a>
<a href="https://www.npmjs.com/package/@paprika/collapsible-text"><img src="https://img.shields.io/npm/v/@paprika/collapsible-text?label=CollapsibleText" /></a>
<a href="https://www.npmjs.com/package/@paprika/confirmation"><img src="https://img.shields.io/npm/v/@paprika/confirmation?label=Confirmation" /></a>
<a href="https://www.npmjs.com/package/@paprika/counter"><img src="https://img.shields.io/npm/v/@paprika/counter?label=Counter" /></a>
<a href="https://www.npmjs.com/package/@paprika/data-grid"><img src="https://img.shields.io/npm/v/@paprika/data-grid?label=DataGrid" /></a>
<a href="https://www.npmjs.com/package/@paprika/date-input"><img src="https://img.shields.io/npm/v/@paprika/date-input?label=DateInput" /></a>
<a href="https://www.npmjs.com/package/@paprika/date-picker"><img src="https://img.shields.io/npm/v/@paprika/date-picker?label=DatePicker" /></a>
<a href="https://www.npmjs.com/package/@paprika/dialog-actions"><img src="https://img.shields.io/npm/v/@paprika/dialog-actions?label=DialogActions" /></a>
<a href="https://www.npmjs.com/package/@paprika/dropdown-menu"><img src="https://img.shields.io/npm/v/@paprika/dropdown-menu?label=DropdownMenu" /></a>
<a href="https://www.npmjs.com/package/@paprika/external-link"><img src="https://img.shields.io/npm/v/@paprika/external-link?label=ExternalLink" /></a>
<a href="https://www.npmjs.com/package/@paprika/form-element"><img src="https://img.shields.io/npm/v/@paprika/form-element?label=FormElement" /></a>
<a href="https://www.npmjs.com/package/@paprika/guard"><img src="https://img.shields.io/npm/v/@paprika/guard?label=Guard" /></a>
<a href="https://www.npmjs.com/package/@paprika/heading"><img src="https://img.shields.io/npm/v/@paprika/heading?label=Heading" /></a>
<a href="https://www.npmjs.com/package/@paprika/helpers"><img src="https://img.shields.io/npm/v/@paprika/helpers?label=helpers" /></a>
<a href="https://www.npmjs.com/package/@paprika/icon"><img src="https://img.shields.io/npm/v/@paprika/icon?label=Icon" /></a>
<a href="https://www.npmjs.com/package/@paprika/input"><img src="https://img.shields.io/npm/v/@paprika/input?label=Input" /></a>
<a href="https://www.npmjs.com/package/@paprika/l10n"><img src="https://img.shields.io/npm/v/@paprika/l10n?label=L10n" /></a>
<a href="https://www.npmjs.com/package/@paprika/listbox"><img src="https://img.shields.io/npm/v/@paprika/listbox?label=ListBox" /></a>
<a href="https://www.npmjs.com/package/@paprika/listbox-browser"><img src="https://img.shields.io/npm/v/@paprika/listbox-browser?label=ListBoxBrowser" /></a>
<a href="https://www.npmjs.com/package/@paprika/modal"><img src="https://img.shields.io/npm/v/@paprika/modal?label=Modal" /></a>
<a href="https://www.npmjs.com/package/@paprika/overlay"><img src="https://img.shields.io/npm/v/@paprika/overlay?label=Overlay" /></a>
<a href="https://www.npmjs.com/package/@paprika/pill"><img src="https://img.shields.io/npm/v/@paprika/pill?label=Pill" /></a>
<a href="https://www.npmjs.com/package/@paprika/popover"><img src="https://img.shields.io/npm/v/@paprika/popover?label=Popover" /></a>
<a href="https://www.npmjs.com/package/@paprika/progress-accordion"><img src="https://img.shields.io/npm/v/@paprika/progress-accordion?label=ProgressAccordion" /></a>
<a href="https://www.npmjs.com/package/@paprika/radio"><img src="https://img.shields.io/npm/v/@paprika/radio?label=Radio" /></a>
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

## Contributing

Before contributing, please read our [Code of Conduct](https://github.com/acl-services/paprika/blob/master/CODE_OF_CONDUCT.md)
Contributors are welcome to [submit a bug report](https://github.com/acl-services/paprika/issues/new?assignees=&labels=Bug+%F0%9F%90%9B&template=bug_report.md),
[make a feature request](https://github.com/acl-services/paprika/issues/new?assignees=&labels=Feature+request+%F0%9F%92%A1&template=feature_request.md),
or open a pull request.
If you’re just getting started, check out the [Help Wanted](https://github.com/acl-services/paprika/issues?q=is%3Aissue+is%3Aopen+label%3A%22Help+Wanted%22) or [Good First Issues](https://github.com/acl-services/paprika/issues?q=is%3Aissue+is%3Aopen+label%3A%22Good+First+Issue%22).

#### More Information

For more information please check out our [Contributing Guidelines](https://github.com/acl-services/paprika/wiki/Contributing-Guidelines). You may want to start with the [Getting Started Guide](https://github.com/acl-services/paprika/wiki/Getting-Started)

### Testing

There are a few layers to the testing pyramid in Paprika.

- Static analysis – [ESLint](https://eslint.org/) (with several plugins, namely [airbnb](https://www.npmjs.com/package/eslint-config-airbnb))
- Unit testing – [Jest](https://jestjs.io/)
- Component testing – [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- End-to-end testing – [Cypress](https://testing-library.com/docs/react-testing-library/intro)
- Visual regresstion testing – [Screener](https://screener.io/)

## Accessibility

Paprika components are built with accessibility in mind from design through implementation.
Compliance with [WCAG 2.0 level AA](https://www.w3.org/TR/WCAG20/)
by following [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/)
is a priority.

In practice this ensures the usability of Paprika components:

- with keyboard, mouse or touch inputs
- at various zoom levels up to 200% on a variety of screen sizes
- with sufficent colour contrast for all essential elements
- with meaningful and semantic markup
- with support for assistive technology (screen readers like VoiceOver, NVDA, and Jaws)

For more information about how these goals are achieved, please read our [guidelines for developers](https://design.wegalvanize.com/p/guidelines/accessibility#guidelines-for-developers-tab-3).

## Support

Have a question for the development team? [Ask us](https://github.com/acl-services/paprika/issues/new?assignees=&labels=Help+wanted+%E2%9D%93&template=help_wanted.md).

## License

[The MIT License (MIT)](https://github.com/acl-services/paprika/blob/master/LICENSE)
