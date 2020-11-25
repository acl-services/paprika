/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import stylers from "@paprika/stylers";
import Input from "@paprika/input";
import FormElement from "../../src";
import Fieldset from "../../src/components/Fieldset";

export default function NestedExample() {
  const hasRequiredLabel = false;
  const errorText = "";
  const isDisabled = false;
  const isReadOnly = false;

  return (
    <Fieldset>
      <Fieldset.Layout>
        <Fieldset.Layout.LeftCol>
          <Fieldset.Label>Form Legend</Fieldset.Label>
        </Fieldset.Layout.LeftCol>
        <Fieldset.Layout.RightCol>
          <Fieldset.Instructions>Some instructions for field set Element</Fieldset.Instructions>
          <Fieldset.Content>
            <FormElement style={{ marginTop: stylers.spacer(2) }}>
              <FormElement.Label
                help={
                  <>
                    Give me some help. <a href="wegalvanize.com">Learn more</a>.
                  </>
                }
              >
                Sub Label
              </FormElement.Label>
              <FormElement.Content>
                {a11yProps => {
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
              </FormElement.Content>
              <FormElement.Error>{errorText}</FormElement.Error>
            </FormElement>
            <FormElement>
              <FormElement.Label
                help={
                  <>
                    Give me some help. <a href="wegalvanize.com">Learn more</a>.
                  </>
                }
              >
                Sub Label 2
              </FormElement.Label>
              <FormElement.Content>
                {a11yProps => (
                  <FormElement.Layout>
                    <Input
                      aria-required={hasRequiredLabel}
                      disabled={isDisabled}
                      readOnly={isReadOnly}
                      {...a11yProps}
                    />
                    <Input
                      aria-required={hasRequiredLabel}
                      disabled={isDisabled}
                      aria-describedby={a11yProps["aria-describedby"]}
                    />
                  </FormElement.Layout>
                )}
              </FormElement.Content>
              <FormElement.Error>{errorText}</FormElement.Error>
            </FormElement>
          </Fieldset.Content>
          <Fieldset.Error />
        </Fieldset.Layout.RightCol>
      </Fieldset.Layout>
    </Fieldset>
  );
}
