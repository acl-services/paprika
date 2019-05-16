
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const modalFooterStyles = props => `
  background: ${tokens.color.blackLighten70};
  border-radius: 0 0 ${tokens.card.borderRadius} ${tokens.card.borderRadius};
  display: flex;
  ${stylers.lineHeight()}
  padding: ${stylers.spacer(2)} ${stylers.spacer(3)};
`;

export const contentStyles = props => `
  align-self: center;
  flex-grow: 1;
  flex-shrink: 1;
  ${stylers.fontSize()};
  color: ${tokens.color.black};
  ${stylers.lineHeight()}
`;

export const actionsStyles = props => `
  flex-grow: 1;
  flex-shrink: 0;
  padding-left: ${stylers.spacer(3)};
  text-align: right;
`;
