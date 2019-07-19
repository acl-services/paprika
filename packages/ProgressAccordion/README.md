## ProgressAccordion

The `<ProgressAccordion>` component displays questionnaire responses in a collapsible accordion format.

### Installation

`> npm install --save @paprika/progress-accordion`
or
`> yarn add @paprika/progress-accordion`

### Usage

```js
import ProgressAccordion from "@paprika/progress-accordion";

const responses = [
  {
    id: "1",
    heading: "Who is on first?",
    body: <p>Yes.</p>,
  },
];

<ProgressAccordion activeIndex={1} activeStatus="5 days idle" a11yText="Responses">
  <ProgressAccordion.Item id="0" label="Zero">
    <ProgressAccordion.Responses responses={responses} />
  </ProgressAccordion.Item>
  <ProgressAccordion.Item id="1" label="One" />
  <ProgressAccordion.Item id="2" label="Two" />
</ProgressAccordion>;
```

### Props

- a11yText
- activeIndex
- activeStatus

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/ProgressAccordion/src/ProgressAccordion.js)

#### Item

- id
- label
- children

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/ProgressAccordion/src/components/Item/Item.js)

#### Responses

- responses

[More detail about this prop](https://github.com/acl-services/paprika/blob/master/packages/ProgressAccordion/src/components/Responses/Responses.js)
