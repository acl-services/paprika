import styled, { css } from "styled-components";
import tinycolor from "tinycolor2";

import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import Button from "@paprika/button";
import { visuallyHidden } from "@paprika/stylers/lib/includes";

import Kinds from "./ToastKinds";

const primaryColors = {
  [Kinds.SUCCESS]: tokens.color.greenLighten50,
  [Kinds.WARNING]: tokens.color.yellowLighten30,
  [Kinds.ERROR]: tokens.color.orangeLighten40,
  [Kinds.INFO]: tokens.color.cremeLighten5,
  [Kinds.LOCKED]: tokens.color.yellowLighten30,
};

const iconColors = {
  [Kinds.SUCCESS]: tokens.color.green,
  [Kinds.WARNING]: tokens.color.yellowDarken10,
  [Kinds.ERROR]: tokens.color.orange,
  [Kinds.INFO]: tokens.color.blue,
  [Kinds.LOCKED]: tokens.color.yellowDarken10,
};

const closeButtonColors = {
  [Kinds.SUCCESS]: tokens.color.greenDarken20,
  [Kinds.WARNING]: tokens.color.yellowDarken40,
  [Kinds.ERROR]: tokens.color.orangeLighten40,
  [Kinds.LOCKED]: tokens.color.yellowLighten30,
};

function getStylesForKind(kind) {
  if (kind === Kinds.VISUALLY_HIDDEN) return "";

  return css`
    background-color: ${primaryColors[kind]};
    border-color: ${tinycolor(primaryColors[kind])
      .darken(10)
      .toString()};
    color: ${tinycolor(primaryColors[kind]).toHsl().l > 0.7 ? tokens.color.black : tokens.color.white};
  `;
}

const fixedStyles = css`
  left: 50%;
  max-width: 675px;
  position: fixed;
  top: ${stylers.spacer(2)};
  transform: translateX(-50%);
  width: calc(100% - #{${stylers.spacer(4)}});
`;

export const CloseButtonStyled = styled(Button.Close)`
  flex-grow: 0;
  flex-shrink: 0;
  margin-left: ${tokens.space};
  min-height: 0;

  ${({ kind }) => closeButtonColors[kind] && `color: ${closeButtonColors[kind]};`}
`;

export const IconStyled = styled.div`
  color: ${({ kind }) => iconColors[kind]};
  flex-grow: 0;
  flex-shrink: 0;
  padding-right: ${tokens.space};
  padding-top: 1px;

  ${stylers.fontSize(2)}
`;

export const contentStyles = css`
  flex-grow: 1;
  flex-shrink: 1;
`;

const toastStyles = css`
  align-items: flex-start;
  border-radius: ${tokens.border.radius};
  border-style: solid;
  border-width: 1px;
  display: flex;
  font-weight: normal;
  margin-bottom: ${stylers.spacer(2)};
  padding: ${tokens.spaceLg};
  position: relative;
  text-align: left;
  transition: opacity 0.3s ease-out;

  ${stylers.fontSize()}
  ${stylers.lineHeight()}
  ${({ kind }) => getStylesForKind(kind)}
  ${({ isFixed }) => isFixed && fixedStyles}
  ${({ kind }) => kind === "visually-hidden" && visuallyHidden}
`;

export default toastStyles;
