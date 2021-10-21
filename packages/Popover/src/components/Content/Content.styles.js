import styled, { css } from "styled-components";
import { consts } from "../../Popover.styles";

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

export const ContentStyled = styled.div(
  ({ state, zIndex }) => css`
    position: fixed;
    transition: opacity ${consts.transition} ease;
    ${states[state]};
    z-index: ${zIndex};
  `
);
