import tokens from "@paprika/tokens";
import { POSITIONS } from "./CollapsibleCard";

export default function getBorderRadius(position, isCollapsed, isHeader) {
  const isInAGroup = position !== null;
  const isExpanded = !isCollapsed;

  if (isInAGroup) {
    if (position === POSITIONS.FIRST) {
      return `${tokens.card.borderRadius} ${tokens.card.borderRadius} 0 0`;
    }

    if (position === POSITIONS.MIDDLE) {
      return `unset`;
    }

    if (position === POSITIONS.LAST) {
      if (isCollapsed) {
        return `0 0 ${tokens.card.borderRadius} ${tokens.card.borderRadius}`;
      }
      return `unset`;
    }
  } else if (isExpanded && isHeader) {
    return `${tokens.card.borderRadius} ${tokens.card.borderRadius} 0 0`;
  }

  return tokens.card.borderRadius;
}
