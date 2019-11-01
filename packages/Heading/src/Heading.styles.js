import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

// default heading styles

const defaultHeadingStyles = `
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

  .heading__divider {
    border-bottom: 2px solid ${tokens.color.blackLighten70};
    flex: 1;
    margin-left: ${tokens.space};
  }
`;

// heading styles

const heading = {
  HEADING1: `
    ${stylers.fontSize(7)}
    ${stylers.lineHeight(-2)}
    font-weight: 400;`,

  HEADING2: `
    ${stylers.fontSize(5)}
    ${stylers.lineHeight(-2)}`,

  HEADING3: `
     ${stylers.fontSize(3)}`,

  HEADING4: `
     ${stylers.fontSize(1)}`,

  HEADING5: `
    ${stylers.fontSize()}
    margin: ${tokens.space} 0;`,

  HEADING6: `
    ${stylers.fontSize(-1)}
    margin: ${tokens.space} 0;
  }`,
};

// underline
const underline = `
    border-bottom: 1px solid ${tokens.border.color};
    h1 {
      padding-bottom: ${tokens.space};
    }
    h2,
    h3,
    h4 {
      padding-bottom: ${tokens.spaceSm};
    }
    h5,
    h6 {
      padding-bottom: 2px;
    }`;

// hidden

const hidden = `
${stylers.visuallyHidden}
`;

// light

const light = `
font-weight: 400;
`;

const headingStyles = props => `
${defaultHeadingStyles}
${heading[`HEADING${props.level}`]}
${props.isHidden ? hidden : ""}
${props.hasUnderline ? underline : ""}
${props.isLight ? light : ""}
`;

export default headingStyles;
