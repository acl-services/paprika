import React from "react";
import styled from "styled-components";
import ExampleStory from "storybook/components/ExampleStory";

export const StyledStory = styled.div`
  [data-pka-anchor="textarea"] {
    max-width: 320px;
  }
`;

export const TextareaStory = props => (
  <StyledStory>
    <ExampleStory {...props} />
  </StyledStory>
);
TextareaStory.defaultTaglines = ExampleStory.defaultTaglines;
