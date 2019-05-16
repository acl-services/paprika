import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const headerStyles = props => `
  border-radius: ${tokens.card.borderRadius} ${tokens.card.borderRadius} 0 0;
  padding: ${stylers.spacer(2)} ${stylers.spacer(10)} 0 ${stylers.spacer(3)};
  position: relative;

  ${props.isDark && `
    background-color: ${tokens.color.black};
    padding-bottom: ${stylers.spacer(2)};
    &::before {
      content: '';
      background-color: #323030;
      border-radius: 0 ${tokens.card.borderRadius} 0 0;
      display: block;
      height: ${stylers.spacer(7)};
      position: absolute;
      right: 0;
      top: 0;
      width: ${stylers.spacer(10)};
    }
  `}
`;

export const headingStyle = props => `
  color: ${props.isDark ? tokens.color.white : tokens.color.black};
  ${stylers.fontSize(3)};
  font-weight: normal;
  ${stylers.lineHeight(-1)};
  margin: 0;
`;

export const closeButtonStyle = props => `
  ${stylers.lineHeight(-3)}
  position: absolute;
  right: ${stylers.spacer(2)};
  top: ${stylers.spacer(2)};

  ${props.isDark && `
    .icon::before {
      color: ${tokens.color.blackLighten50};
    }
    :hover {
      background-color: rgba(255, 255, 255, 0.1);
      .icon::before {
        color: ${tokens.color.white};
      }
    }
    :active {
      background-color: rgba(255, 255, 255, 0.2);
      .icon::before {
        color: ${tokens.color.white};
      }
    }
  `}
`;
