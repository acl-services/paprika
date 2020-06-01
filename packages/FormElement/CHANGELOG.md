# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.3.0] - 2020-01-17

### Added

- Added render function to handle children [@tristanjasper](https://github.com/tristanjasper).

### Removed

- No longer adds its extended props to the children components provided. This must now be done by the consumer [@tristanjasper](https://github.com/tristanjasper).

## [0.3.01] - 2020-01-27

### Added

- Added new isFieldSet prop to support rendering of fieldset and legend elements for multiple children
- Ensures children can be rendered as html in the label sub component
- Only renders required label if both hasRequiredLabel and hasOptionalLabel are true [@tristanjasper](https://github.com/tristanjasper).

## [0.3.20] - 2020-06-01

### Added

-- Added onClickLabel prop to be able to set focus on child refs, currently ButtonGroup supported
