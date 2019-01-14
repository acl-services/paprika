import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const defaultStyles = `
  background-color: ${tokens.color.white};
  border: 1px solid ${tokens.border.color};
  border-radius: ${tokens.card.borderRadius};
  box-shadow: ${tokens.shadow};
  color: ${tokens.textColor.default};
  padding: ${tokens.space} ${tokens.spaceLg};
`;

const darkStyles = `
  background-color: ${tokens.color.black};
  border: 1px solid ${tokens.color.black};
  border-radius: ${tokens.border.radius};
  color: ${tokens.color.white};
  padding: ${tokens.spaceSm} ${tokens.space};
`;

const CardStyled = styled.div`
  ${props => (props.isDark ? darkStyles : defaultStyles)};

  ${stylers.fontSize(-1)};
  ${stylers.lineHeight()};

  overflow: hidden;
`;

export default CardStyled;
