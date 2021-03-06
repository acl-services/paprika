import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const ElipsisItemElipse = styled.span`
  align-items: center;
  border-radius: ${tokens.borderRadius};
  box-sizing: border-box;
  color: ${tokens.color.blackLighten20};
  display: flex;
  ${stylers.fontSize(-1)};
  font-weight: bold;
  height: ${stylers.spacer(3)};
  justify-content: center;
  line-height: ${stylers.spacer(3)};
  min-width: ${stylers.spacer(3)};
  padding: 0 ${tokens.spaceSm};
  text-align: center;
  vertical-align: top;
`;

export const ElipsisItem = styled.span`
  align-items: center;
  border-radius: ${tokens.borderRadius};
  box-sizing: border-box;
  display: flex;
  height: ${stylers.spacer(3)};
  justify-content: center;
  margin: 0 ${tokens.spaceSm + 1} 0 ${tokens.spaceSm};
  position: relative;
`;
