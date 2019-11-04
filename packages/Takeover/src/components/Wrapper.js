import styled, { css } from "styled-components";
import tokens from '@paprika/tokens';
import { animationDuration } from "../tokens";

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

const Wrapper = styled.div`
  background-color: ${tokens.backgroundColor.level0};
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

const AnimatedWrapper = styled(Wrapper)`
  transition: all ${animationDuration}ms ease;
  ${({ state }) => states[state]};
`;

export default AnimatedWrapper;
