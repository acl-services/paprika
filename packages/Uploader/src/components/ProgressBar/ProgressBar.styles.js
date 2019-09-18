import { css } from "styled-components";
import tokens from "@paprika/tokens";

export default {
  container: css`
    background: ${tokens.backgroundColor.level0};
    border-radius: ${tokens.spaceSm};
    height: 6px;
    width: 100%;
  `,
  progress: css`
    border-radius: ${tokens.spaceSm};
    height: 100%;
    ${({ progress = 0, hasError, hasFinished }) => {
      let background = tokens.color.purple;

      if (hasFinished || hasError) {
        background = hasFinished ? tokens.color.green : tokens.color.orange;
      }

      return `
        width: ${progress}%;
        background: ${background};
      `;
    }}
  `,
};
