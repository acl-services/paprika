---
"@paprika/filter": patch
---

Removes the `immer` dependency (addresses CVE-2021-23436 and CVE-2021-3757) by rewriting the internal reducer to use plain immutable operations instead of mutation-style updates. Also removes the `uuid` dependency in favor of an internal counter for generating filter row ids.

Along the way, fixes a few pre-existing bugs: `onChangeOperator` now respects its argument instead of always toggling AND/OR, the search input now correctly appears for select columns with 15+ options, changing a date filter's value no longer throws, and `getInitialValueByType` no longer throws on empty data for single-select columns.

No changes to the public API of `Filter`, `Filter.Item`, or `useFilter`.
