# Changelog

## 3.2.1-next.0

### Patch Changes

- Updated dependencies [ae0d6a0]
  - @paprika/l10n@1.1.11-next.0
  - @paprika/input@4.0.3-next.0
  - @paprika/toast@1.1.4-next.0

## 3.2.0

### Minor Changes

- 4365834: Added contentOffsetX and contentOffsetY props to control the horizontal and vertical offset of the <ListBox> contents with <Popover>.

### Patch Changes

- Updated dependencies [e856d54]
- Updated dependencies [e856d54]
  - @paprika/button@1.1.0
  - @paprika/raw-button@1.0.4
  - @paprika/input@4.0.2
  - @paprika/popover@1.2.3
  - @paprika/toast@1.1.3

## 3.2.0-next.0

### Minor Changes

- 4365834: Added contentOffsetX and contentOffsetY props to control the horizontal and vertical offset of the <ListBox> contents with <Popover>.

### Patch Changes

- Updated dependencies [e856d54]
- Updated dependencies [e856d54]
  - @paprika/button@1.1.0-next.0
  - @paprika/raw-button@1.0.4-next.0
  - @paprika/input@4.0.2-next.0
  - @paprika/toast@1.1.3-next.0
  - @paprika/popover@1.2.3-next.0

## 3.1.0

### Minor Changes

- f54c146: Use consistent styling for carets across selectable components

### Patch Changes

- aaf5263: Fixed issues related to keyboard operations:

  - fixed inability to press 'space' button when in filter search bar
  - fixed inability to select option(s) using only keyboard (i.e. space or enter operation) for single/ multi controlled ListBox
  - fixed issue when selecting options in multi listbox, then typing space in filter bar that causes the selection/de-selection of the previously selected option

- 9d2079c: Removing data prop from spreding into the main div
- Updated dependencies [32904f2]
- Updated dependencies [f54c146]
  - @paprika/input@4.0.1
  - @paprika/icon@1.1.1
  - @paprika/button@1.0.10
  - @paprika/toast@1.1.2

## 3.1.0-next.1

### Minor Changes

- f54c146: Use consistent styling for carets across selectable components

### Patch Changes

- 9d2079c: Removing data prop from spreding into the main div
- Updated dependencies [32904f2]
- Updated dependencies [f54c146]
  - @paprika/input@4.0.1-next.0
  - @paprika/icon@1.1.1-next.0
  - @paprika/button@1.0.10-next.0
  - @paprika/toast@1.1.2-next.0

## 3.0.5-next.0

### Patch Changes

- aaf5263: Fixed issues related to keyboard operations:

  - fixed inability to press 'space' button when in filter search bar
  - fixed inability to select option(s) using only keyboard (i.e. space or enter operation) for single/ multi controlled ListBox
  - fixed issue when selecting options in multi listbox, then typing space in filter bar that causes the selection/de-selection of the previously selected option

## 3.0.4

### Patch Changes

- 45d341f: ### Changed

  - Adjusted styling of `<ListBox.Filter>` input.

  Author: [@mikrotron](https://github.com/mikrotron)

- Updated dependencies [45d341f]
- Updated dependencies [14bd5f5]
  - @paprika/input@4.0.0
  - @paprika/popover@1.2.2

## 3.0.4-next.0

### Patch Changes

- 45d341f: ### Changed

  - Adjusted styling of `<ListBox.Filter>` input.

  Author: [@mikrotron](https://github.com/mikrotron)

- Updated dependencies [45d341f]
- Updated dependencies [14bd5f5]
  - @paprika/input@4.0.0-next.0
  - @paprika/popover@1.2.2-next.0

## 3.0.3

### Patch Changes

- 33f39a7: Remove some keys from props so they dont get added to DOM, which causes a console warning.
- 9ad9c79: Change PropTypes.instanceOf(Element) to PropTypes.node to fix SSR issue
- Updated dependencies [5d0db59]
- Updated dependencies [9ad9c79]
  - @paprika/icon@1.1.0
  - @paprika/helpers@2.1.2
  - @paprika/button@1.0.9
  - @paprika/input@3.0.1
  - @paprika/popover@1.2.1
  - @paprika/toast@1.1.1

## 3.0.3-next.1

### Patch Changes

- 33f39a7: Remove some keys from props so they dont get added to DOM, which causes a console warning.
- 9ad9c79: Change PropTypes.instanceOf(Element) to PropTypes.node to fix SSR issue
- Updated dependencies [9ad9c79]
  - @paprika/helpers@2.1.2-next.0
  - @paprika/button@1.0.9-next.1
  - @paprika/input@3.0.1-next.1
  - @paprika/popover@1.2.1-next.0
  - @paprika/toast@1.1.1-next.1

## 3.0.3-next.0

### Patch Changes

- Updated dependencies [5d0db59]
  - @paprika/icon@1.1.0-next.0
  - @paprika/button@1.0.9-next.0
  - @paprika/input@3.0.1-next.0
  - @paprika/toast@1.1.1-next.0

## 3.0.2

### Patch Changes

- 9f4c925: minor missing window declaration
- Updated dependencies [c265721]
- Updated dependencies [26a610a]
  - @paprika/popover@1.2.0

## 3.0.2-next.1

### Patch Changes

- 9f4c925: minor missing window declaration

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
