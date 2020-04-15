# SidePanel

## Components

You can use any of the following components to compose the SidePanel:

```js
<SidePanel.Header />
<SidePanel.Footer />
<SidePanel.Overlay />
<SidePanel.FocusLock />
<SidePanel.Trigger />
```

## Basic examples.

```js
<SidePanel isOpen={isOpen} onClose={() => {}}>
  [...your_content...]
</SidePanel>
```

```js
<SidePanel isOpen={isOpen} onClose={() => {}}>
  <SidePanel.Header>Your header</SidePanel.Header>
  [...your_content...]
  <SidePanel.Overlay />
</SidePanel>
```

## Warnings

If the content you are putting into this component will try and control focus (like CKEditor), read this: https://github.com/acl-services/paprika/issues/453
