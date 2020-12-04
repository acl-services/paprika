import React from "react";
import { Rule } from "storybook/assets/styles/common.styles";
import Input from "@paprika/input";
import Select from "@paprika/select";
import Textarea from "@paprika/textarea";
import Button from "@paprika/button";
import FormElement, { Fieldset } from "../../src";

const { Layout, Label, Instructions, Content, Description, Error } = FormElement;
const { LeftCol, RightCol } = Layout;

const EverythingExample = () => {
  const [value, setValue] = React.useState();
  const [value2, setValue2] = React.useState();
  const [errorText, setErrorText] = React.useState();

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleChange2(e) {
    setValue2(e.target.value);
  }

  function setError() {
    setErrorText("There was an error.");
  }

  function clearError() {
    setErrorText("");
  }

  const helpContent = (
    <>
      Help yourself{" "}
      <a href="https://youtu.be/D-Zy2P26gVM" target="_blank" rel="noopener noreferrer">
        Learn more
      </a>
      .
    </>
  );
  return (
    <>
      <Fieldset>
        <Layout>
          <LeftCol width={140}>
            <Label help={helpContent} helpA11yText="help me">
              Fieldset Label
            </Label>
          </LeftCol>
          <RightCol>
            <Instructions>These are some fieldset instructions.</Instructions>
            <Content>
              <FormElement isRequired>
                <Layout>
                  <LeftCol width={120}>
                    <Label help={helpContent} helpA11yText="help me">
                      Field 1 Label
                    </Label>
                  </LeftCol>
                  <RightCol>
                    <Instructions>These are some field instructions.</Instructions>
                    <Content>
                      {a11yProps => (
                        <Input onChange={handleChange} value={value} hasError={Boolean(errorText)} {...a11yProps} />
                      )}
                    </Content>
                    {!errorText ? <Description>These is a description of the field.</Description> : null}
                    <Error>{errorText}</Error>
                  </RightCol>
                </Layout>
              </FormElement>
              <br />
              <FormElement isOptional>
                <Layout>
                  <LeftCol width={120}>
                    <Label help={helpContent} helpA11yText="help me">
                      Field 2 Label
                    </Label>
                  </LeftCol>
                  <RightCol>
                    <Instructions>This are some field instructions.</Instructions>
                    <Content>
                      {a11yProps => (
                        <Select
                          placeholder="Select an option"
                          onChange={handleChange2}
                          value={value2}
                          hasError={Boolean(errorText)}
                          {...a11yProps}
                        >
                          <option value="Coke">Pepsi</option>
                          <option value="Pepsi">Coke</option>
                        </Select>
                      )}
                    </Content>
                    {!errorText ? <Description>This is a description of the field.</Description> : null}
                    <Error>{errorText}</Error>
                  </RightCol>
                </Layout>
              </FormElement>
              <br />
              <FormElement isDisabled>
                <Layout>
                  <LeftCol width={120}>
                    <Label help={helpContent} helpA11yText="help me">
                      Field 3 Label
                    </Label>
                  </LeftCol>
                  <RightCol>
                    <Instructions>This are some field instructions.</Instructions>
                    <Content>{a11yProps => <Textarea hasError={Boolean(errorText)} {...a11yProps} />}</Content>
                    {!errorText ? <Description>This is a description of the field.</Description> : null}
                    <Error>{errorText}</Error>
                  </RightCol>
                </Layout>
              </FormElement>
            </Content>
            {!errorText ? <Description>This is a description of the fieldset.</Description> : null}
            <Error>{errorText}</Error>
          </RightCol>
        </Layout>
      </Fieldset>
      <Rule />
      <Button onClick={setError} size={Button.types.size.SMALL}>
        Show Error
      </Button>{" "}
      <Button onClick={clearError} size={Button.types.size.SMALL}>
        Clear Error
      </Button>
    </>
  );
};

export default EverythingExample;
