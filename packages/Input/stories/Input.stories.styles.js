import React from "react";
import styled from "styled-components";
import ExampleStory from "storybook/components/ExampleStory";

export const StyledStory = styled.div`
  [data-pka-anchor="input.container"] {
    max-width: 320px;
  }
`;

export const InputStory = props => (
  <StyledStory>
    <ExampleStory {...props} />
  </StyledStory>
);
InputStory.defaultTaglines = ExampleStory.defaultTaglines;
