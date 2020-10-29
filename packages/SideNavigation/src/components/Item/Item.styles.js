import styled, { css } from "styled-components";
import Button from "@paprika/button";
import tokens from "@paprika/tokens";
import { spacer, fontSize } from "@paprika/stylers/lib/helpers";

export const Item = styled(Button.Link)`
  ${fontSize()}
  border-radius: 0;
  color: ${tokens.color.black};
  justify-content: flex-start;
  min-height: ${spacer(5)};
  padding: ${tokens.space} ${spacer(2)};
  text-align: left;
  text-decoration: none;
  width: 100%;

  ${({ isCurrent }) =>
    isCurrent
      ? css`
          background: ${tokens.color.blueLighten40};
        `
      : ""}

  &:hover,
  &:visited {
    color: ${tokens.color.black};
  }

  &:focus {
    border-color: ${tokens.highlight.active.noBorder.borderColor};
    box-shadow: ${tokens.highlight.active.noBorder.insetBoxShadow};
    outline: none;
  }
`;
