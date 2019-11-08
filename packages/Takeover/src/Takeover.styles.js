import { css } from "styled-components";
import tokens from "@paprika/tokens";
import { animationDuration } from "./tokens";

const openedCss = css`
  opacity: 1;
`;

const closedCss = css`
  opacity: 0;
`;

const states = {
  entering: openedCss,
  entered: openedCss,
  exiting: closedCss,
  exited: closedCss,
};

export const wrapper = css`
  background-color: ${tokens.backgroundColor.level0};
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: all ${animationDuration}ms ease;
  ${({ state }) => states[state]};
`;

export const header = css`
  flex: none;
`;

export const contentWrapper = css`
  flex-grow: 1;
  overflow-y: auto;
`;
