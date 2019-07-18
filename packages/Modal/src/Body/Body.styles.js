import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import { css } from "styled-components";

const modalBodyStyles = css`
  background-color: ${tokens.color.white};
  padding: ${stylers.spacer(3)};

  p {
    ${stylers.lineHeight()}
  }

  > p:last-child {
    margin-bottom: 0;
  }
`;

export default modalBodyStyles;
