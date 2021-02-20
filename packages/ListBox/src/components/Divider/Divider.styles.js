import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

/*
 * IMPORTANT: THE STYLE FOR ALL OPTION MUST BE THE SAME SIZE
 * THIS IS IMPORTANT FOR CALCULATING THE CORRECT POSITION WHEN EXECUTING useOnScrolled() on Options/helpers/options.js
 * IF THIS STYLES CHANGES THEN UP AN DOWN WILL NOT WORK CORRECTLY WHEN THE DIVIDER EXISTS
 * PAY ATTENTION WHEN YOU MODIFY THE FOLLOWING ATTRIBUTES:
 * - border
 * - margin
 * - padding
 */

export const Divider = styled.li(
  ({ isDisabled }) => css`
    align-items: center;
    border: 2px solid transparent;
    color: ${isDisabled ? tokens.color.blackLighten60 : tokens.color.blackLighten20};
    display: flex;
    justify-content: center;
    margin-bottom: ${tokens.spaceSm};
    padding: ${tokens.spaceSm};
    width: 100%;
    ${stylers.fontSize(-1)};

    &:after {
      background: ${isDisabled ? tokens.color.blackLighten70 : tokens.color.blackLighten60};
      content: "";
      display: inline-block;
      flex-grow: 1;
      height: 1px;
      margin-left: ${tokens.space};
    }
  `
);
