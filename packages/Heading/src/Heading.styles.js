import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const headingStyles = () => `
  align-items: center;
  color: inherit;
  display: flex;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.2;
  margin: ${stylers.spacer(2)} 0;

  &:focus {
    outline: none;
  }

  &.heading--level-1 {
    ${stylers.fontSize(7)}
    ${stylers.lineHeight(-2)}
    font-weight: 400;
  }

  &.heading--level-2 {
    ${stylers.fontSize(5)}
    ${stylers.lineHeight(-2)}
  }

  &.heading--level-3 {
    ${stylers.fontSize(3)}
  }

  &.heading--level-4 {
    ${stylers.fontSize(1)}
  }

  &.heading--level-5 {
    ${stylers.fontSize()}
    margin: ${tokens.space} 0;
  }

  &.heading--level-6 {
    ${stylers.fontSize(-1)}
    margin: ${tokens.space} 0;
  }

  &.heading--has-underline {
    border-bottom: 1px solid ${tokens.border.color};
    &.heading--level-1 {
      padding-bottom: ${tokens.space};
    }
    &.heading--level-2,
    &.heading--level-3,
    &.heading--level-4 {
      padding-bottom: ${tokens.spaceSm};
    }
    &.heading--level-5,
    &.heading--level-6 {
      padding-bottom: 2px;
    }
  }

  &.heading--is-hidden {
    ${stylers.visuallyHidden}
  }

  &.heading--is-light {
    font-weight: 400;
  }

  .heading__divider {
    border-bottom: 2px solid ${tokens.color.blackLighten70};
    flex: 1;
    margin-left: ${tokens.space};
  }
`;

export default headingStyles;
