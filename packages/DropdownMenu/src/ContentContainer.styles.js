import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const ContentContainerStyles = styled.div`
  background: ${tokens.color.white};
  border: 1px solid ${tokens.border.color};
  border-radius: ${tokens.popover.borderRadius};
  box-shadow: ${tokens.popover.shadow};
  max-width: 320px;
  min-width: 150px;
  padding: ${tokens.space} 0;
  text-align: left;

  // this is positioning, not sure if good way to do it
  margin-left: ${stylers.spacer(2)};
`;

export default ContentContainerStyles;
