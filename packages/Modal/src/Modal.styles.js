import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import { animationDuration } from "./helpers/tokens";
import OriginalHeader from "./components/Header";

/*
Some comments according modal positioning:
1. Modals always have have margin 24px (to have some space from screen edges)
2. We do NOT do vertical centering.
   Vertical centering leads to visual jumping on opening (one by one or one after another) modals with different heights.
   Instead ...
3. Every modal opens on 124px from top edge of screen (100px flex block + 24px fixed margin (see 1))
4. While we add more content to modal, it expands
5. It expands till we have symmetric 124px from bottom edge of screen
6. If modal becomes bigger and there is no space for 124px top and 124px bottom indents, indents (top+bottom) start to decrease __proportionally__
7. Indents decrease till there is no more space (except fixed margins).
8. If there is no more space for expanding (dymanic idents are exhausted) modal enables internal scroll for content
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

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before,
  &::after {
    content: "";
    display: block;
    flex: 0 1 ${tokens.modal.top};
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${tokens.modal.backdrop.backgroundColor};
  transition: all ${animationDuration}ms ease;
  ${({ state }) => states[state]};
`;

const mapShirtSizesToValues = {
  [ShirtSizes.SMALL]: tokens.modal.sizes.sm,
  [ShirtSizes.MEDIUM]: tokens.modal.sizes.md,
  [ShirtSizes.LARGE]: tokens.modal.sizes.lg,
};

export const Wrapper = styled.div`
  z-index: 1;
  width: calc(100% - ${tokens.modal.margin} - ${tokens.modal.margin});
  max-height: calc(100% - ${tokens.modal.margin} - ${tokens.modal.margin});
  max-width: ${({ size }) => mapShirtSizesToValues[size] || mapShirtSizesToValues[ShirtSizes.MEDIUM]};
  flex: 0 1 auto;
  background-color: ${tokens.backgroundColor.level0};
  margin: ${tokens.modal.margin};
  transition: all ${animationDuration}ms ease;
  ${({ state }) => states[state]};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Header = styled(OriginalHeader)`
  flex: none;
`;

export const ContentWrapper = styled.div`
  overflow-y: auto;
`;
