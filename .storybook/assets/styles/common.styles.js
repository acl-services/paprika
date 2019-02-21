import styled from "styled-components";
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
