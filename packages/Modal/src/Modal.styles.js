import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import * as types from "./types";

/*
Some comments concerning modal positioning:
1. Modals always have margin 24px (to have some space from screen edges)
2. We do NOT do vertical centering.
   Vertical centering leads to visual jumping on opening multiple (one by one or one after another) modals with different heights.
   Instead ...
3. Every modal opens on 124px from top edge of screen (100px flex block + 24px fixed margin (see 1))
4. While we add more content to modal, it expands
5. It expands till we have symmetric 124px from bottom edge of screen
6. If modal becomes bigger and there is no space for 124px top and 124px bottom indents, indents (top+bottom) start to decrease __proportionally__
7. Indents decrease till there is no more space (except fixed margins).
8. If there is no more space for expanding (dynamic indents are exhausted) modal enables internal scroll for content
*/

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

export const FocusLock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;

  &::before,
  &::after {
    content: "";
    display: block;
    flex-basis: ${tokens.modal.top};
  }
`;

const mapShirtSizesToValues = {
  [types.SMALL]: tokens.modal.sizes.sm,
  [types.MEDIUM]: tokens.modal.sizes.md,
  [types.LARGE]: tokens.modal.sizes.lg,
};

export const Dialog = styled.div(
  ({ state }) => css`
    background-color: ${tokens.modal.backgroundColor};
    border-radius: ${tokens.modal.borderRadius};
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    overflow: auto;
    transition: all ${tokens.overlay.animationDuration}ms ease;
    width: 100%;
    ${states[state]};
    ${stylers.boxSizingStyles};
  `
);

export const Modal = styled.div(
  ({ size }) => css`
    margin: ${tokens.modal.margin};
    max-height: calc(100% - ${tokens.modal.margin} - ${tokens.modal.margin});
    max-width: calc(100% - ${tokens.modal.margin} - ${tokens.modal.margin});
    width: ${mapShirtSizesToValues[size] || mapShirtSizesToValues[types.MEDIUM]};
    ${stylers.z(1)};
  `
);
