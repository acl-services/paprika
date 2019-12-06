import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import OriginalOverlay from "@paprika/overlay";
import OriginalHeader from "./components/Header";
import OriginalFooter from "./components/Footer";

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

export const Overlay = styled(OriginalOverlay)`
  align-items: center;
  display: flex;
  flex-direction: column;

  &::before,
  &::after {
    content: "";
    display: block;
    flex: 0 1 ${tokens.modal.top};
  }
`;

const mapShirtSizesToValues = {
  [ShirtSizes.SMALL]: tokens.modal.sizes.sm,
  [ShirtSizes.MEDIUM]: tokens.modal.sizes.md,
  [ShirtSizes.LARGE]: tokens.modal.sizes.lg,
};

export const Dialog = styled.div`
  background-color: ${tokens.modal.backgroundColor};
  border-radius: ${tokens.modal.borderRadius};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  overflow: auto;
  transition: all ${tokens.overlay.animationDuration}ms ease;
  width: 100%;
  ${({ state }) => states[state]};
  ${stylers.boxSizingStyles};
`;

export const Wrapper = styled.div`
  flex: 0 1 auto;
  margin: ${tokens.modal.margin};
  max-height: calc(100% - ${tokens.modal.margin} - ${tokens.modal.margin});
  max-width: calc(100% - ${tokens.modal.margin} - ${tokens.modal.margin});
  width: ${({ size }) => mapShirtSizesToValues[size] || mapShirtSizesToValues[ShirtSizes.MEDIUM]};
  ${stylers.z(1)};
`;

export const Header = styled(OriginalHeader)`
  flex: none;
`;

export const ContentWrapper = styled.div`
  overflow-y: auto;
`;

export const Footer = styled(OriginalFooter)`
  flex: none;
`;
