import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import RawButton from "@paprika/raw-button";

export const Collapsible = styled.div`
  &, * {
    box-sizing: border-box;
  }

  ${stylers.fontSize()}
  
  color: ${tokens.color.black};
  display: block;
  line-height: ${stylers.spacer(3)};
  width: 100%;
`;

export const CollapsibleLabel = styled(RawButton)(
  ({ iconAlign, isToggleIconOnly }) => css`
    border-radius: ${tokens.border.radius};
    display: inline-block;
    margin-inline-end: -${tokens.spaceSm};
    margin-inline-start: -${tokens.spaceSm};
    padding-inline-end: ${tokens.spaceSm};
    padding-inline-start: ${tokens.spaceSm};
    width: calc(100% + ${tokens.space});

    ${isToggleIconOnly && `margin: 0; width: auto;`}

    ${iconAlign === "left" && `margin-inline-end: ${tokens.spaceSm};`}
    ${iconAlign === "right" && `float: inline-end; margin-inline-start: ${tokens.spaceSm};`}
  `
);

export const CollapsibleIcon = styled.span(
  ({ iconAlign }) => css`
    ${iconAlign === "left" && `margin-inline-end: ${tokens.spaceSm};`}
    ${iconAlign === "right" &&
      `float: inline-end; margin-inline-start: ${tokens.spaceSm};`}

    [data-pka-anchor="icon"] {
      color: ${tokens.textColor.icon};
      vertical-align: -2px;
    }
  `
);

export const CollapsibleBody = styled.div`
  width: 100%;
`;
