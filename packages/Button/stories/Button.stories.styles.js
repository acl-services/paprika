import styled from "styled-components";
import tokens from "@paprika/tokens";
import { Story } from "storybook/assets/styles/common.styles";

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
