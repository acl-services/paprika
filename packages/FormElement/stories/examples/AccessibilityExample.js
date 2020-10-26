import React from "react";
import Heading from "@paprika/heading";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import Input from "@paprika/input";
import Button from "@paprika/button";
import { FormElementStory } from "../FormElement.stories.styles";
import FormElement, {
  useFormElement,
  Label,
  Instructions,
  Content,
  Description,
  Error,
  Help,
} from "@paprika/form-element";

const ExampleStory = () => {
  const [value, setValue] = React.useState("");
  const [errorText, setErrorText] = React.useState("");

  const { contentA11yProps, internalA11yProps } = useFormElement();

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
      <FormElement internalA11yProps={internalA11yProps}>
        <Label>Form Label</Label>
        <Instructions>
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
            {...contentA11yProps}
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
    </FormElementStory>
  );
};

export default () => <ExampleStory />;
