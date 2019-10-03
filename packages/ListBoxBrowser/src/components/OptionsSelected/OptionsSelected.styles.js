import { css } from "styled-components";
import tokens from "@paprika/tokens/lib/tokens";
import { spacer } from "@paprika/stylers/lib/helpers";

export const container = css`
  display: flex;
  padding: ${tokens.space};
`;

export const optionStyles = css`
  align-items: center;
  background: ${tokens.backgroundColor.level0};
  border: 1px solid ${tokens.border.color};
  border-radius: ${tokens.border.radius};
  box-sizing: border-box;
  color: ${tokens.color.black};
  display: flex;
  font-size: 14px;
  justify-content: center;
  margin: ${tokens.spaceSm};
  padding: ${tokens.spaceSm};
  position: relative;
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
  flex-grow: 1;
  margin-right: ${spacer(1)};
  &:after {
    border-right: 1px solid ${tokens.border.color};
    content: "";
    height: 100%;
    left: calc(100% - 21px);
    position: absolute;
    top: 0;
    width: 1px;
  }
`;
export const remove = css`
  align: center;
  border-radius: ${tokens.border.radius};
  color: ${tokens.color.cremeDarken30};
  display: flex;
  font-size: 12px;
  justify: center;
  padding: ${tokens.spaceSm / 2};
  position: relative;

  &:hover {
    color: ${tokens.color.black};
  }
`;
