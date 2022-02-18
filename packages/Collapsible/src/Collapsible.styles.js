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
    margin-left: -${tokens.spaceSm};
    margin-right: -${tokens.spaceSm};
    padding-left: ${tokens.spaceSm};
    padding-right: ${tokens.spaceSm};
    width: calc(100% + ${tokens.space});

    ${isToggleIconOnly && `margin: 0; width: auto;`}

    ${iconAlign === "left" && `margin-right: ${tokens.spaceSm};`}
    ${iconAlign === "right" && `float: right; margin-left: ${tokens.spaceSm};`}
  `
);

export const CollapsibleIcon = styled.span(
  ({ iconAlign }) => css`
    ${iconAlign === "left" && `margin-right: ${tokens.spaceSm};`}
    ${iconAlign === "right" && `float: right; margin-left: ${tokens.spaceSm};`}

    [data-pka-anchor="icon"] {
      color: ${tokens.textColor.icon};
      vertical-align: -2px;
    }
  `
);

export const CollapsibleBody = styled.div`
  width: 100%;
`;
