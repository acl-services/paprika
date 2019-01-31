import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const disabledStyles = `
  cursor: not-allowed;

  &:focus {
    box-shadow: none;
  }
`;

const RawButtonStyled = styled.span`
  ${stylers.inlineBlockStyle};
  cursor: pointer;

  &:focus {
    box-shadow: ${tokens.highlight.active.withBorder.boxShadow};
    outline: none;
  }

  ${props => (props.isDisabled ? disabledStyles : null)};
`;

export default RawButtonStyled;
