import React from "react";
import Button from "@paprika/button";
import { Gap } from "storybook/assets/styles/common.styles";
import CopyInput from "../../src/CopyInput";

const ExampleStory = () => {
  const defaultValue = "This input is controlled";
  const [controlledValue, setControlledValue] = React.useState(defaultValue);

  return (
    <>
      <CopyInput isReadOnly={false}>
        <CopyInput.Input value={controlledValue} onChange={e => setControlledValue(e.target.value)} />
      </CopyInput>
      <Gap />
      <Button onClick={() => setControlledValue(defaultValue)}>Reset the input&apos;s value</Button>
    </>
  );
};

export default ExampleStory;
