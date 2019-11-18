import { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens/lib/tokens";

const compactStyles = css`
  padding: ${stylers.spacer(2)};
`;

export const footerCSS = css`
  align-items: center;
  background: ${tokens.color.blackLighten80};
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  height: ${props => (props.height ? props.height : stylers.spacer(9))};
  padding: ${stylers.spacer(2)} ${stylers.spacer(3)};
  right: 0;
  transition: opacity 0.3s ease-in;
  width: 100%;
  ${props => (props.isCompact ? compactStyles : "")}
  ${props => {
    return props.isSticky ? "position: absolute;" : "position: relative;";
  }}
`;
