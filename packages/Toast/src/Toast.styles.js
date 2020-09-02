import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import Button from "@paprika/button";
import { visuallyHidden } from "@paprika/stylers/lib/includes";
import * as types from "./types";

const backgroundColors = {
  [types.toastKinds.SUCCESS]: tokens.color.greenLighten50,
  [types.toastKinds.WARNING]: tokens.color.yellowLighten30,
  [types.toastKinds.ERROR]: tokens.color.orangeLighten40,
  [types.toastKinds.INFO]: tokens.color.cremeLighten5,
  [types.toastKinds.LOCKED]: tokens.color.yellowLighten30,
};

// Calculated by brightness.
const borderColors = {
  [types.toastKinds.SUCCESS]: "#c5e2d3",
  [types.toastKinds.WARNING]: "#f2deaf",
  [types.toastKinds.ERROR]: "#f2c2b8",
  [types.toastKinds.INFO]: "#dbd8d0",
  [types.toastKinds.LOCKED]: "#f2deaf",
};

const closeButtonColors = {
  [types.toastKinds.SUCCESS]: tokens.color.greenDarken20,
  [types.toastKinds.WARNING]: tokens.color.yellowDarken40,
  [types.toastKinds.ERROR]: tokens.color.orangeLighten40,
  [types.toastKinds.LOCKED]: tokens.color.yellowLighten30,
};

const fixedStyles = css`
  left: 50%;
  max-width: 675px;
  position: fixed;
  top: ${stylers.spacer(2)};
  transform: translateX(-50%);
  width: calc(100% - ${stylers.spacer(4)});
`;

const iconColors = {
  [types.toastKinds.SUCCESS]: tokens.color.green,
  [types.toastKinds.WARNING]: tokens.color.yellowDarken10,
  [types.toastKinds.ERROR]: tokens.color.orange,
  [types.toastKinds.INFO]: tokens.color.blue,
  [types.toastKinds.LOCKED]: tokens.color.yellowDarken10,
};

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
  margin: 1px ${tokens.space} 0 0;

  ${stylers.fontSize(2)}
`;

export const contentStyles = css`
  flex-grow: 1;
  flex-shrink: 1;
`;

const toastStyles = css`
  align-items: flex-start;
  background-color: ${({ kind }) => backgroundColors[kind]};
  border-color: ${({ kind }) => borderColors[kind]};
  border-radius: ${tokens.border.radius};
  border-style: solid;
  border-width: 1px;
  color: ${tokens.color.black};
  display: flex;
  font-weight: normal;
  margin-bottom: ${stylers.spacer(2)};
  padding: ${tokens.spaceLg};
  position: relative;
  text-align: left;
  transition: opacity 0.3s ease-out;
  z-index: ${({ zIndex }) => zIndex};

  ${stylers.fontSize()}
  ${stylers.lineHeight()}
  ${({ isFixed }) => isFixed && fixedStyles}
  ${({ kind }) => kind === types.toastKinds.VISUALLY_HIDDEN && visuallyHidden}
`;

export default toastStyles;
