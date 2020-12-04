import React from "react";
import { Rule } from "storybook/assets/styles/common.styles";
import L10n from "@paprika/l10n";
import Input from "@paprika/input";
import Select from "@paprika/select";
import Button from "@paprika/button";
import FormElement, { Fieldset } from "../../src";

const { Label, Instructions, Content, Error } = FormElement;

export default function EverythingExample() {
  const [value, setValue] = React.useState();
  const [value2, setValue2] = React.useState();
  const [errorText, setErrorText] = React.useState();

  return (
    <L10n>
      <Fieldset>
        <Label>Fieldset label</Label>
        <Instructions>These are some fieldset instructions.</Instructions>
        <Content>
          <div
            css={`
              display: flex;
              width: 100%;
            `}
          >
            <div
              css={`
                width: 20%;
              `}
            >
              <FormElement>
                <Label isVisuallyHidden>Salutation</Label>
                <Content>
                  {a11yProps => (
                    <Select
                      placeholder="Select..."
                      onChange={e => setValue(e.target.value)}
                      value={value}
                      hasError={Boolean(errorText)}
                      {...a11yProps}
                    >
                      <option value="King">King</option>
                      <option value="Queen">Queen</option>
                    </Select>
                  )}
                </Content>
              </FormElement>
            </div>
            <div
              css={`
                flex-grow: 1;
              `}
            >
              <FormElement>
                <Label isVisuallyHidden>Name</Label>
                <Content>
                  {a11yProps => (
                    <Input
                      onChange={e => setValue2(e.target.value)}
                      value={value2}
                      hasError={Boolean(errorText)}
                      {...a11yProps}
                    />
                  )}
                </Content>
              </FormElement>
            </div>
          </div>
        </Content>
        <Error>{errorText}</Error>
      </Fieldset>
      <Rule />
      <Button onClick={() => setErrorText("There was an error.")} size={Button.types.size.SMALL}>
        Show Error
      </Button>{" "}
      <Button onClick={() => setErrorText("")} size={Button.types.size.SMALL}>
        Clear Error
      </Button>
    </L10n>
  );
}
