import styled from "styled-components";
import tokens from "@paprika/tokens";
import { fontSizeValue } from "@paprika/stylers/lib/helpers";

export const CurrentPageItemContent = styled.span`
  background: ${tokens.color.greenDarken10};
  color: ${tokens.color.white};
  cursor: default;
  font-size: ${fontSizeValue(-1)};
  font-weight: bold;
  line-height: ${tokens.space * 3};
  min-width: ${tokens.space * 3};
  padding: 0 ${tokens.spaceSm};
  text-align: center;
  vertical-align: top;
`;

export const CurrentPageItem = styled.span`
  background: ${tokens.color.greenDarken10};
  border-radius: ${tokens.borderRadius};
  box-sizing: border-box;
  color: ${tokens.color.white};
  cursor: default;
  display: inline-block;
  font-size: ${fontSizeValue(-1)};
  font-weight: bold;
  height: ${tokens.space * 3};
  line-height: ${tokens.space * 3};
  margin: 0 ${tokens.spaceSm + 1} 0 ${tokens.spaceSm};
  min-width: ${tokens.space * 3};
  padding: 0 ${tokens.spaceSm};
  position: relative;
  text-align: center;
  vertical-align: top;
`;
