import styled from "styled-components";
import { fontSize, spacer } from "@paprika/stylers/lib/helpers";
import tokens from "@paprika/tokens/lib/tokens";

const kind = {
  default: `background: ${tokens.color.white}; color: ${tokens.color.black};`,
  primary: `background: ${tokens.color.purple}; color: ${tokens.color.white};`,
};

export const Wrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid ${tokens.border.color};
  box-shadow: ${tokens.shadow};
  box-sizing: border-box;
  display: flex;
  height: ${spacer(6)};
  justify-content: space-between;
  min-height: ${spacer(6)};
  padding: 0 ${spacer(2)};
  width: 100%;

  &:focus {
    outline: 0;
  }

  .heading--level-1,
  .heading--level-2,
  .heading--level-3,
  .heading--level-4,
  .heading--level-5 {
    ${fontSize()};
    font-weight: 400;
    margin: 0;
  }

  ${props => kind[props.kind]}
`;
