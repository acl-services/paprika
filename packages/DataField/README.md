<!-- start: Autogenerated - do not modify -->

# @paprika/data-field

## Description

Field Types package is a set of components that help the Table and DataGrid to enhance the cell property to display different value in a ease manner

## Installation

```
yarn add @paprika/data-field
```

or with npm:

```
npm install @paprika/data-field
```

## Props

### DataField

| Prop     | Type | required | default | Description |
| -------- | ---- | -------- | ------- | ----------- |
| children | node | true     | -       |             |

### DataField.Numeric

| Prop                  | Type                                                                                     | required | default                     | Description                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------- | -------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| value                 | [string,number]                                                                          | true     | -                           | The value to be localize                                                                                                                      |
| align                 | [ DataField.types.align.LEFT, DataField.types.align.RIGHT, DataField.types.align.CENTER] | false    | DataField.types.align.RIGHT | Text alignment for the number default is right                                                                                                |
| intl                  | object                                                                                   | false    | {}                          | The window.Intl.numberFormat option object https://mzl.la/3iW0ioQ                                                                             |
| currency              | string                                                                                   | false    | null                        | When passing a currency string as 'EUR' or 'JPY' will display the correct currency symbol, is a short version instead of using the intl prop. |
| color                 | string                                                                                   | false    | null                        | Add a color to the number, accept any kind of html color #F60, rgba(100,100,100, 0.5), etc.                                                   |
| hasOnlyRadixSeparator | bool                                                                                     | false    | true                        | Controls if the number should be display with full delimiter or only the decimal separators                                                   |

<!-- end: Autogenerated - do not modify -->
<!-- content -->
<!-- content -->

#DataField

DataField component helps during your [Table](https://github.com/acl-services/paprika/tree/master/packages/Table) or [DataGrid](https://github.com/acl-services/paprika/tree/master/packages/DataGrid) implementation providing you with small components that encapsulate specific stylings for specific types that adapts to our Design System.

## Uses

Once the component is imported:

```js
import DataField from "@paprika/data-field";
```

You can make use of different Fields in the following way:

```js
/**
 *  Using the Numeric field. The following applies either for the <Table /> or <DataGrid /> component
 */

import DataField from "@paprika/data-field";

function App() {
  return <DataField.Numeric align={DataField.types.align.LEFT} currency="USD" number={1240} />;
}
```

<!-- eoContent -->

## Links

- [Storybook Showcase](https://paprika.highbond.com/?path=/story/table-datafield--showcase)
- [GitHub source code](https://github.com/acl-services/paprika/tree/master/packages/DataField/src)
- [Create GitHub issue](https://github.com/acl-services/paprika/issues/new?label=[]&title=@paprika/data-field%20[help]:%20your%20short%20description&body=%0A%23%20Help%20wanted%0A%0A%23%23%20Please%20write%20your%20question.%0A*A%20clear%20and%20concise%20description%20of%20what%20the%20question%20is*%0A%0A%23%23%20Additional%20context%0A*Add%20any%20other%20context%20or%20screenshots%20about%20your%20question%20here.*%0A)
- [CHANGELOG](https://github.com/acl-services/paprika/tree/master/packages/DataField/CHANGELOG.md)
