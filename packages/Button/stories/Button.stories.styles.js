import styled from "styled-components";
import { Story } from "storybook/assets/styles/common.styles";
import tokens from "@paprika/tokens";

// Common Button story styles
// Added link button story styles

export const ButtonStory = styled(Story)`
  button,
  [role="button"] {
    & + button,
    & + [role="button"] {
      margin-left: ${tokens.space};
    }
  }
  a,
  [role="a"] {
    & + a,
    & + [role="a"] {
      margin-left: ${tokens.space};
    }
  }
`;
