import styled from "styled-components";
import { fontSizeValue } from "@paprika/stylers/lib/helpers";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const ElipsisItemElipse = styled.span`
  border-radius: ${tokens.borderRadius};
  box-sizing: border-box;
  color: ${tokens.color.blackLighten20};
  display: inline-block;
  font-size: ${fontSizeValue(-1)};
  font-weight: bold;
  height: ${stylers.spacer(3)};
  line-height: ${stylers.spacer(3)};
  min-width: ${stylers.spacer(3)};
  padding: 0 ${stylers.spacer(0.5)};
  text-align: center;
  vertical-align: top;
`;

export const ElipsisItem = styled.span`
  border-radius: ${tokens.borderRadius};
  box-sizing: border-box;
  display: inline-block;
  height: ${stylers.spacer(3)};
  margin: 0 ${stylers.spacer(0.5) + 1} 0 ${stylers.spacer(0.5)};
  position: relative;
`;
