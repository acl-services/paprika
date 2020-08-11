import styled from "styled-components";
import tokens from "@paprika/tokens";
import { fontSizeValue } from "@paprika/stylers/lib/helpers";

export const ElipsisItemElipse = styled.span`
  border-radius: ${tokens.borderRadius};
  box-sizing: border-box;
  color: ${tokens.color.blackLighten20};
  display: inline-block;
  font-size: ${fontSizeValue(-1)};
  font-weight: bold;
  height: ${tokens.space * 3};
  line-height: ${tokens.space * 3};
  min-width: ${tokens.space * 3};
  padding: 0 ${tokens.spaceSm};
  text-align: center;
  vertical-align: top;
`;

export const ElipsisItem = styled.span`
  border-radius: ${tokens.borderRadius};
  box-sizing: border-box;
  display: inline-block;
  height: ${tokens.space * 3};
  margin: 0 ${tokens.spaceSm + 1} 0 ${tokens.spaceSm};
  position: relative;
`;
