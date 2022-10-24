import styled from "styled-components";
import { Story } from "storybook/assets/styles/common.styles";
import tokens from "@paprika/tokens";

// Common Button story styles

export const ButtonStory = styled(Story)`
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
