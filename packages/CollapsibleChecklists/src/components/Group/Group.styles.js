import tokens from "@paprika/tokens";
import { disabledStyle } from "../helpers.styles";

const groupStyles = props => `
  .collapsible__heading {
    align-items: center;
    background-color: ${tokens.color.cremeLighten5};
    border-bottom: 1px solid ${tokens.color.blackLighten60};
    display: flex;
    padding: ${tokens.spaceSm};

    input[type="checkbox"] {
      margin-right: ${tokens.space};
    }

    ${props.isDisabled ? disabledStyle : ""};
  }
`;

export default groupStyles;
