# SidePanel

## Props:

```js
const propTypes = {
  /** The content for the SidePanel. */
  children: PropTypes.node.isRequired,

  /** The width of the open panel. */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Callback triggered when the side panel needs to be close */
  onClose: PropTypes.func,

  /** Callback once the sidepanel has been opened event */
  onAfterOpen: PropTypes.func,

  /** Callback once the sidepanel has been closed event */
  onAfterClose: PropTypes.func,

  /** Control the visibility of the side panel. This prop makes the side panel */
  isOpen: PropTypes.bool.isRequired,

  /** Control the z position of the sidepanel */
  zIndex: PropTypes.number,

  /** Control y offset of the sidepanel */
  offsetY: PropTypes.number,

  /** Modify the look of the SidePanel */
  kind: PropTypes.oneOf(["default", "child"]),

  /** Disable scroll overflow on document.body when SidePanel is open. */
  disableBodyOverflow: PropTypes.bool,
};
```

## Components

The sidepanel has the following component you can use to compose it:

```js
<SidePanel.Header />
<SidePanel.Footer />
<SidePanel.Overlay />
<SidePanel.FocusTrap />
<SidePanel.Trigger />
```

Ex.

```js
<SidePanel isOpen={isOpen} onEscKey={handleEvent}>
  <SidePanel.Header onCloseClick={handleEvent} />
  <SidePanel.Overlay onClick={handleEvent} />
  [...your_content...]
</SidePanel>
```
