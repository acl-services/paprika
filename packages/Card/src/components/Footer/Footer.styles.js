import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const footerStyles = styled.div`
  align-items: center;
  background: ${tokens.color.blackLighten70};
  border-bottom: 1px solid ${tokens.color.blackLighten60};
  border-radius: 0 0 6px 6px;
  box-sizing: border-box;
  color: ${tokens.color.black};
  display: flex;
  height: ${stylers.spacer(6)};
  justify-content: space-between;
  overflow: hidden;
  padding: 0 ${stylers.spacer(2)};
  ${stylers.fontSize(-1)};
  ${stylers.truncateText}
`;
