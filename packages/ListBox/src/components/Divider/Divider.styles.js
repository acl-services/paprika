import styled, { css } from "styled-components";
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

export const Divider = styled.li`
  /* 
  * IMPORTANT: THE STYLE FOR ALL OPTION MUST BE THE SAME SIZE
  * THIS IS IMPORTANT FOR CALCULATING THE CORRECT POSITION WHEN EXECUTING useOnScrolled() on Options/helpers/options.js
  * IF THIS STYLES CHANGES THEN UP AN DOWN WILL NOT WORK CORRECTLY WHEN THE DIVIDER EXISTS
  * PAY ATTENTION WHEN YOU MODIFY FOR EXAMPLE THE FOLLOWING ATTRIBUTES:
  * - Border
  * - margins 
  * - paddings
  */
  align-items: center;
  border: 2px solid transparent;
  color: ${tokens.color.blackLighten20};
  display: flex;
  justify-content: center;
  margin-bottom: ${tokens.spaceSm};
  padding: ${tokens.spaceSm};
  width: 100%;

  ${stylers.fontSize(-1)};

  ${textDividerStyles}
`;
