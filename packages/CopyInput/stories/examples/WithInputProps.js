import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import CopyInput from "../../src/CopyInput";

const WithInputPropsExample = () => (
  <Story>
    <CopyInput defaultValue="This input is read-only">
      <CopyInput.Input isReadOnly />
    </CopyInput>
  </Story>
);

export default WithInputPropsExample;
