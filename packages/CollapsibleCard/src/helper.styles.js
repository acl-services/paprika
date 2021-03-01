import tokens from "@paprika/tokens";
import { POSITIONS } from "./CollapsibleCard";

export default function getBorderRadius(position, isCollapsed, isHeader) {
  const isInAGroup = position !== null;
  const isExpanded = !isCollapsed;
  const innerBorderRadius = tokens.card.borderRadius; // 6px
  const outerBorderRadius = "7px";

  if (isInAGroup) {
    if (position === POSITIONS.FIRST) {
      return `${innerBorderRadius} ${innerBorderRadius} 0 0`;
    }

    if (position === POSITIONS.MIDDLE) {
      return `unset`;
    }

    if (position === POSITIONS.LAST) {
      if (isCollapsed) {
        return `0 0 ${innerBorderRadius} ${innerBorderRadius}`;
      }
      return `unset`;
    }
  } else if (isExpanded && isHeader) {
    return `${innerBorderRadius} ${innerBorderRadius} 0 0`;
  }

  if (isHeader) {
    return innerBorderRadius;
  }

  return outerBorderRadius;
}
