import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const collapsibleStyles = props => `
  box-sizing: border-box;
  color: ${tokens.color.black};
  display: block;
  ${stylers.fontSize()};
  line-height: 24px;
  width: 100%;

  > .aclui-raw-button {
    border-radius: ${tokens.borderRadius};
  }

  .aclui-collapsible__body {
    display: none;
    width: 100%;
    ${props.isCollapsed ? "display: none;" : "display: block;"}

    p {
      margin: 0 0 1.25rem 0;
    }
  }

  .aclui-collapsible__label {
    display: inline-block;
    width: 100%;
  }

  .aclui-collapsible__label--is-toggle-icon-only {
    width: auto;
  }

  .aclui-collapsible--icon-left {
    padding-right: ${tokens.spaceSm};
  }

  .aclui-collapsible--icon-right {
    float: right;
  }

  .aclui-collapsible__aria-label {
    ${stylers.visuallyHidden}
  }
`;

export default collapsibleStyles;
