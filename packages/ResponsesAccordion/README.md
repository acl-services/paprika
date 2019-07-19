## ResponsesAccordion

The `<ResponsesAccordion>` component displays questionnaire responses in a collapsible accordion format.

### Installation

`> npm install --save @paprika/responses-accordion`
or
`> yarn add @paprika/responses-accordion`

### Usage

```js
import ResponsesAccordion from "@paprika/responses-accordion";

const responses = [
  {
    id: "1",
    heading: "Who is on first?",
    body: <p>Yes.</p>,
  },
];

<ResponsesAccordion activeIndex={1} activeStatus="5 days idle" a11yText="Responses">
  <ResponsesAccordion.Item id="0" label="Zero">
    <ResponsesAccordion.Responses responses={responses} />
  </ResponsesAccordion.Item>
  <ResponsesAccordion.Item id="1" label="One" />
  <ResponsesAccordion.Item id="2" label="Two" />
</ResponsesAccordion>;
```

### Props

- a11yText
- activeIndex
- activeStatus

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/ResponsesAccordion/src/ResponsesAccordion.js)

#### Item

- id
- label
- children

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/ResponsesAccordion/src/components/Item/Item.js)

#### Responses

- responses

[More detail about this prop](https://github.com/acl-services/paprika/blob/master/packages/ResponsesAccordion/src/components/Responses/Responses.js)
