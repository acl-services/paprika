import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const incompleteHeight = `${Number.parseInt(tokens.space, 10) * 5 + 1}px`;

export const itemStyles = css`
  border-bottom: 1px solid ${tokens.border.color};
  color: ${tokens.textColor.subtle};
  max-width: calc(100% - 36px); // 36px = indicatorSize + margin-right

  [role="button"] {
    font-weight: bold;
    margin-left: -${tokens.spaceSm};
    padding: ${tokens.space} ${tokens.spaceSm};
    width: calc(100% + ${tokens.spaceSm});
  }
`;

export const itemLabelStyles = css`
  ${stylers.truncateText}
`;

export const incompleteStyles = css`
  ${stylers.fontSize()}
  ${stylers.truncateText}

  border-bottom: 1px solid ${tokens.border.color};
  flex-grow: 1;
  font-weight: bold;
  height: ${incompleteHeight};
  line-height: ${incompleteHeight};
`;
