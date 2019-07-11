import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const collapsibleStyles = props => `
  box-sizing: border-box;
  color: ${tokens.color.black};
  display: block;
  ${stylers.fontSize()};
  line-height: 24px;
  width: 100%;

  > .collapsible__label {
    border-radius: ${tokens.borderRadius};
  }

  .collapsible__body {
    display: none;
    width: 100%;
    ${props.isCollapsed ? "display: none;" : "display: block;"}

    p {
      margin: 0 0 1.25rem 0;
    }
  }

  .collapsible__label {
    display: inline-block;
    width: 100%;
  }

  .collapsible__label--is-toggle-icon-only {
    width: auto;
  }

  .collapsible--icon-left {
    padding-right: ${tokens.spaceSm};
  }

  .collapsible--icon-right {
    float: right;
  }
`;

export default collapsibleStyles;
