import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import { css } from "styled-components";

export const modalFooterStyles = css`
  background: ${tokens.color.blackLighten70};
  border-radius: 0 0 ${tokens.card.borderRadius} ${tokens.card.borderRadius};
  display: flex;
  ${stylers.lineHeight()}
  padding: ${stylers.spacer(2)} ${stylers.spacer(3)};
`;

export const contentStyles = css`
  align-self: center;
  color: ${tokens.color.black};
  flex-grow: 1;
  flex-shrink: 1;
  ${stylers.fontSize()};
  ${stylers.lineHeight()}
`;

export const actionsStyles = css`
  flex-grow: 1;
  flex-shrink: 0;
  padding-left: ${stylers.spacer(3)};
  text-align: right;
`;
