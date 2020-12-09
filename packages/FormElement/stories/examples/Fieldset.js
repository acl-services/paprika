import React from "react";
import { Rule, Gap } from "storybook/assets/styles/common.styles";
import StoryHeading from "storybook/components/StoryHeading";
import L10n from "@paprika/l10n";
import Input from "@paprika/input";
import Select from "@paprika/select";
import Button from "@paprika/button";
import FormElement, { Fieldset } from "../../src";

const { Label, Instructions, Description, Content, Error } = FormElement;

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
            <div>&nbsp;</div>
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
        {errorText ? (
          <Error>{errorText}</Error>
        ) : (
          <Description>
            <strong>Note:</strong> the <code>&lt;Labels&gt;</code> are hidden in this layout with{" "}
            <code>isVisuallyHidden</code>, but they are still present for screen readers.
          </Description>
        )}
      </Fieldset>
      <Rule />
      <Button onClick={() => setErrorText("There was an error.")} size={Button.types.size.SMALL}>
        Show Error
      </Button>{" "}
      <Button onClick={() => setErrorText("")} size={Button.types.size.SMALL}>
        Clear Error
      </Button>
      <Gap.Small />
      <StoryHeading level={2}>Explanation</StoryHeading>
      <p>
        When muliple form inputs need to be grouped together with a common label, they need to be wrapped in a{" "}
        <code>&lt;fieldset&gt;</code> element. Each field should maintain its own <code>&lt;label&gt;</code> element, so
        the common label should instead be a <code>&lt;legend&gt;</code> element.{" "}
      </p>
      <p>
        For this purpose, the <code>&lt;FormElement&gt;</code> has a <code>hasFieldSet</code> prop, but for clearer JSX
        markup, you can use the <code>&lt;Fieldset&gt;</code> component, provided as a named import from the same{" "}
        <code>@paprika/form-element</code> package.
      </p>
      <p>
        Additionally, since the <code>&lt;Checkbox&gt;</code> and <code>&lt;Radio&gt;</code> components already render
        with a <code>&lt;label&gt;</code> element, he checkbox or radio <em>group</em> also needs to be wrapped in a{" "}
        <code>&lt;fieldset&gt;</code> with a <code>&lt;legend&gt;</code>, so the <code>&lt;Fieldset&gt;</code> component
        should also be used in those cases.
      </p>
      <p>
        The <code>&lt;Fieldset&gt;</code> component has all the same subcomponents as the{" "}
        <code>&lt;FormElement&gt;</code>, since it actually <em>is</em> just a{" "}
        <code>&lt;FormElement hasFieldSet&gt;</code>.
      </p>
    </L10n>
  );
}
