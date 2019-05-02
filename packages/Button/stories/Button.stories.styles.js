import styled from "styled-components";
import { Story } from "storybook/assets/styles/common.styles";
import tokens from "tokens";

// Common Button story styles

export const ButtonStory = styled(Story)`
  button,
  [role="button"] {
    & + button,
    & + [role="button"] {
      margin-left: ${tokens.space};
    }
  }
`;
