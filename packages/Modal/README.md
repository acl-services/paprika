# Modal

https://design.wegalvanize.com/p/components/modal

## Components

You can use any of the following components to compose the Modal:

```jsx
<Modal.Header />
<Modal.Content />
<Modal.Footer />
<Modal.FocusLock />
<Modal.Overlay />
```

## Basic example

```jsx
<Modal isOpen={isOpen} onClose={toggle}>
  <Modal.Header>Header</Modal.Header>
  <Modal.Content>My content</Modal.Content>
  <Modal.Footer>
    <Button kind="primary">Primary</Button>
    <Button>Secondary</Button>
    <Button kind="minor" onClick={toggle}>
      Cancel
    </Button>
  </Modal.Footer>
</Modal>
```

## Props

- `children` (required)
- `isOpen` (required)
- `onClose`
- `onAfterOpen`
- `onAfterClose`
- `size`
