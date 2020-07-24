import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const footerStyles = styled.div`
  align-items: center;
  background: ${tokens.color.blackLighten70};
  border-radius: 0 0 6px 6px;
  box-sizing: border-box;
  color: ${tokens.color.black};
  display: flex;
  ${stylers.fontSize(-1)};
  min-height: ${stylers.spacer(6)};
  padding-left: ${stylers.spacer(2)};
`;
