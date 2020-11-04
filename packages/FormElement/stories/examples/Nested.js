import React from "react";
import styled from "styled-components";
import stylers from "@paprika/stylers";
import Input from "@paprika/input";
import FormElement from "../../src/FormElement";

const InputSet = styled.div`
  display: flex;
  > div {
    margin-left: 8px;
  }
`;

export default function NestedExample() {
  return (
    <FormElement hasFieldSet label="Form Legend">
      <FormElement.Content>
        {({ ariaDescribedBy: ariaDescribedByOuter }) => (
          <>
            <FormElement style={{ marginTop: stylers.spacer(2) }} isInline label="Subset 1">
              <FormElement.Help>
                Give me some help.{" "}
                <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noreferrer">
                  Learn more
                </a>
                .
              </FormElement.Help>
              <FormElement.Content>
                {({ idForLabel, ariaDescribedBy }) => (
                  <InputSet>
                    <Input aria-describedby={ariaDescribedBy + ariaDescribedByOuter} id={idForLabel} />
                    <Input aria-describedby={ariaDescribedBy + ariaDescribedByOuter} />
                  </InputSet>
                )}
              </FormElement.Content>
            </FormElement>
            <FormElement isInline label="Subset 2">
              <FormElement.Help>
                Give me some help.{" "}
                <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noreferrer">
                  Learn more
                </a>
                .
              </FormElement.Help>
              <FormElement.Content>
                {({ idForLabel, ariaDescribedBy }) => (
                  <InputSet>
                    <Input aria-describedby={ariaDescribedBy + ariaDescribedByOuter} id={idForLabel} />{" "}
                    <Input aria-describedby={ariaDescribedBy + ariaDescribedByOuter} />
                  </InputSet>
                )}
              </FormElement.Content>
            </FormElement>
          </>
        )}
      </FormElement.Content>
    </FormElement>
  );
}
