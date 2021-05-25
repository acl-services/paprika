---
"@paprika/side-navigation": major
---

Breaking change. Update to use @paprika/panel, not the deprecated @paprika/sidepanel.
If passing in `offsetY={40}`, change to to pass in `offset={{ top: 40 }}`.
