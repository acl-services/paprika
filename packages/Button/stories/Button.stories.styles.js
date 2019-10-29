import styled from "styled-components";
import { Story } from "storybook/assets/styles/common.styles";
import tokens from "@paprika/tokens";

// Common Button story styles

export const ButtonStory = styled(Story)`
  a,
  button,
  [role="button"][role="a"] {
    & + button,
    & + a,
    & + [role="button"][role="a"] {
      margin-left: ${tokens.space};
    }
  }
`;
