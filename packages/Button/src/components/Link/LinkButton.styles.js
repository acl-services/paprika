import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import { commonStyles, sizeStyles, kindStyles, activeStyles, fullWidthStyles } from "../../Button.styles";
import { ButtonIcon } from "../../Button";

export const LinkButton = styled.a(
  ({ size, kind, isFullWidth, isActive }) => css`
    ${commonStyles}
    ${sizeStyles[size]}
    ${kindStyles[kind]}
    ${isFullWidth && fullWidthStyles}
    ${isActive && activeStyles}
  `
);

export const LinkButtonIcon = styled(ButtonIcon)`
  ${stylers.fontSize(-3)}
  color: ${tokens.textColor.icon};
  margin-top: -${tokens.spaceSm};
`;
