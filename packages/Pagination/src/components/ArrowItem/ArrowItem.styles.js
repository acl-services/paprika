import styled, { css } from "styled-components";
import RawButton from "@paprika/raw-button";
import tokens from "@paprika/tokens";
// import Icon from "../../../../Icon";

export const ArrowItemIcon = css`
  ${({ isDisabled }) => css`
    line-height: ${tokens.space * 3};
    ${isDisabled ? tokens.color.blackLighten40 : tokens.color.black}
  `}
`;

export const ArrowItem = styled(RawButton)`
  border-radius: ${tokens.borderRadius};
  box-sizing: border-box;
  display: inline-block;
  height: ${tokens.space * 3};
  margin: 0;
  position: relative;
`;

/* ${tokens.space - sm + 1}  0 ${tokens.space - sm} */
