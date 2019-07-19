## ProgressAccordion

The `<ProgressAccordion>` component displays questionnaire responses in a collapsible accordion format.

### Installation

`> npm install --save @paprika/progress-accordion`
or
`> yarn add @paprika/progress-accordion`

### Usage

```js
import ProgressAccordion from "@paprika/progress-accordion";

<ProgressAccordion activeIndex={1} activeStatus="5 days idle" a11yText="Responses">
  <ProgressAccordion.Item id="0" label="Zero">
    <ProgressAccordion.Responses>
      <ProgressAccordion.Responses.Item heading="Who is on first?">
        <p>Yes.</p>
      </ProgressAccordion.Responses.Item>
      <ProgressAccordion.Responses.Item heading="What?">
        <p>Is on second.</p>
      </ProgressAccordion.Responses.Item>
    </ProgressAccordion.Responses>
  </ProgressAccordion.Item>
  <ProgressAccordion.Item id="1" label="One" />
  <ProgressAccordion.Item id="2" label="Two" />
</ProgressAccordion>;
```

### Props

- a11yText
- activeIndex
- activeStatus
- children

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/ProgressAccordion/src/ProgressAccordion.js)

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
