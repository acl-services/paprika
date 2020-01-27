# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.3.0] - 2020-01-17

### Added

- FormElement.Content component with render function to handle children [@tristanjasper](https://github.com/tristanjasper).

### Removed

- FormElement no longer adds its extended props to the children components provided. This must now be done by the consumer [@tristanjasper](https://github.com/tristanjasper).

## [0.4.0] - 2020-01-27

### Added

- FormElement component adds new isFieldSet prop to support rendering of fieldset and legend elements for multiple children
- Only renders required label if both hasRequiredLabel and hasOptionalLabel are true [@tristanjasper](https://github.com/tristanjasper).
