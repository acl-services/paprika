import styled from "styled-components";
import Collapsible from "@paprika/collapsible";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const incompleteHeight = `${Number.parseInt(tokens.space, 10) * 5 + 1}px`;

export const Item = styled(Collapsible)`
  border-bottom: 1px solid ${tokens.border.color};
  color: ${tokens.textColor.subtle};
  max-width: calc(100% - 36px); /* 36px = indicatorSize + margin-right */

  [role="button"] {
    font-weight: bold;
    margin-left: -${tokens.spaceSm};
    padding: ${tokens.space} ${tokens.spaceSm};
    width: calc(100% + ${tokens.spaceSm});
  }
`;

export const ItemLabel = styled.div`
  ${stylers.truncateText}
`;

export const Incomplete = styled.div`
  ${stylers.fontSize()}
  ${stylers.truncateText}

  border-bottom: 1px solid ${tokens.border.color};
  flex-grow: 1;
  font-weight: bold;
  height: ${incompleteHeight};
  line-height: ${incompleteHeight};
`;
