/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import stylers from "@paprika/stylers";
import FormElement, { useFormElement, Content, Label, Error, Instructions } from "../../src";

export default function NestedExample() {
  const hasRequiredLabel = false;
  const errorText = "";
  const isDisabled = false;
  const isReadOnly = false;

  const { inputA11yProps: wrapperA11yProps, formElementA11yProps: wrapperFormElementA11yProps } = useFormElement();

  const {
    inputA11yProps: firstInputA11yProps,
    nestedFormElementA11yProps: firstNestedFormElementA11yProps,
    formElementA11yProps: firstFormElementA11yProps,
  } = useFormElement({
    wrapperAriaDescribedBy: wrapperA11yProps["aria-describedby"],
  });

  const {
    inputA11yProps: secondInputA11yProps,
    nestedFormElementA11yProps: secondNestedFormElementA11yProps,
    formElementA11yProps: secondFormElementA11yProps,
  } = useFormElement({
    wrapperAriaDescribedBy: wrapperA11yProps["aria-describedby"],
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
                  {...firstNestedFormElementA11yProps}
                />
                <input
                  aria-required={hasRequiredLabel}
                  disabled={isDisabled}
                  readOnly={isReadOnly}
                  {...firstNestedFormElementA11yProps}
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
                  {...secondNestedFormElementA11yProps}
                />
                <input
                  aria-required={hasRequiredLabel}
                  disabled={isDisabled}
                  readOnly={isReadOnly}
                  {...secondNestedFormElementA11yProps}
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
