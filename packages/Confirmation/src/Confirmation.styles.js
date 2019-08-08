import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const ConfirmationStyles = css`
  padding: ${stylers.spacer(2)};

  .dropdown-menu__confirmation-header {
    ${stylers.fontSize()};
    font-weight: bold;
  }

  .dropdown-menu__confirmation-description {
    ${stylers.lineHeight()}
    margin: ${tokens.space} 0;
  }

  .dropdown-menu__confirmation-footer {
    margin-top: ${stylers.spacer(2)};

    span[role="button"] {
      margin-right: ${tokens.space};
    }
  }
`;

export default ConfirmationStyles;
