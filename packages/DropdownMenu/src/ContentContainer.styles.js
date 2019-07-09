import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const ContentContainerStyles = styled.div`
  background: ${tokens.color.white};
  border: 1px solid ${tokens.border.color};
  border-radius: ${tokens.popover.borderRadius};
  box-shadow: ${tokens.popover.shadow};
  margin-left: ${stylers.spacer(2)};
  max-width: 320px;
  min-width: 150px;
  padding: ${tokens.space} 0;
  text-align: left;

  ${({ isOpen }) => {
    if (isOpen === false) {
      return { opacity: 0 };
    }
  }}
`;

export default ContentContainerStyles;
