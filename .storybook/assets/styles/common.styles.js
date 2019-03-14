import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

// Common Storybook story styles

export const Story = styled.div`
  padding: ${stylers.spacer(3)};
`;

export const CenteredStory = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

export const Small = styled.small`
  color: ${tokens.color.blackLighten40};
`;

export const Rule = styled.hr`
  border: none;
  border-bottom: 1px solid ${tokens.border.color};
  margin: ${stylers.spacer(4)} 0;
`;
