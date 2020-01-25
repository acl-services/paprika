import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import OriginalHeader from "./components/Header";

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

export const Wrapper = styled.div`
  background-color: ${tokens.backgroundColor.level0};
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: all ${tokens.overlay.animationDuration}ms ease;
  ${({ state }) => states[state]};
`;

export const Header = styled(OriginalHeader)`
  flex: none;
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  overflow-y: auto;

  &:focus {
    ${stylers.focusRing.subtle(true)};
  }
`;
