import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const ContentContainerStyles = styled.div`
  background: ${tokens.color.white};
  border: 1px solid ${tokens.border.color};
  border-radius: ${tokens.popover.borderRadius}
  box-shadow: ${tokens.popover.shadow}
  max-width: 350px;
  min-width: 150px;
  padding: ${stylers.spacer(2)}
  text-align: left;
`;

export default ContentContainerStyles;
