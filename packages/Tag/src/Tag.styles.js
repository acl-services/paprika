import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import RawButton from "@paprika/raw-button";
import Button from "@paprika/button";
import { fontSize, spacer } from "@paprika/stylers/lib/helpers";
import { truncateText } from "@paprika/stylers/lib/includes";
import * as types from "./types";

const themeStyles = {
  [types.themes.BLACK]: css`
    background: ${tokens.color.black};
  `,

  [types.themes.BLUE]: css`
    background: ${tokens.color.blue};
  `,

  [types.themes.GREY]: css`
    background: ${tokens.color.blackLighten70};
    color: ${tokens.color.black};
  `,

  [types.themes.GREEN]: css`
    background: ${tokens.color.greenDarken10};
  `,

  [types.themes.ORANGE]: css`
    background: ${tokens.color.orangeDarken10};
  `,

  [types.themes.LIGHT_BLUE]: css`
    background: ${tokens.color.blueLighten50};
    color: ${tokens.color.blueDarken20};
  `,

  [types.themes.LIGHT_ORANGE]: css`
    background: ${tokens.color.orangeLighten40};
    color: ${tokens.color.orangeDarken20};
  `,

  [types.severityThemes.NO_RISK]: css`
    background: ${tokens.color.blackLighten70};
    color: ${tokens.color.black};
  `,

  [types.severityThemes.LOW_RISK]: css`
    background: #299a7a;
  `,

  [types.severityThemes.MEDIUM_RISK]: css`
    background: #c9af28;
  `,

  [types.severityThemes.HIGH_RISK]: css`
    background: #cd3c44;
  `,

  [types.severityThemes.ALERT]: css`
    background: none;
    color: ${tokens.color.orangeDarken10};
  `,
};

export const Tags = styled.ul(() => {
  return css`
    display: flex;
    flex-wrap: wrap;
    line-height: 1;
    margin: 0;
    padding: 0;
  `;
});

const borderColorStyles = ({ borderColor }) => css`
  border: 1px solid ${borderColor};
  padding: 1px;
`;

const height = borderColor => {
  return borderColor
    ? {
        medium: "18px",
        large: "22px",
      }
    : {
        medium: "20px",
        large: "24px",
      };
};

const tagStyles = ({ theme, borderColor, size }) => css`
  align-items: center;
  background: ${tokens.color.blackLighten70};
  ${borderColor ? borderColorStyles : ""}
  border-radius: ${spacer(2)};
  color: ${tokens.color.white};
  display: flex;
  height: ${height(borderColor)[size]};
  line-height: 1;
  margin-bottom: 2px;
  margin-right: ${tokens.spaceSm};
  max-width: 100%;
  padding: 2px;
  ${themeStyles[theme]}

  [data-pka-anchor="avatar"] {
    margin-right: ${tokens.space};
  }
`;

export const RawButtonTag = styled(RawButton)(tagStyles);

export const Tag = styled.li(tagStyles);

export const Ellipsis = styled.div(({ isChildString, size }) => {
  const getFontSize = {
    medium: fontSize(-1),
    large: fontSize(0),
  };

  const padding = isChildString ? `padding: 0 ${tokens.space} 1px ${tokens.space};` : `padding-right: ${tokens.space}`;

  // todo: fix truncateText not showing ... with display inline-flex, only with display: block....
  return css`
    align-items: center;
    display: inline-flex;
    ${getFontSize[size]};
    ${padding};
    ${truncateText};
  `;
});

export const Delete = styled(Button.Close)(({ size }) => {
  const fontSize = {
    medium: "10px",
    large: "12px",
  };

  const padding = {
    medium: "4px",
    large: "5px",
  };

  const width = {
    medium: "20px",
    large: "24px",
  };

  return css`
    align-items: center;
    border-radius: 50%;
    box-sizing: border-box;
    display: flex;
    flex-shrink: 0;
    font-size: ${fontSize[size]};
    height: ${width[size]};
    justify-content: center;
    min-height: auto;
    padding: ${padding[size]};
    width: ${width[size]};

    &:hover {
      background: ${tokens.color.blackLighten60};
    }

    &:focus {
      background: ${tokens.color.blackLighten60};
    }
  `;
});
