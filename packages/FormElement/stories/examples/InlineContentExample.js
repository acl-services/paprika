/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import { Rule } from "storybook/assets/styles/common.styles";
import Input from "@paprika/input";
import Button from "@paprika/button";
import FormElement, { useFormElement, Label, Instructions, Content, Description, Error } from "../../src";

const AccessibilityExample = () => {
  const [value, setValue] = React.useState("");
  const [errorText, setErrorText] = React.useState("");

  const { inputA11yProps, additionalElementA11yProps, formElementA11yProps } = useFormElement();

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
      <FormElement formElementA11yProps={formElementA11yProps}>
        <Label
          help={
            <span>
              Give me some help. <a href="wegalvanize.com">Learn more</a>.
            </span>
          }
        >
          Form Label
        </Label>
        <Instructions>
          <span>
            Example text for extra panel for questionnaires. Example text for extra panel for questionnaires Example
            text for extra panel for questionnaires. Example text for extra panel for questionnaires
          </span>
        </Instructions>
        <Content isInline>
          <Input
            onChange={handleChange}
            value={value}
            placeholder="Form placeholder"
            hasError={Boolean(errorText.length)}
            {...inputA11yProps}
          />
          <Input
            onChange={handleChange}
            value={value}
            placeholder="Form placeholder"
            hasError={Boolean(errorText.length)}
            {...additionalElementA11yProps}
          />
        </Content>
        <Description>
          <span>This is description text</span>
        </Description>
        <Error>{errorText}</Error>
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
