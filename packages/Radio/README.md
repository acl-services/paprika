## Radio

The `<Radio>` component displays a radio input and label text beside it. When clicked it selects the input and deselects any other radio input in its group.

### Installation

`> npm install --save @paprika/radio`
or
`> yarn add @paprika/radio`

### Usage

```js
import Radio from "@paprika/radio";

<Radio.Group
  onChange={activeIndex => {
    // get values from the data using index
  }}
>
  <Radio>Radio 1</Radio>
  <Radio>Radio 2</Radio>
  <Radio>Radio 3</Radio>
  <Radio>Radio 4</Radio>
</Radio.Group>;
```

### Props

#### Radio.Group

-a11yText
-canDeselect
-children
-isDisabled
-onChange
-size
-tabIndex

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Radio/src/components/Group/Group.js)

#### Radio

-a11yText
-ariaDescribedBy
-canDeselect
-children
-isChecked
-isDisabled
-defaultIsChecked

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Radio/src/Radio.js)
