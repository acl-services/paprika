import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const metadataStyles = css`
  color: ${tokens.color.blackLighten20};
  ${stylers.fontSize(-2)};
`;

export default metadataStyles;
