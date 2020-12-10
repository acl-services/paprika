import React from "react";
import { Rule } from "storybook/assets/styles/common.styles";
import L10n from "@paprika/l10n";
import Input from "@paprika/input";
import Button from "@paprika/button";
import FormElement from "../../src";

const { Layout, Label, Instructions, Content, Description, Error } = FormElement;
const { LeftCol, RightCol } = Layout;

export default function InlineContent() {
  const [value, setValue] = React.useState();
  const [errorText, setErrorText] = React.useState();

  return (
    <L10n>
      <FormElement>
        <Layout>
          <LeftCol width={180}>
            <Label>Form Label</Label>
          </LeftCol>
          <RightCol>
            <Instructions>These are some field instructions.</Instructions>
            <Content>
              {a11yProps => (
                <Input
                  onChange={e => setValue(e.target.value)}
                  value={value}
                  hasError={Boolean(errorText)}
                  {...a11yProps}
                />
              )}
            </Content>
            {errorText ? <Error>{errorText}</Error> : <Description>This is a description of the field.</Description>}
          </RightCol>
        </Layout>
      </FormElement>
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
