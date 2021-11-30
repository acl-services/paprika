import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import ExclamationCircleIcon from "@paprika/icon/lib/ExclamationCircle";
import * as types from "./types";

const fontSize = {
  [types.MEDIUM]: css`
    ${stylers.fontSize(-1)}
  `,
  [types.LARGE]: css`
    ${stylers.lineHeight(-3)}
    ${stylers.fontSize()}
  `,
};

export const ErrorIcon = styled(ExclamationCircleIcon)`
  font-size: ${tokens.icon.sizeSm};
  margin: 2px ${tokens.spaceSm} 0 0;
`;

export const Error = styled.div(
  ({ size }) => css`
    ${stylers.lineHeight(-1)}
    align-items: center;
    color: ${tokens.color.orangeDarken10};
    display: flex;
    margin: ${tokens.spaceSm} 0 0 0;
    ${fontSize[size]}
  `
);
