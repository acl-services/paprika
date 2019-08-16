import styled, { css } from "styled-components";
import tinycolor from "tinycolor2";

import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import Button from "@paprika/button";
import { visuallyHidden } from "@paprika/stylers/lib/includes";

function getStylesForType(type) {
  if (type === "visually-hidden") return "";
  const primaryColors = {
    success: tokens.color.greenLighten50,
    warning: tokens.color.yellowLighten30,
    error: tokens.color.orangeLighten40,
    info: tokens.color.cremeLighten5,
    locked: tokens.color.yellowLighten30,
  };

  return css`
    background-color: ${primaryColors[type]};
    border-color: ${tinycolor(primaryColors[type])
      .darken(10)
      .toString()};
    color: ${tinycolor(primaryColors[type]).toHsl().l > 0.7 ? tokens.color.black : tokens.color.white};
  `;
}

const AlertLineHeight = "1.3";

const stickyStyles = css`
  left: 50%;
  max-width: 675px;
  position: fixed;
  top: ${stylers.spacer(2)};
  transform: translateX(-50%);
  width: calc(100% - #{${stylers.spacer(4)}});
`;

const iconColors = {
  success: tokens.color.green,
  warning: tokens.color.yellowDarken10,
  error: tokens.color.orange,
  info: tokens.color.blue,
  locked: tokens.color.yellowDarken10,
  "visually-hidden": "inherit",
};

const closeButtonColors = {
  success: tokens.color.greenDarken20,
  warning: tokens.color.yellowDarken40,
  error: tokens.color.orangeLighten40,
  locked: tokens.color.yellowLighten30,
};

export const CloseButtonStyled = styled(Button.Close)`
  flex-grow: 0;
  flex-shrink: 0;
  min-height: 0;

  ${({ type }) => closeButtonColors[type] && `color: ${closeButtonColors[type]};`}
`;

export const IconStyled = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  height: 20px;
  padding: 2px ${tokens.space} 2px 0;
  vertical-align: text-top;
  width: 20px;

  ${({ type }) => `color: ${iconColors[type]};`}
`;

export const contentStyles = css`
  flex-grow: 1;
  flex-shrink: 1;
  padding: 2px 0;
`;

const toastStyles = css`
  align-items: flex-start;
  border-radius: ${tokens.border.radius};
  border-style: solid;
  border-width: 1px;
  display: flex;
  font-weight: normal;
  line-height: ${AlertLineHeight};
  margin-bottom: ${stylers.spacer(2)};
  padding: ${tokens.spaceLg};
  position: relative;
  text-align: left;
  transition: opacity 0.3s ease-out;

  ${stylers.fontSize(0)};
  ${({ type }) => getStylesForType(type)}
  ${({ isSticky }) => isSticky && stickyStyles}
  ${({ type }) => type === "visually-hidden" && visuallyHidden}
`;

export default toastStyles;
