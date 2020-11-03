import React from "react";
import styled from "styled-components";
import ExampleStory from "storybook/components/ExampleStory";

export const FormElementStyles = styled.div`
  max-width: 500px;
`;

export const FormElementStory = props => (
  <FormElementStyles>
    <ExampleStory {...props} />
  </FormElementStyles>
);
