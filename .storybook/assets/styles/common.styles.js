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
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

export const Code = styled.code`
  background-color: ${tokens.color.greenLighten40};
  border: 1px solid ${tokens.color.greenLighten30};
  color: ${tokens.color.blackLighten20};
  display: inline-block;
  font-weight: normal;
  margin-bottom: ${stylers.spacer(2)};
  padding: 0 ${tokens.spaceSm};
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

export const Pill = styled.span`
  background-color: ${tokens.color.blackLighten60};
  border-radius: ${tokens.space} / 50%;
  color: ${tokens.color.black};
  display: inline-block;
  ${stylers.fontSize(-2)};
  padding: 0 ${tokens.space};
`;
