import React from "react";
import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

// Common Storybook story styles

export const Story = styled.div`
  padding: ${stylers.spacer(3)};

  h1 {
    margin-top: 0;
  }
`;

export const CenteredStory = styled.div`
  ${stylers.alignMiddle}
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`;

export const Rule = styled.hr`
  border: none;
  border-bottom: 1px solid ${tokens.border.color};
  margin: ${stylers.spacer(4)} 0;
`;

export const Small = styled.small`
  color: ${tokens.color.blackLighten40};
`;

export const Tagline = styled.div`
  color: ${tokens.textColor.subtle};
  font-style: italic;
`;

export const Gap = styled.div`
  height: 120px;
`;

export const HorizontalSmallGap = styled.div`
  display: inline-flex;
  width: ${tokens.space};
`;

export const breaklines = num => [...Array(num).keys()].map(index => <br key={index} />);
