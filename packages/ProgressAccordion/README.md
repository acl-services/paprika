<!-- start: Autogenerated - do not modify -->

# @paprika/progress-accordion

## Description

The ProgressAccordion component is a progress bar in a collapsible accordion format.

## Installation

```
yarn add @paprika/progress-accordion
```

or with npm:

```
npm install @paprika/progress-accordion
```

## Props

### ProgressAccordion

| Prop         | Type   | required | default | Description                                                        |
| ------------ | ------ | -------- | ------- | ------------------------------------------------------------------ |
| a11yText     | string | false    | null    | A11y text for assistive technologies to descibe the semantic list. |
| activeIndex  | number | false    | 0       |                                                                    |
| activeStatus | node   | false    | null    | Optional status text to be displayed with the active list item.    |
| children     | node   | false    | null    | List items (must be of type <ProgressAccordion.Item>.              |

<!-- end: Autogenerated - do not modify -->
<!-- content -->

### Usage

```js
import ProgressAccordion from "@paprika/progress-accordion";

<ProgressAccordion activeIndex={1} activeStatus="5 days idle" a11yText="Responses">
  <ProgressAccordion.Item label="Zero">
    <ProgressAccordion.Responses>
      <ProgressAccordion.Responses.Item heading="Who is on first?">
        <p>Yes.</p>
      </ProgressAccordion.Responses.Item>
      <ProgressAccordion.Responses.Item heading="What?">
        <p>Is on second.</p>
      </ProgressAccordion.Responses.Item>
    </ProgressAccordion.Responses>
  </ProgressAccordion.Item>
  <ProgressAccordion.Item label="One" />
  <ProgressAccordion.Item label="Two" />
</ProgressAccordion>;
```

#### Item

- label
- children

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/ProgressAccordion/src/components/Item/Item.js)

#### Responses

- children

[More detail about this prop](https://github.com/acl-services/paprika/blob/master/packages/ProgressAccordion/src/components/Responses/Responses.js)

#### Responses.Item

- heading
- children

[More detail about this prop](https://github.com/acl-services/paprika/blob/master/packages/ProgressAccordion/src/components/Responses/Item.js)

<!-- eoContent -->

## Links

- [Storybook Showcase](https://paprika.highbond.com/?path=/story/navigation-progressaccordion--showcase)
- [GitHub source code](https://github.com/acl-services/paprika/tree/master/packages/ProgressAccordion/src)
- [Create GitHub issue](https://github.com/acl-services/paprika/issues/new?label=[]&title=@paprika/progress-accordion%20[help]:%20your%20short%20description&body=%0A%23%20Help%20wanted%0A%0A%23%23%20Please%20write%20your%20question.%0A*A%20clear%20and%20concise%20description%20of%20what%20the%20question%20is*%0A%0A%23%23%20Additional%20context%0A*Add%20any%20other%20context%20or%20screenshots%20about%20your%20question%20here.*%0A)
- [CHANGELOG](https://github.com/acl-services/paprika/tree/master/packages/ProgressAccordion/CHANGELOG.md)
