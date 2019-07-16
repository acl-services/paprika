import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const collapsibleStyles = props => `
  ${stylers.fontSize()}
  box-sizing: border-box;
  color: ${tokens.color.black};
  display: block;
  line-height: ${stylers.spacer(3)};
  width: 100%;

  .collapsible__label {
    ${stylers.inlineBlockStyle}
    border-radius: ${tokens.border.radius};
    width: 100%;
  }

  .collapsible__label--is-toggle-icon-only {
    width: auto;
  }

  [data-pka-anchor="collapsible.icon"] svg {
    vertical-align: -0.1em;
  }

  .collapsible--icon-left {
    padding-right: ${tokens.spaceSm};
  }

  .collapsible--icon-right {
    float: right;
  }

  .collapsible__body {
    width: 100%;
    ${props.isCollapsed ? "display: none;" : "display: block;"}
  }
`;

export default collapsibleStyles;
