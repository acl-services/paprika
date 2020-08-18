import styled from "styled-components";
import { fontSizeValue } from "@paprika/stylers/lib/helpers";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const CurrentPageItemContent = styled.span`
  background: ${tokens.color.chartColor09};
  border-radius: ${tokens.button.borderRadius};
  box-sizing: border-box;
  color: ${tokens.color.white};
  cursor: default;
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

export const CurrentPageItem = styled.span`
  background: ${tokens.color.chartColor09};
  border-radius: ${tokens.button.borderRadius};
  box-sizing: border-box;
  color: ${tokens.color.white};
  cursor: default;
  display: inline-block;
  font-size: ${fontSizeValue(-1)};
  font-weight: bold;
  height: ${stylers.spacer(3)};
  line-height: ${stylers.spacer(3)};
  min-width: ${stylers.spacer(3)};
  position: relative;
  text-align: center;
  vertical-align: top;
`;

export const Wrapper = styled.span`
  border-right: 1px solid ${tokens.border.color};
  margin: 0 ${tokens.spaceSm};
  padding-right: ${stylers.spacer(1)};
  position: relative;
`;
