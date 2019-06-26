# SidePanel

## Components

You can use any of the following components to compose the SidePanel:

```js
<SidePanel.Header />
<SidePanel.Footer />
<SidePanel.Overlay />
<SidePanel.FocusTrap />
<SidePanel.Trigger />
```

### Basic examples.

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
