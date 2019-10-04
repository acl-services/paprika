import { css } from "styled-components";
import tokens from "@paprika/tokens/lib/tokens";
import { spacer } from "@paprika/stylers/lib/helpers";

export const container = css`
  display: flex;
  flex-wrap: wrap;
  padding: ${tokens.space};
`;

export const optionStyles = css`
  align-items: center;
  background: ${tokens.backgroundColor.white};
  border: 1px solid ${tokens.border.color};
  border-radius: ${tokens.border.radius};
  box-sizing: border-box;
  color: ${tokens.color.black};
  display: flex;
  font-size: 14px;
  justify-content: center;
  margin: ${tokens.spaceSm};
`;

export const divider = css`
  background: ${tokens.backgroundColor.level0};
  border-bottom: 1px solid ${tokens.border.color};
  border-top: 1px solid ${tokens.border.color};
  box-sizing: border-box;
  padding: ${spacer(1)} ${spacer(1)} ${spacer(1)} 12px;
  width: 100%;
`;

export const button = css`
  border-top-left-radius: ${tokens.border.radius};
  border-top-left-radius: ${tokens.border.radius};
  padding: ${tokens.spaceSm} ${tokens.space};
`;

export const counter = css`
  background: ${tokens.color.white};
  border: 1px solid ${tokens.border.color};
  border-radius: ${tokens.border.radius};
  font-size: 13px;
  font-weight: bold;
  padding: 2px ${tokens.spaceSm};
`;

export const remove = css`
  align: center;
  align-items: center;
  border-bottom-right-radius: ${tokens.border.radius};
  border-left: 1px solid ${tokens.border.color};
  border-top-right-radius: ${tokens.border.radius};
  color: ${tokens.color.cremeDarken30};
  display: inline-flex;
  display: flex;
  font-size: 12px;
  height: 100%;
  justify: center;
  padding: 0 ${tokens.space};
  position: relative;

  &:hover {
    color: ${tokens.color.black};
  }
`;

export const optionLabel = css`
  font-size: 16px;
  margin-bottom: 3px;
`;

export const optionBreadcrum = css`
  color: ${tokens.color.blackLighten20};
  font-size: 13px;
  font-style: italic;
`;
