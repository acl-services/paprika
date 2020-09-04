import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const Collapsible = styled.div`
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
    margin-left: -${tokens.spaceSm};
    margin-right: -${tokens.spaceSm};
    padding-left: ${tokens.spaceSm};
    padding-right: ${tokens.spaceSm};
    width: calc(100% + ${tokens.space});
  }

  .collapsible__icon--left {
    margin-right: ${tokens.spaceSm};
  }

  .collapsible__icon--right {
    float: right;
    margin-left: ${tokens.spaceSm};
  }
  
  .collapsible__label--is-toggle-icon-only {
    margin: 0;
    width: auto;
  }

  .collapsible__label--left {
    margin-right: ${tokens.spaceSm}; 
  }

  .collapsible__label--right {
    float: right;
    margin-left: ${tokens.spaceSm};
  }

  .collapsible__icon svg {
    vertical-align: -2px; 
  }

  .collapsible__body {
    width: 100%;
  }
`;
