import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import { spacer } from "@paprika/stylers/lib/helpers";

export const Header = styled.div(
  () => css`
    background: ${tokens.color.white};
    border-radius: 6px 6px 0 0;
    box-shadow: inset 0px -1px 0px ${tokens.color.blackLighten60};
    display: flex;
    padding: ${spacer(2)} ${spacer(2)} 0 ${spacer(2)};
  `
);
