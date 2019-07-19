import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const collapsibleStyles = css`
  &, * {
    box-sizing: border-box;
  }

  ${stylers.fontSize()}
  
  color: ${tokens.color.black};
  display: block;
  line-height: ${stylers.spacer(3)};
  width: 100%;

  .collapsible__label {
    display: inline-block;
    border-radius: ${tokens.border.radius};
    width: 100%;
  }

  .collapsible__label--is-toggle-icon-only {
    width: auto;
  }

  [data-pka-anchor="collapsible.icon"] svg {
    vertical-align: -0.1em;
  }

  .collapsible--icon-left {
    padding-right: ${tokens.spaceSm};
  }

  .collapsible--icon-right {
    float: right;
  }

  .collapsible__body {
    display: ${({ isCollapsed }) => (isCollapsed ? "none" : "block")};
    width: 100%;
  }
`;

export default collapsibleStyles;
