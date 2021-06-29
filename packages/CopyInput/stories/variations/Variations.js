import React from "react";
import { Gap } from "storybook/assets/styles/common.styles";
import Input from "@paprika/input";
import CopyInput from "../../src/CopyInput";

const CopyInputVariations = () => {
  const customInputValue = "this is my custom Input component";

  return (
    <>
      <CopyInput value="read only" />
      <Gap.Small />
      <CopyInput isReadOnly={false} value="edit input" />
      <Gap.Small />
      <CopyInput isReadOnly={false} value="an error occurred">
        <CopyInput.Input hasError />
      </CopyInput>
      <Gap.Small />
      <CopyInput hasInputContainer={false} value="button kind=minor and input container not used">
        <CopyInput.Button kind="minor" />
      </CopyInput>
      <Gap.Small />
      <CopyInput isReadOnly={false} value="button kind=default">
        <CopyInput.Input hasClearButton />
        <CopyInput.Button kind="default" />
      </CopyInput>
      <Gap.Small />
      <>
        <Input hasClearButton size={Input.types.size.LARGE} value={customInputValue} />
        <CopyInput hasValueShown={false} value={customInputValue} />
      </>
    </>
  );
};

export default CopyInputVariations;
