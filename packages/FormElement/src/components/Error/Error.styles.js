import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import ExclamationCircleIcon from "@paprika/icon/lib/ExclamationCircle";

export const ErrorIcon = styled(ExclamationCircleIcon)`
  margin: 2px ${tokens.spaceSm} 0 0;
`;

export const Error = styled.div`
  ${stylers.lineHeight(-1)}
  color: ${tokens.color.orangeDarken10};
  margin: ${tokens.spaceSm} 0 0 0;
`;
