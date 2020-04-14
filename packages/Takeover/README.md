# Takeover

Takeover component can toggle a full-screen view to help the user focus on complex UI tasks.
More information at the design system site: https://design.wegalvanize.com/p/components/takeover

## Components

You can use any of the following components to compose the Takeover:

```jsx
<Takeover.Header />
<Takeover.Content />
<Takeover.FocusLock />
```

## Basic example

```jsx
<Takeover isOpen={isOpen} onClose={toggle}>
  <Takeover.Header>Header</Takeover.Header>
  <Takeover.Content>My content</Takeover.Content>
</Takeover>
```

## Props

- `children` (required)
- `isOpen` (required)
- `onClose`
- `onAfterOpen`
- `onAfterClose`

## Warnings

If the content you are putting into this component will try and control focus (like CKEditor), read this: https://github.com/acl-services/paprika/issues/453
