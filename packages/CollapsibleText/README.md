## CollapsibleText

An uncontrolled component that truncates some given content at a given length to be revealed by clicking a "Show more" link.

### Installation

`> npm install --save @paprika/collapsible-text`
or
`> yarn add @paprika/collapsible-text`

### Usage

```js
import CollapsibleText from "@paprika/collapsible-text";

const yourComponent = () => {
  return (
    <CollapsibleText collapsedLength={64} a11yText="cardigans">
      <p>
        Lorem hipsum cardigan. Plaid brunch street cred cloud bread art party pickled, VHS fingerstache la croix paleo
        single-origin coffee. Pinterest normcore wayfarers gentrify marfa helvetica street art vegan. Wayfarers portland
        chicharrones craft beer sartorial. Cray raw denim listicle mixtape, pug farm-to-table tofu ennui whatever
        williamsburg. Chia offal slow-carb, kickstarter gastropub letterpress echo park mustache irony 90s.
      </p>
    </CollapsibleText>
  );
};

export default yourComponent;
```

### Props

- a11yText
- children (required)
- collapsedLength

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/CollapsibleText/src/CollapsibleText.js)
