import React from "react";
import Heading from "@paprika/heading";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import Input from "@paprika/input";
import Button from "@paprika/button";
import FormElement from "../../src";
import { FormElementStory } from "../FormElement.stories.styles";

const ExampleStory = () => {
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
    <FormElementStory>
      <Heading level={1} displayLevel={2} isLight>
        Accessibility Example
      </Heading>
      <Rule />
      <Tagline>Form Element with instructions component.</Tagline>
      <Rule />
      <FormElement label="Form Label">
        <FormElement.Instructions>
          <span>
            Example text for extra panel for questionnaires. Example text for extra panel for questionnaires Example
            text for extra panel for questionnaires. Example text for extra panel for questionnaires
          </span>
        </FormElement.Instructions>
        <Input onChange={handleChange} value={value} placeholder="Form placeholder" />
        <FormElement.Description>
          <span>This is description text</span>
        </FormElement.Description>
        <FormElement.Error>{errorText}</FormElement.Error>
        <FormElement.Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Help>
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
