import React from "react";
import styled from "styled-components";
import ExampleStory from "storybook/components/ExampleStory";

export const StyledStory = styled.div`
  [data-pka-anchor="select.container"] {
    max-width: 320px;
  }
`;

export const SelectStory = props => (
  <StyledStory>
    <ExampleStory {...props} />
  </StyledStory>
);
SelectStory.defaultTaglines = ExampleStory.defaultTaglines;
