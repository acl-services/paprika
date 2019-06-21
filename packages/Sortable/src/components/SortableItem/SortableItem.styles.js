import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const draggingStyles = `
  background: ${tokens.color.white};
  box-shadow: ${tokens.shadow}, 0 0 1px ${tokens.border.color};

  &:focus {
    box-shadow: ${tokens.shadow}, ${tokens.highlight.active.withBorder.boxShadow};
  }
`;

export const itemStyles = css`
  border-radius: ${tokens.border.radius};
  display: flex;
  list-style: none;
  padding: ${tokens.space} ${tokens.spaceSm} ${tokens.space} 2px;

  &:last-child {
    margin-bottom: 0;
  }

  &:focus {
    outline: none;
    box-shadow: ${tokens.highlight.active.withBorder.boxShadow};
  }

  ${({ isDragging }) => (isDragging ? draggingStyles : null)}
`;

export const itemHandleStyles = `
  ${stylers.fontSize(3)};
  align-items: center;
  color: ${tokens.textColor.icon};
  display: flex;
  line-height: 1;
  padding: 0 ${tokens.spaceSm} 0 0;
`;

export const itemIndexStyles = `
  ${stylers.fontSize()};
  flex-shrink: 0;
  align-self: center;
  background: ${tokens.color.blackLighten40};
  border-radius: ${tokens.border.radius};
  color: ${tokens.color.white};
  height: ${stylers.spacer(4)};
  line-height: ${stylers.spacer(4)};
  min-width: 1.5em; 
  padding: 0 2px;
  margin: 0 ${tokens.space} 0 0;
  text-align: center;
`;

export const itemBodyStyles = `
  align-items: center;
  display: flex;
  flex-grow: 1;
`;

export const itemCloseStyles = `
  align-items: center;
  display: flex;
  margin-left: ${tokens.space};
`;
