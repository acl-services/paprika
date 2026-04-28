---
"@paprika/popover": major
---

That caused a full-document DOM scan every time isOpen() was called. isOpen() is invoked from render(), componentDidUpdate(), and several event handlers, so on pages with large DOMs (e.g. data grids with tens of thousands of rows) and multiple Popover instances, this resulted in hundreds of querySelectorAll calls per interaction and multi-second main-thread blocks (observed ~3s INP on a 33k-row page).
