# Changelog

## 3.0.2-next.0

### Patch Changes

- Updated dependencies [c265721]
  - @paprika/popover@1.2.0-next.0

## 3.0.1

### Patch Changes

- 0b3b614: #### Fixed

  - Ensure "no results" message is read by screen readers.

  [@mikrotron](https://github.com/mikrotron)

- Updated dependencies [12938b6]
- Updated dependencies [0b3b614]
  - @paprika/popover@1.1.0
  - @paprika/toast@1.1.0

## 3.0.1-next.1

### Patch Changes

- 0b3b614: #### Fixed

  - Ensure "no results" message is read by screen readers.

  [@mikrotron](https://github.com/mikrotron)

- Updated dependencies [0b3b614]
  - @paprika/toast@1.1.0-next.0

## 3.0.1-next.0

### Patch Changes

- Updated dependencies [12938b6]
  - @paprika/popover@1.1.0-next.0

## 3.0.0

### Major Changes

- 47607db: ## 💥 BREAKING CHANGE

  Refactored keyboard events for ↑ and ↓ for the list component
  Refactor for the ↑ and ↓ keyboard navigation (`ListBox`), most consumer shouldn't be affected by it.

  ## why the change was made:

  We change the way the listbox navigates the options in the Component more details can be found on this PR: [#973](https://github.com/acl-services/paprika/pull/973)

  ## 👷 Moving from 2.1.0 to 3.0.0:

  No action required. There is not really an action from the consumer, this is marked as a breaking change because might break side code if you were in somehow depending on the previous implementation. But most likely you won't need to take any further actions

## 3.0.0-next.0

### Major Changes

- 47607db: ## 💥 BREAKING CHANGE

  Refactored keyboard events for ↑ and ↓ for the list component
  Refactor for the ↑ and ↓ keyboard navigation (`ListBox`), most consumer shouldn't be affected by it.

  ## why the change was made:

  We change the way the listbox navigates the options in the Component more details can be found on this PR: [#973](https://github.com/acl-services/paprika/pull/973)

  ## 👷 Moving from 2.1.0 to 3.0.0:

  No action required. There is not really an action from the consumer, this is marked as a breaking change because might break side code if you were in somehow depending on the previous implementation. But most likely you won't need to take any further actions

## 2.1.0

### Minor Changes

- 9797e84: Add support for isDisabled, isReadOnly, and hasError props to <ListBoxWithTags> and handle the a11yProps provided by <FormElement.Content> via <ListBoxWithTags.A11y> prop collector component.

## 2.1.0-next.0

### Minor Changes

- 9797e84: Add support for isDisabled, isReadOnly, and hasError props to <ListBoxWithTags> and handle the a11yProps provided by <FormElement.Content> via <ListBoxWithTags.A11y> prop collector component.

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [1.4.0]

- Fix some issue with keyboard functionality introduced when working with ListBoxWithTags on the Trigger component.
- Remove dispatch toggle from Trigger and when with an ordinary if and else, adding clarity to whats happening.

## [1.0.1]

- Fix accessiblity issue so options are now focusable and read to screen reader technology
- Add Toast component as depedency

## [1.0.0] - 2020-11-04

### Changed

- Moved from ListBox

## [0.9.0] - 2020-06-16

### Changed

- Add onKeyUp event for `SPACE`, `ESC` and `ENTER` before onKeyDown was handling all key interaction now its only responsible for `↑`,`↓` keys.
  this might break testing that depends onKeyDown event.

## [0.9.3] - 2020-08-13

### Changed

- Add `label` prop on `ListBox.Trigger` component to support custom text as the label.

## [0.9.4] - 2020-08-17

### Fixed

- Update `lastKnownSelectedOptions` in the state, when `useListBox.types.updateOptions` has been dispatched.

## [0.9.7] - 2020-09-02

### Added

- Updated: Created and placed all constants into type.js file. [@kaan.darcey](https://github.com/KDarcey).

## [0.9.8] - 2020-09-04

### Fixed

- Fix ListBox Footer sub-component was compiling the older version of the updated constants/types. It's properties was running 'Button..Kinds.MINOR' where it should be running 'Button.types.kind.Minor'. Proprties have been updated to latest standard. [@kaan.darcey](https://github.com/KDarcey).

## [1.1.1-alpha.2] - 2020-12-03

### Fixed

- Fixed hardcoded text in listbox footer.

## [1.3.0] - 2021-01-11

### Change

- WithTags subcomponent was moved to their own packages no is part of @paprika/list-box-with-tags

## [1.3.2-alpha.0] - 2021-01-21

### Fixed

- Fixed the potential mapping children error.

## [1.3.3-alpha.0] - 2021-02-01

### Changed

- Replace `nanoid` by `uuid`.

## [1.3.5-alpha.7] - 2021-02-26

### Added

- `hasError` and `isReadOnly` props. [@mikrotron](https://github.com/mikrotron)
- `<ListBox.A11y>` props collector component to collect props and attributes for a11y and propagate them to the trigger button or, if `isInline`, to the `role=listbox` element. [@mikrotron](https://github.com/mikrotron)
- `aria-expanded` and `aria-controls` to `attributes.propsForTrigger` in parameters of render function for `children` of `<ListBox.Trigger>`. [@mikrotron](https://github.com/mikrotron)

### Changed

- Moved `role=listbox` element from `<List>` (`<ul>`) to `<Content>`. [@mikrotron](https://github.com/mikrotron)
- Improved the `aria-labels`. [@mikrotron](https://github.com/mikrotron)
- Ensured `moreProps` passed to the root `<ListBox>` get propagated to the root DOM element. [@mikrotron](https://github.com/mikrotron)
- Internally refactored some "controlled" props to a new, simple context provider allowing updates on re-render. [@mikrotron](https://github.com/mikrotron)
