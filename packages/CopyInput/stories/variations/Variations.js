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
      <CopyInput hasError isReadOnly={false} value="an error occured" />
      <Gap.Small />
      <CopyInput buttonKind="minor" value="button kind=minor" />
      <Gap.Small />
      <CopyInput buttonKind="default" isReadOnly={false} value="button kind=default" />
      <Gap.Small />
      <>
        <Input hasClearButton size={Input.types.size.LARGE} value={customInputValue} />
        <CopyInput hideInput value={customInputValue} />
      </>
    </>
  );
};

export default CopyInputVariations;
