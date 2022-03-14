import styled, { css } from "styled-components";
import OriginalHeading from "@paprika/heading";
import { spacer } from "@paprika/stylers/lib/helpers";
import tokens from "@paprika/tokens/lib/tokens";

const kinds = {
  DEFAULT: `background: ${tokens.color.white}; color: ${tokens.color.black};`,
  PRIMARY: `background: ${tokens.color.purple}; color: ${tokens.color.white};`,
};

export const Header = styled.div(
  ({ kind }) => css`
    align-items: center;
    box-shadow: ${tokens.shadow};
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    min-height: ${spacer(6)};
    width: 100%;
    z-index: 1;

    &:focus {
      outline: 0;
    }

    ${kinds[kind]}
  `
);

export const Heading = styled(OriginalHeading)`
  margin: 0;
  padding: 18px 0 17px ${spacer(3)};
`;

export const CloseButton = styled.div`
  border-left: 1px solid ${tokens.border.color};
  padding: ${spacer(2)};
`;

export const HeaderRightContainer = styled.div`
  align-items: stretch;
  display: flex;
  height: 100%;
  > div {
    align-items: center;
    display: flex;
  }
`;

export const ToolContainer = styled.div(
  () => css`
    padding-right: ${spacer(2)};
    [data-pka-anchor="button"] {
      margin-right: ${spacer(1)};
      &:last-of-type {
        margin-left: 0;
      }
      &:first-of-type {
        margin-left: ${spacer(1)};
      }
    }
  `
);
