import React from "react";
import { Gap, CodeHeading } from "storybook/assets/styles/common.styles";
import Input from "@paprika/input";
import CopyInput from "../../src/CopyInput";

const CopyInputVariations = () => {
  const customInputValue = "Custom input component";

  return (
    <>
      <CopyInput value="read only" />
      <Gap />
      <CodeHeading>{"isReadOnly={false}"}</CodeHeading>
      <CopyInput isReadOnly={false} value="edit input" />
      <Gap />
      <CodeHeading>{"hasValueContainer hasInputContainer={false}"}</CodeHeading>
      <CopyInput hasValueContainer hasInputContainer={false} value="hasInputContainer and hasValueContainer prop used">
        <CopyInput.Button kind="minor" />
      </CopyInput>
      <Gap />
      <CodeHeading>{"<CopyInput.Input /> a and <CopyInput.Button />"}</CodeHeading>
      <CopyInput isReadOnly={false} value="button kind=default">
        <CopyInput.Input hasClearButton />
        <CopyInput.Button kind="default" />
      </CopyInput>
      <Gap />
      <CodeHeading>{"<CopyInput.Input hasError />"}</CodeHeading>
      <CopyInput isReadOnly={false} value="an error occurred">
        <CopyInput.Input hasError />
      </CopyInput>
      <Gap />
      <CodeHeading>{"<CopyInput.Popover />"}</CodeHeading>
      <CopyInput value="Popover shell used">
        <CopyInput.Popover offset={50} minWidth={300} align="right" />
      </CopyInput>
      <Gap />
      <CodeHeading>{"hasInputContainer={false}"}</CodeHeading>
      <div style={{ display: "flex" }}>
        <Input hasClearButton value={customInputValue} />
        <CopyInput hasInputContainer={false} value={customInputValue} />
      </div>
      <Gap.Small />
      <CopyInput value="some value" hasInputContainer={false} />
    </>
  );
};

export default CopyInputVariations;
