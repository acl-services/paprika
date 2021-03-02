import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const Divider = styled.li(
  ({ isDisabled }) => css`
    align-items: center;
    border: 2px solid transparent;
    color: ${isDisabled ? tokens.color.blackLighten60 : tokens.color.blackLighten20};
    display: flex;
    justify-content: center;
    margin-bottom: ${tokens.spaceSm};
    padding: ${tokens.spaceSm};
    width: 100%;
    ${stylers.fontSize(-1)};

    &:after {
      background: ${isDisabled ? tokens.color.blackLighten70 : tokens.color.blackLighten60};
      content: "";
      display: inline-block;
      flex-grow: 1;
      height: 1px;
      margin-left: ${tokens.space};
    }
  `
);
