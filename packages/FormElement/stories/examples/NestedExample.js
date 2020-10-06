import React from "react";
import { Tagline } from "storybook/assets/styles/common.styles";
import FormElement from "../../src/FormElement";

export default function NestedExample() {
  const hasRequiredLabel = false;
  const errorText = "";
  const isDisabled = false;
  const isReadOnly = false;

  return (
    <>
      <Tagline>Form Element nested Form Elements.</Tagline>
      <br />
      <FormElement hasFieldSet label="Form Legend">
        <FormElement.Content>
          {({ ariaDescribedBy: ariaDescribedByOuter }) => (
            <>
              <FormElement isInline label="Sub Label">
                <FormElement.Content>
                  {({ idForLabel, ariaDescribedBy }) => (
                    <>
                      <input
                        aria-required={hasRequiredLabel}
                        aria-describedby={ariaDescribedBy + ariaDescribedByOuter}
                        aria-invalid={Boolean(errorText.length)}
                        disabled={isDisabled}
                        id={idForLabel}
                        readOnly={isReadOnly}
                      />
                      <input
                        aria-required={hasRequiredLabel}
                        aria-describedby={ariaDescribedBy + ariaDescribedByOuter}
                        aria-invalid={Boolean(errorText.length)}
                        disabled={isDisabled}
                        readOnly={isReadOnly}
                      />
                    </>
                  )}
                </FormElement.Content>
                <FormElement.Error>{errorText}</FormElement.Error>
                <FormElement.Help>
                  Give me some help. <a href="wegalvanize.com">Learn more</a>.
                </FormElement.Help>
              </FormElement>
              <FormElement isInline label="Sub Label 2">
                <FormElement.Content>
                  {({ idForLabel, ariaDescribedBy }) => (
                    <>
                      <input
                        aria-required={hasRequiredLabel}
                        aria-describedby={ariaDescribedBy + ariaDescribedByOuter}
                        aria-invalid={Boolean(errorText.length)}
                        disabled={isDisabled}
                        id={idForLabel}
                        readOnly={isReadOnly}
                      />
                      <input
                        aria-required={hasRequiredLabel}
                        aria-describedby={ariaDescribedBy + ariaDescribedByOuter}
                        aria-invalid={Boolean(errorText.length)}
                        disabled={isDisabled}
                        readOnly={isReadOnly}
                      />
                    </>
                  )}
                </FormElement.Content>
                <FormElement.Error>{errorText}</FormElement.Error>
                <FormElement.Help>
                  Give me some help. <a href="wegalvanize.com">Learn more</a>.
                </FormElement.Help>
              </FormElement>
            </>
          )}
        </FormElement.Content>
        <FormElement.Error>{errorText}</FormElement.Error>
        <FormElement.Description>
          <span>Description of this field.</span>
        </FormElement.Description>
        <FormElement.Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Help>
      </FormElement>
    </>
  );
}
