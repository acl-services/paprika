import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

const BASE_WIDTH = 150;

const alignedCenterStyles = css`
  align-items: center;
  display: flex;
`;

export const NotificationImage = styled.div`
  align-self: stretch;
  flex-basis: 60%;
  max-width: ${BASE_WIDTH + stylers.toInt(tokens.space) * 3}px;
  min-width: ${BASE_WIDTH / 2}px;
  padding-right: ${stylers.spacer(3)};
  width: 100%;

  ${({ align }) => (align === "center" ? alignedCenterStyles : "")}
`;
