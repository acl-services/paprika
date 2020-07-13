import styled from "styled-components";
import OriginalHeading from "@paprika/heading";
import { spacer } from "@paprika/stylers/lib/helpers";
import tokens from "@paprika/tokens/lib/tokens";

const kind = {
  default: `background: ${tokens.color.white}; color: ${tokens.color.black};`,
  primary: `background: ${tokens.color.purple}; color: ${tokens.color.white};`,
};

export const Header = styled.div`
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

  ${props => kind[props.kind]}
`;

export const Heading = styled(OriginalHeading)`
  margin: 0 0 0 ${spacer(2)};
`;

export const CloseButtonWrapper = styled.div`
  border-left: 1px solid ${tokens.border.color};
  padding: ${spacer(1)};
`;
