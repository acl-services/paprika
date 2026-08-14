---
"@paprika/inline-editors": patch
---

`Editor` no longer warns about the `succeed` status it renders itself: its propTypes listed `Editor.types.status.SUCCESS`, which does not exist.
