---
"@paprika/uploader": major
---

- Replaced `defaultIsDisabled` prop by `isDisabled` prop
- Added `zIndex` prop

#### why the change was made:

`defaultIsDisabled` can't be changed once mount.

#### 👷 Moving from 3.x.x to 4.x.x:

If you didn't use `defaultIsDisabled`, you don't need to do anything. Otherwise:

Before:

```jsx
<Uploader defaultIsDisabled={true} />
```

After:

```jsx
<Uploader isDisabled={true} />
```
