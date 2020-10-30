/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import stylers from "@paprika/stylers";
import FormElement, { useFormElement, Content, Label, Error, Instructions } from "../../src";

export default function NestedExample() {
  const hasRequiredLabel = false;
  const errorText = "";
  const isDisabled = false;
  const isReadOnly = false;

  const { ariaA11yProps: wrapperA11yProps, formElementA11yProps: wrapperFormElementA11yProps } = useFormElement();

  const {
    inputA11yProps: firstInputA11yProps,
    ariaA11yProps: firstAriaA11yProps,
    formElementA11yProps: firstFormElementA11yProps,
  } = useFormElement({
    wrapperA11yProps,
  });

  const {
    inputA11yProps: secondInputA11yProps,
    ariaA11yProps: secondAriaElementA11yProps,
    formElementA11yProps: secondFormElementA11yProps,
  } = useFormElement({
    wrapperA11yProps,
  });

  return (
    <FormElement hasFieldSet formElementA11yProps={wrapperFormElementA11yProps}>
      <Label>Form Legend</Label>
      <Instructions>Some instructions for wrapper form Element</Instructions>
      <Content>
        <>
          <FormElement
            style={{ marginTop: stylers.spacer(2) }}
            isInline
            formElementA11yProps={firstFormElementA11yProps}
          >
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
              <>
                <input
                  aria-required={hasRequiredLabel}
                  disabled={isDisabled}
                  readOnly={isReadOnly}
                  {...firstInputA11yProps}
                />
                <input
                  aria-required={hasRequiredLabel}
                  disabled={isDisabled}
                  readOnly={isReadOnly}
                  {...firstAriaA11yProps}
                />
              </>
            </Content>
            <Error>{errorText}</Error>
          </FormElement>
          <FormElement isInline formElementA11yProps={secondFormElementA11yProps}>
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
              <>
                <input
                  aria-required={hasRequiredLabel}
                  disabled={isDisabled}
                  readOnly={isReadOnly}
                  {...secondInputA11yProps}
                />
                <input
                  aria-required={hasRequiredLabel}
                  disabled={isDisabled}
                  readOnly={isReadOnly}
                  {...secondAriaElementA11yProps}
                />
              </>
            </Content>
            <Error>{errorText}</Error>
          </FormElement>
        </>
      </Content>
    </FormElement>
  );
}
