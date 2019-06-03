_The SidePanel is a Controlled Component_

## Props:

```js
/**
 children: PropTypes.node.isRequired,
 slideDirection: PropTypes.oneOf(["left", "right"]),
 width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
 onEscKey: PropTypes.func,
 onOpen: PropTypes.func, // call onAnimationEnd
 onClose: PropTypes.func, // call onAnimationEnd
 isOpen: PropTypes.bool.isRequired,
 zIndex: PropTypes.number,
*/
```

The sidepanel has the following component you can use to compose it:

```js

<SidePanel.Content />
<SidePanel.Footer />
<SidePanel.Header />
<SidePanel.Overlay />
<SidePanel.Trigger>[node]</SidePanel.Trigger>

```

By default the SidePanel render whatever you pass as children, but will filter
`{ Header, Footer, Overlay and Trigger }` to properly render those components accordingly
their optimal position, as example the Trigger will be render as inline since is expected that
99% of the cases will be a Button, while the Overlay and the SidePanel in general will be
render in a `React.Portal`. Header and Footer will be at the top and bottom respectively.

---

## Some ex.

```js
<SidePanel isOpen={isOpen} onEscKey={handleEvent}>
  <SidePanel.Header onCloseClick={handleEvent}>Hello!</SidePanel.Header>
  [...some_content]
  <SidePanel.Footer onClickAccept={handleAccept}>
</SidePanel>
```

### With header, content and Overlay

```js
<SidePanel isOpen={isOpen} onEscKey={handleEvent}>
  <SidePanel.Header onCloseClick={handleEvent}>Hello!</SidePanel.Header>
  <SidePanel.Overlay onClick={handleEvent} />
  <SidePanel.Content>[...your_stuff]</SidePanel.Content>
</SidePanel>
```

### With header and sticky footer

```js
<SidePanel isOpen={isOpen} onEscKey={handleEvent}>
  <SidePanel.Header onCloseClick={handleEvent}>Hello!</SidePanel.Header>
  <SidePanel.Overlay onClick={handleEvent} />
  [...your_stuff]
  <SidePanel.Footer isSticky onClickAccept={handleAccept} />
</SidePanel>
```

## Accessibility

- Focus to the first focusable element accordingly to [wai](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal)
  > - In all circumstances, focus moves to an element contained in the dialog.
  > - Unless a condition where doing otherwise is advisable, focus is initially set on the first focusable element.
- The focus is trap under the sidepanel until is dismissed, I'm using [focus-trap-react](https://github.com/davidtheclark/focus-trap-react)
- wai `role=modal`
