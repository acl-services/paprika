import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import { css } from "styled-components";

const headerDarkStyles = css`
  background-color: ${tokens.color.black};
  padding-bottom: ${stylers.spacer(2)};
  &::before {
    background-color: #323030;
    border-radius: 0 ${tokens.card.borderRadius} 0 0;
    content: "";
    display: block;
    height: ${stylers.spacer(7)};
    position: absolute;
    right: 0;
    top: 0;
    width: ${stylers.spacer(10)};
  }
`;

export const headerStyles = css`
  border-radius: ${tokens.card.borderRadius} ${tokens.card.borderRadius} 0 0;
  padding: ${stylers.spacer(2)} ${stylers.spacer(10)} 0 ${stylers.spacer(3)};
  position: relative;
  ${props => props.isDark && headerDarkStyles}
`;

export const headingStyle = css`
  color: ${props => (props.isDark ? tokens.color.white : tokens.color.black)};
  ${stylers.fontSize(3)};
  font-weight: normal;
  ${stylers.lineHeight(-1)};
  margin: 0;
`;

export const closeButtonStyle = css`
  ${stylers.lineHeight(-3)}
  position: absolute;
  right: ${stylers.spacer(2)};
  top: ${stylers.spacer(2)};
`;
