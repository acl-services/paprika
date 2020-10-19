import React from "react";
import { Rule } from "storybook/assets/styles/common.styles";
import Input from "@paprika/input";
import Button from "@paprika/button";
import FormElement from "../../src";

const AccessibilityExample = () => {
  const [value, setValue] = React.useState("");
  const [errorText, setErrorText] = React.useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function setError() {
    setErrorText("There was an error");
  }

  function clearError() {
    setErrorText("");
  }

  return (
    <>
      <FormElement label="Form Label">
        <FormElement.Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Help>
        <FormElement.Instructions>
          <span>
            Example text for extra panel for questionnaires. Example text for extra panel for questionnaires Example
            text for extra panel for questionnaires. Example text for extra panel for questionnaires
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
              hasError={Boolean(errorText.length)}
            />
          )}
        </FormElement.Content>
        <FormElement.Description>
          <span>This is description text</span>
        </FormElement.Description>
        <FormElement.Error>{errorText}</FormElement.Error>
      </FormElement>
      <Rule />
      <Button onClick={setError} style={{ marginRight: "10px" }}>
        Show an Error
      </Button>
      <Button onClick={clearError}>Clear Error</Button>
    </>
  );
};

export default () => <AccessibilityExample />;
