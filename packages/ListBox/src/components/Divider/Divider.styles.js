import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const Divider = styled.li(
  ({ isDisabled }) => css`
    border: 2px solid transparent;
    color: ${isDisabled ? tokens.color.blackLighten60 : tokens.color.blackLighten20};
    padding: 14px 0 2px ${tokens.spaceLg};
    width: 100%;
    ${stylers.fontSize(-1)};
  `
);
