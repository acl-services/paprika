# Takeover

Takeover component can toggle a full-screen view to help the user focus on complex UI tasks.
More information at the design system site: https://design.wegalvanize.com/p/components/takeover

## Components

You can use any of the following components to compose the Takeover:

```jsx
<Takeover.Header />
<Takeover.Content />
<Takeover.FocusTrap />
```

## Basic example

```jsx
<Takeover isOpen={isOpen} onClose={toggle}>
  <Takeover.Header>
    <Heading level={2}>Header</Heading>
  </Takeover.Header>
  <Takeover.Content>My content</Takeover.Content>
</Takeover>
```

## Props

- `children` (required)
- `isOpen` (required)
- `onClose`
- `onAfterOpen`
- `onAfterClose`
- `isInline`
