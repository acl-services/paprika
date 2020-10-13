import React from "react";
import * as constants from "@paprika/constants/lib/Constants";
import Input from "@paprika/input";
import FormElement from "../../src/FormElement";

export default function HTMLExample() {
  const hasRequiredLabel = false;
  const errorText = "";
  const isDisabled = false;
  const isReadOnly = false;
  const size = constants.size.MEDIUM;
  const [value, setValue] = React.useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <FormElement
      hasRequiredLabel={hasRequiredLabel}
      label={<span dangerouslySetInnerHTML={{ __html: "<strong><i>Form Label</i></strong>" }} />}
    >
      <FormElement.Instructions>
        <span>
          Example text for extra panel for questionnaires. Example text for extra panel for questionnaires Example text
          for extra panel for questionnaires. Example text for extra panel for questionnaires
        </span>
      </FormElement.Instructions>
      <FormElement.Content>
        {({ idForLabel, ariaDescribedBy }) => (
          <Input
            id={idForLabel}
            onChange={handleChange}
            value={value}
            placeholder="Form placeholder"
            aria-describedby={ariaDescribedBy}
            aria-required={hasRequiredLabel}
            hasError={Boolean(errorText.length)}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
            size={size}
          />
        )}
      </FormElement.Content>
    </FormElement>
  );
}
