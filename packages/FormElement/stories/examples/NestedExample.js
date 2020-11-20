/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import stylers from "@paprika/stylers";
import styled from "styled-components";
import FormElement, { Content, Label, Error } from "../../src";
import Fieldset from "../../src/components/Fieldset";

const InputSet = styled.div`
  display: flex;
  > div {
    margin-left: 8px;
  }
`;

export default function NestedExample() {
  const hasRequiredLabel = false;
  const errorText = "";
  const isDisabled = false;
  const isReadOnly = false;

  return (
    <Fieldset>
      <Fieldset.Label>Form Legend</Fieldset.Label>
      <Fieldset.Instructions>Some instructions for field set Element</Fieldset.Instructions>
      <Fieldset.Content>
        <FormElement style={{ marginTop: stylers.spacer(2) }} isInline>
          <Label
            help={
              <>
                Give me some help. <a href="wegalvanize.com">Learn more</a>.
              </>
            }
          >
            Sub Label
          </Label>
          <Content>
            {a11yProps => {
              console.log(a11yProps);
              return (
                <>
                  <input
                    aria-required={hasRequiredLabel}
                    disabled={isDisabled}
                    readOnly={isReadOnly}
                    id={a11yProps.id}
                    aria-describedby={a11yProps["aria-describedby"]}
                  />
                  <input
                    aria-required={hasRequiredLabel}
                    disabled={isDisabled}
                    readOnly={isReadOnly}
                    aria-describedby={a11yProps["aria-describedby"]}
                  />
                </>
              );
            }}
          </Content>
          <Error>{errorText}</Error>
        </FormElement>
        <FormElement isInline>
          <Label
            help={
              <>
                Give me some help. <a href="wegalvanize.com">Learn more</a>.
              </>
            }
          >
            Sub Label 2
          </Label>
          <Content>
            {a11yProps => (
              <InputSet>
                <input
                  aria-required={hasRequiredLabel}
                  disabled={isDisabled}
                  readOnly={isReadOnly}
                  id={a11yProps.id}
                  aria-describedby={a11yProps["aria-describedby"]}
                />
                <input
                  aria-required={hasRequiredLabel}
                  disabled={isDisabled}
                  id={a11yProps.id}
                  aria-describedby={a11yProps["aria-describedby"]}
                />
              </InputSet>
            )}
          </Content>
          <Error>{errorText}</Error>
        </FormElement>
      </Fieldset.Content>
      <Fieldset.Error />
    </Fieldset>
  );
}
