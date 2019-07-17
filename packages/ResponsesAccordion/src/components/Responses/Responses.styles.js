import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const responsesStyles = css`
  ${stylers.lineHeight()}

  color: ${tokens.textColor.subtle};
  margin: ${tokens.space} 0;
  padding: 0;

  dt {
    ${stylers.fontSize(-1)}
  
    font-weight:bold;
    margin-bottom: ${tokens.space};
  }

  dd {
    margin: 0 0 ${stylers.spacer(3)} 0;
    padding: 0;

    p {
      margin: ${tokens.space} 0;
    }
  }
`;

export default responsesStyles;
