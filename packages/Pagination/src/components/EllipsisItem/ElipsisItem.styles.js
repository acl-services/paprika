import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const ElipsisItemElipse = styled.span`
  border-radius: ${tokens.borderRadius};
  box-sizing: border-box;
  color: ${tokens.color.blackLighten20};
  display: inline-block;
  font-size: ${stylers.fontSizeValue(-1)};
  font-weight: bold;
  height: ${stylers.spacer(3)};
  line-height: ${stylers.spacer(3)};
  min-width: ${stylers.spacer(3)};
  padding: 0 ${tokens.spaceSm};
  text-align: center;
  vertical-align: top;
`;

export const ElipsisItem = styled.span`
  border-radius: ${tokens.borderRadius};
  box-sizing: border-box;
  display: inline-block;
  height: ${stylers.spacer(3)};
  margin: 0 ${tokens.spaceSm + 1} 0 ${tokens.spaceSm};
  position: relative;
`;
