import React from "react";
import styled from "styled-components";
import ExampleStory from "storybook/components/ExampleStory";
import tokens from "@paprika/tokens";

// Common Button story styles

export const ButtonStyles = styled.div`
  a,
  button,
  [role="button"] {
    & + button,
    & + a,
    & + [role="button"] {
      margin-left: ${tokens.space};
    }
  }
`;

export const ButtonStory = props => (
  <ButtonStyles>
    <ExampleStory {...props} />
  </ButtonStyles>
);
