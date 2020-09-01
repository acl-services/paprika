import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import { commonStyles, sizeStyles, kindStyles } from "./Button.styles";
import { ButtonIcon } from "./Button";

export const LinkButton = styled.a(
  ({ size, kind, isDisabled }) => css`
    ${commonStyles}
    ${sizeStyles[size]}
    ${kindStyles(isDisabled)[kind]}
  `
);

export const LinkButtonIcon = styled(ButtonIcon)`
  ${stylers.fontSize(-3)}
  color: ${tokens.textColor.icon};
  margin-top: -${tokens.spaceSm};
`;
