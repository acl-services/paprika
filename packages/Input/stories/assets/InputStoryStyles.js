import React from "react";
import styled from "styled-components";
import { Story } from "storybook/assets/styles/common.styles";

// Common Input story styles
//
const InputStoryStyles = styled(Story)`
  max-width: 300px;
`;

export default storyFn => <InputStoryStyles>{storyFn()}</InputStoryStyles>;
