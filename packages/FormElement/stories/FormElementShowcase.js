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
        hasOptionalLabel={boolean("hasOptionalLabel", false)}
        hasRequiredLabel={boolean("hasRequiredLabel", false)}
        id={text("id", "input-id")}
        isDisabled={boolean("isDisabled", false)}
        isInline={boolean("isInline", false)}
        isLabelVisuallyHidden={boolean("isLabelVisuallyHidden", false)}
        isReadOnly={boolean("isReadOnly", false)}
        label={text("label", "Form element")}
        size={select("size", ShirtSizes.DEFAULT, "medium")}
      >
        <Input onChange={handleChange} value={value} placeholder="Form placeholder" />
        <FormElement.Error>{text("children", "This field cannot be blank.")}</FormElement.Error>
        <FormElement.Description>
          <span>Description of this field.</span>
        </FormElement.Description>
        <FormElement.Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Help>
      </FormElement>
    </L10n>
  );
}

export default Showcase;
