import { css } from "styled-components";
import tokens from "@paprika/tokens/lib/tokens";
import stylers from "@paprika/stylers";

export const button = css`
  color: ${tokens.color.blue};
  font-size: ${stylers.fontSize(-1)};
  font-weight: bold;
`;
