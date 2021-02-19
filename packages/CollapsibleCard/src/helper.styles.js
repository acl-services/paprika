import tokens from "@paprika/tokens";

export default function getBorderRadius(isFirstRow, isMiddleRow, isLastRow, isCollapsed, isHeader) {
  const isInAGroup = isFirstRow !== null;
  const isExpanded = !isCollapsed;

  if (isInAGroup) {
    if (isFirstRow) {
      return `${tokens.card.borderRadius} ${tokens.card.borderRadius} 0 0`;
    }

    if (isMiddleRow) {
      return `unset`;
    }

    if (isLastRow) {
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
