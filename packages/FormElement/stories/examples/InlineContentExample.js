/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import { Rule } from "storybook/assets/styles/common.styles";
import Input from "@paprika/input";
import Button from "@paprika/button";
import FormElement, {
  LayoutFlexParent,
  LayoutLeftCol,
  LayoutRightCol,
  Label,
  Instructions,
  Content,
  Description,
  Error,
} from "../../src";

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
      <FormElement>
        <LayoutFlexParent>
          <LayoutLeftCol>
            <Label
              help={
                <span>
                  Give me some help. <a href="wegalvanize.com">Learn more</a>.
                </span>
              }
            >
              Form Label
            </Label>
          </LayoutLeftCol>
          <LayoutRightCol>
            <Instructions>
              <span>
                Example text for extra panel for questionnaires. Example text for extra panel for questionnaires Example
                text for extra panel for questionnaires. Example text for extra panel for questionnaires
              </span>
            </Instructions>
            <Content>
              {a11yProps => (
                <>
                  <Input
                    onChange={handleChange}
                    value={value}
                    placeholder="Form placeholder"
                    hasError={Boolean(errorText.length)}
                    {...a11yProps}
                  />
                  <Input
                    onChange={handleChange}
                    value={value}
                    placeholder="Form placeholder"
                    hasError={Boolean(errorText.length)}
                    aria-describedby={a11yProps["aria-describedby"]} // Only aria-describedby applied to subsequent Content components
                  />
                </>
              )}
            </Content>
            <Description>
              <span>This is description text</span>
            </Description>
            <Error>{errorText}</Error>
          </LayoutRightCol>
        </LayoutFlexParent>
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
