import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

import Input from "@paprika/input";
import L10n from "@paprika/l10n";

import FormElement from "../src/FormElement";

function Showcase() {
  const [value, setValue] = React.useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <L10n locale="en">
      <FormElement
        id={text("id", "input-id")}
        isDisabled={boolean("isDisabled", false)}
        isInline={boolean("isInline", false)}
        isLabelVisuallyHidden={boolean("isLabelVisuallyHidden", false)}
        isOptional={boolean("isOptional", false)}
        isReadOnly={boolean("isReadOnly", false)}
        isRequired={boolean("isRequired", false)}
        label={text("label", "Form element")}
        size={select("size", ShirtSizes.DEFAULT, "medium")}
      >
        <Input onChange={handleChange} value={value} placeholder="your_email@email" />
        <FormElement.Error>{text("children", "This field cannot be blank.")}</FormElement.Error>
        <FormElement.Description>
          <span>Description of this field.</span>
        </FormElement.Description>
        <FormElement.Hint>
          Give me some hints. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Hint>
      </FormElement>
    </L10n>
  );
}

export default Showcase;
