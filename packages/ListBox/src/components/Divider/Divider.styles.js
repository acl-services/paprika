import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const pseudoElement = css`
  background: ${tokens.color.blackLighten60};
  content: "";
  display: inline-block;
  flex-grow: 1;
  height: 1px;
`;

const textDividerStyles = css`
  &:after {
    ${pseudoElement}
    margin-left: ${tokens.space};
  }
`;

export const dividerCSS = css`
  align-items: center;
  color: ${tokens.color.blackLighten20};
  display: flex;
  justify-content: center;
  padding: ${tokens.spaceSm};
  width: 100%;

  ${stylers.fontSize(-1)};

  ${textDividerStyles}
`;
