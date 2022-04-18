import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import { spacer } from "@paprika/stylers/lib/helpers";
import OriginalHeader from "./components/Header/Header";

export const FocusLock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;

  &::before,
  &::after {
    content: "";
    display: block;
  }
`;

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

export const Takeover = styled.div(
  ({ zIndex, state, isFullWidth }) => css`
    background-color: ${tokens.backgroundColor.level0};
    border: 1px ${tokens.border.color} solid;
    border-radius: ${tokens.card.borderRadius};
    bottom: 0;
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.12), 0 0px 6px 0 rgba(0, 0, 0, 0.16);
    display: flex;
    flex-direction: column;
    left: 0;
    margin: ${spacer(3)};
    ${states[state]};
    position: fixed;
    right: 0;
    top: 0;
    transition: all ${tokens.overlay.animationDuration}ms ease;
    z-index: ${zIndex};
    ${!isFullWidth &&
      ` 
        max-width: 1248px;
        @media only screen and (min-width: 1280px) {
        margin: ${spacer(3)} auto;
      }
      `}
  `
);

export const Header = styled(OriginalHeader)`
  flex: none;
`;

export const Content = styled.div`
  flex-grow: 1;
  height: 100%;
  overflow-y: auto;
  position: relative;
  &:focus {
    ${stylers.focusRing.subtle(true)};
  }
`;
