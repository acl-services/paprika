---
"@paprika/list-box": major
---

## 💥 BREAKING CHANGE

Refactored keyboard events for ↑ and ↓ for the list component
Refactor for the ↑ and ↓ keyboard navigation (`ListBox`), most consumer shouldn't be affected by it.

## why the change was made:

We change the way the listbox navigates the options in the Component more details can be found on this PR: [#973](https://github.com/acl-services/paprika/pull/973)

## 👷 Moving from 2.1.0 to 3.0.0:

No action required. There is not really an action from the consumer, this is marked as a breaking change because might break side code if you were in somehow depending on the previous implementation. But most likely you won't need to take any further actions
