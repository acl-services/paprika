import styled from "styled-components";
import { Story } from "storybook/assets/styles/common.styles";
import tokens from "@paprika/tokens";

// Common Heading story styles

export const HeadingStory = styled(Story)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  [role="heading"] {
    & + [role="heading"] {
      margin-left: ${tokens.space};
    }
  }
`;
