import React from "react";
import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

// Common Storybook story styles

export const Story = styled.main`
  padding: ${stylers.spacer(3)};

  h1 {
    margin-top: 0;
  }

  code {
    color: ${tokens.color.orangeDarken20};
  }
`;

export const CenteredStory = styled(Story)`
  ${stylers.alignMiddle}
  align-items: center;
  display: flex;
  justify-content: center;
  padding-top: 20vh;
`;

export const Rule = styled.hr`
  border: none;
  border-bottom: 1px solid ${tokens.border.color};
  margin: ${stylers.spacer(4)} 0;
`;

export const Big = styled.span`
  font-size: 1.2em;
  font-weight: bold;
`;

export const Small = styled.small`
  color: ${tokens.color.blackLighten40};
`;

export const Tagline = styled.div`
  color: ${tokens.textColor.subtle};
  font-style: italic;
`;

const LargeGap = styled.div`
  height: 120px;
`;
const SmallGap = styled.div`
  height: ${stylers.spacer(2)};
`;
const InlineGap = styled.span`
  display: inline-flex;
  width: ${tokens.space};
`;
export const Gap = styled.div`
  height: ${stylers.spacer(5)};
`;
Gap.Large = LargeGap;
Gap.Small = SmallGap;
Gap.Inline = InlineGap;

export const repeat = (num, fn) =>
  Array(num)
    .fill(null)
    .map((_, i) => fn(i));

export const breaklines = num => repeat(num, index => <br key={index} />);

export const CodeHeading = styled.code`
  display: block;
  margin: ${stylers.spacer(2)} 0;

  span {
    color: ${tokens.textColor.subtle};
    font-family: Helvetica, Arial, sans-serif;
  }
`;
