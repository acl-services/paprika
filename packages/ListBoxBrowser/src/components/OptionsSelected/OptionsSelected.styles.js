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
  flex-basis: 100%;
  flex-grow: 1;
  font-size: 14px;
  justify-content: flex-start;
  margin: ${tokens.spaceSm};
`;

export const title = css`
  background: ${tokens.backgroundColor.level0};
  border-bottom: 1px solid ${tokens.border.color};
  border-top: 1px solid ${tokens.border.color};
  box-sizing: border-box;
  font-size: 14px;
  font-weight: bold;
  padding: ${spacer(0.5)} ${spacer(1)} ${spacer(0.5)} ${spacer(1.5)};
  width: 100%;
`;

export const button = css`
  border-top-left-radius: ${tokens.border.radius};
  border-top-left-radius: ${tokens.border.radius};
  flex-basis: 100%;
  flex-grow: 1;
  padding: ${tokens.space} ${tokens.spaceLg};
`;

export const counter = css`
  border: 1px solid ${tokens.border.color};
  border-radius: ${tokens.border.radius};
  display: inline-box;
  font-size: 13px;
  font-weight: bold;
  margin-left: ${tokens.spaceSm};
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
  font-size: 12px;
  height: 100%;
  justify: flex-end;
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
`;

export const noOptionsSelectedContainer = css`
  background: ${tokens.backgroundColor.level0};
  padding: ${spacer(1)};
`;

export const noOptionsSelected = css`
  background: ${tokens.color.white};
  border: 1px dashed ${tokens.border.color};
  color: ${tokens.textColor.subtle};
  font-style: italic;
  padding: ${spacer(1)};
  text-align: center;
`;
