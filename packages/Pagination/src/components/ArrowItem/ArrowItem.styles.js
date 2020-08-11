import styled, { css } from "styled-components";
import RawButton from "@paprika/raw-button";
import tokens from "@paprika/tokens";

export const ArrowItemIcon = Icon => {
  return styled(Icon.type)`
    ${({ isDisabled }) => css`
      line-height: ${tokens.space * 3};
      ${isDisabled ? tokens.color.blackLighten40 : tokens.color.black}
    `}
  `;
};

export const ArrowItem = styled(RawButton)`
  border-radius: ${tokens.borderRadius};
  box-sizing: border-box;
  display: inline-block;
  height: ${tokens.space * 3};
  margin: 0 ${tokens.spaceSm + 1} 0 ${tokens.spaceSm};
  position: relative;
`;
