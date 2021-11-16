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

export const CloseButtonStyled = styled(Button.Close)(
  ({ kind }) => css`
    flex-grow: 0;
    flex-shrink: 0;
    margin-bottom: -6px;
    margin-left: ${tokens.space};
    margin-right: -7px;
    margin-top: -6px;
    min-height: 0;

    ${closeButtonColors[kind] && `color: ${closeButtonColors[kind]};`}
  `
);

export const IconStyled = styled.div(
  ({ kind }) => css`
    color: ${iconColors[kind]};
    flex-grow: 0;
    flex-shrink: 0;
    margin: 1px ${tokens.space} 0 0;

    ${stylers.fontSize(2)}
  `
);

export const Content = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
`;

export const Toast = styled.div(
  ({ isFixed, kind, zIndex, shouldRender }) => css`
    align-items: flex-start;
    background-color: ${backgroundColors[kind]};
    border-color: ${borderColors[kind]};
    border-radius: ${tokens.border.radius};
    border-style: solid;
    border-width: 1px;
    color: ${tokens.color.black};
    display: flex;
    font-weight: normal;
    margin-bottom: ${stylers.spacer(2)};
    min-height: ${stylers.spacer(3)};
    padding: ${tokens.spaceLg} ${tokens.spaceLg} 10px ${tokens.spaceLg};
    position: relative;
    text-align: left;
    transition: opacity 0.3s ease-out;
    word-break: break-word;
    z-index: ${zIndex};

    ${stylers.fontSize()} 
    ${stylers.lineHeight()} 
    ${isFixed ? fixedStyles : null}
    ${!shouldRender || kind === types.toastKinds.VISUALLY_HIDDEN ? visuallyHidden : null};
  `
);
