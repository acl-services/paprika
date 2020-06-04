import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens/lib/tokens";

const compactStyles = css`
  padding: ${stylers.spacer(2)};
`;

export const commonStyles = styled.div`
  align-items: center;
  background: ${tokens.color.blackLighten80};
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  padding: ${stylers.spacer(2)} ${stylers.spacer(3)};
  position: relative;
  transition: opacity 0.3s ease-in;
  width: 100%;
`;

export const Footer = styled(commonStyles)`
  ${props => {
    const height = props.height ? props.height : stylers.spacer(9);
    const compact = props.isCompact ? compactStyles : "";

    return `
  ${height};
  ${compact};
  `;
  }}
`;
