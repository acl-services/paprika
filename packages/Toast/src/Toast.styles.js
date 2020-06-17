import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import Button from "@paprika/button";
import { visuallyHidden } from "@paprika/stylers/lib/includes";
import Kinds from "./ToastKinds";

const backgroundColors = {
  [Kinds.SUCCESS]: tokens.color.greenLighten50,
  [Kinds.WARNING]: tokens.color.yellowLighten30,
  [Kinds.ERROR]: tokens.color.orangeLighten40,
  [Kinds.INFO]: tokens.color.cremeLighten5,
  [Kinds.LOCKED]: tokens.color.yellowLighten30,
};

// Calculated by brightness.
const borderColors = {
  [Kinds.SUCCESS]: "#c5e2d3",
  [Kinds.WARNING]: "#f2deaf",
  [Kinds.ERROR]: "#f2c2b8",
  [Kinds.INFO]: "#dbd8d0",
  [Kinds.LOCKED]: "#f2deaf",
};

const closeButtonColors = {
  [Kinds.SUCCESS]: tokens.color.greenDarken20,
  [Kinds.WARNING]: tokens.color.yellowDarken40,
  [Kinds.ERROR]: tokens.color.orangeLighten40,
  [Kinds.LOCKED]: tokens.color.yellowLighten30,
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
  [Kinds.SUCCESS]: tokens.color.green,
  [Kinds.WARNING]: tokens.color.yellowDarken10,
  [Kinds.ERROR]: tokens.color.orange,
  [Kinds.INFO]: tokens.color.blue,
  [Kinds.LOCKED]: tokens.color.yellowDarken10,
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
  ${({ kind }) => kind === Kinds.VISUALLY_HIDDEN && visuallyHidden}
`;

export default toastStyles;
