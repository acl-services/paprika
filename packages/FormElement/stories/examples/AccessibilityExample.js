import React from "react";
import Heading from "@paprika/heading";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import Input from "@paprika/input";
import Button from "@paprika/button";
// import FormElement from "../../src";
import { FormElementStory } from "../FormElement.stories.styles";
import FormElement, { useFormElement, Label, Instructions, Content, Description, ErrorMessage, Help } from "../../src";

const ExampleStory = () => {
  const [value, setValue] = React.useState("");
  const [errorText, setErrorText] = React.useState("");

  const {
    inputA11yProps,
    labelA11yProps,
    instructionsA11yProps,
    descriptionA11yProps,
    errorA11yProps,
  } = useFormElement();

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
    <FormElementStory>
      <Heading level={1} displayLevel={2} isLight>
        Accessibility Example
      </Heading>
      <Rule />
      <Tagline>Form Element with instructions component.</Tagline>
      <Rule />
      <FormElement label="Form Label">
        <Label {...labelA11yProps}>Form Label</Label>
        <Instructions {...instructionsA11yProps}>
          <span>
            Example text for extra panel for questionnaires. Example text for extra panel for questionnaires Example
            text for extra panel for questionnaires. Example text for extra panel for questionnaires
          </span>
        </Instructions>
        <Content>
          <Input
            onChange={handleChange}
            value={value}
            placeholder="Form placeholder"
            hasError={Boolean(errorText.length)}
            {...inputA11yProps}
          />
        </Content>
        <Description {...descriptionA11yProps}>
          <span>This is description text</span>
        </Description>
        <ErrorMessage {...errorA11yProps}>{errorText}</ErrorMessage>
        <Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </Help>
      </FormElement>
      <Rule />
      <Button onClick={setError} style={{ marginRight: "10px" }}>
        Show an Error
      </Button>
      <Button onClick={clearError}>Clear Error</Button>
    </FormElementStory>
  );
};

export default () => <ExampleStory />;
