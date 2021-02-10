import styled, { css } from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";

export const Header = styled.div(
  () => css`
    align-items: flex-start;
    display: flex;
    padding: ${spacer(2)};
  `
);

// TODO: i am not sure if i want `align-self` here. see what it looks like with the real content
export const HeaderContent = styled.div(
  ({ isBroken }) => css`
    align-self: center;
    display: flex;
    flex: 1 1 auto;
    margin-right: ${spacer(2)};

    ${isBroken &&
    css`
      display: block;
    `}
  `
);

export const ExpandToggle = styled.div(
  ({ isCollapsed }) => css`
    flex: 0 0 32px;

    ${isCollapsed &&
    css`
      transform: rotate(180deg);
    `}
  `
);
