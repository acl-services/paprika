import tokens from "@paprika/tokens";

const rotate = {
  top: 180,
  right: 270,
  bottom: 0,
  left: 90,
};

const edgePadding = Number.parseInt(tokens.space, 10);

const getAdjustedContentCoordinates = ({ x, y, contentRect, targetRect, scrollRect, align, offset }) => {
  const viewport = {
    width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
  };
  const boundary = {
    top: scrollRect ? scrollRect.top : 0,
    right: scrollRect ? Math.min(scrollRect.right, viewport.width) : viewport.width,
    bottom: scrollRect ? Math.min(scrollRect.bottom, viewport.height) : viewport.height,
    left: scrollRect ? scrollRect.left : 0,
  };

  const alignVert = ["bottom", "top"].includes(align);
  const isOnRightSide = targetRect.x + targetRect.width / 2 > boundary.left + (boundary.right - boundary.left) / 2;
  const isOnBottomHalf = targetRect.y + targetRect.height / 2 > boundary.top + (boundary.bottom - boundary.top) / 2;
  const overflowsViewportLeft = x < boundary.left;
  const overflowsViewportRight = x + contentRect.width > boundary.right;
  const overflowsViewportTop = y < boundary.top;
  const overflowsViewportBottom = y + contentRect.height > boundary.bottom;

  let newX = Number.isNaN(x) ? 0 : x;
  let newY = Number.isNaN(y) ? 0 : y;

  if (overflowsViewportLeft && !isOnRightSide) {
    newX = alignVert ? boundary.left + edgePadding : (newX = targetRect.x + targetRect.width + offset);
  }
  if (overflowsViewportRight && isOnRightSide) {
    newX = alignVert ? boundary.right - contentRect.width - edgePadding : targetRect.x - contentRect.width - offset;
  }
  if (overflowsViewportTop && !isOnBottomHalf) {
    newY = alignVert ? targetRect.y + targetRect.height + offset : boundary.top + edgePadding;
  }
  if (overflowsViewportBottom && isOnBottomHalf) {
    newY = alignVert
      ? y - (contentRect.height + offset * 2 + targetRect.height)
      : boundary.bottom - contentRect.height - edgePadding;
  }

  return { x: newX, y: newY };
};

const getAnchor = (rect, align) => {
  const positions = {
    top: () => ({ x: rect.left + rect.width / 2, y: rect.top }),
    right: () => ({ x: rect.right, y: rect.y + rect.height / 2 }),
    bottom: () => ({ x: rect.left + rect.width / 2, y: rect.y + rect.height }),
    left: () => ({ x: rect.left, y: rect.y + rect.height / 2 }),
  };

  return positions[align]();
};

export const getContentCoordinates = ({ rect, targetRect, scrollRect, align, offset = 12 }) => {
  const anchor = getAnchor(targetRect, align);

  const alignedPosition = {
    top: () =>
      getAdjustedContentCoordinates({
        x: anchor.x - rect.width / 2,
        y: anchor.y - (rect.height + offset),
        contentRect: rect,
        targetRect,
        scrollRect,
        align,
        offset,
      }),
    right: () =>
      getAdjustedContentCoordinates({
        x: anchor.x + offset,
        y: anchor.y - rect.height / 2,
        contentRect: rect,
        targetRect,
        scrollRect,
        align,
        offset,
      }),
    bottom: () =>
      getAdjustedContentCoordinates({
        x: anchor.x - rect.width / 2,
        y: anchor.y + offset,
        contentRect: rect,
        targetRect,
        scrollRect,
        align,
        offset,
      }),
    left: () =>
      getAdjustedContentCoordinates({
        x: anchor.x - rect.width - offset,
        y: anchor.y - rect.height / 2,
        contentRect: rect,
        targetRect,
        scrollRect,
        align,
        offset,
      }),
  };

  return alignedPosition[align]();
};

// The default value of 1.2 pixels for offset is to ensure a small overlap so that at certain browser zoom levels
// we do not see a slim piece of the underlying content (Popover.Card border)
export const getTipCoordinates = ({ tipRect, targetRect, contentRect, contentCoords, align, offset = -1.2 }) => {
  const alignedPosition = {
    top: () => ({
      x: targetRect.x + targetRect.width / 2 - tipRect.width / 2,
      y: contentCoords.y + contentRect.height + offset,
    }),
    right: () => ({
      x: contentCoords.x - tipRect.width - offset,
      y: targetRect.y + targetRect.height / 2 - tipRect.height / 2,
    }),
    bottom: () => ({
      x: targetRect.x + targetRect.width / 2 - tipRect.width / 2,
      y: contentCoords.y - tipRect.height - offset,
    }),
    left: () => ({
      x: contentCoords.x + contentRect.width + offset,
      y: targetRect.y + targetRect.height / 2 - tipRect.height / 2,
    }),
  };

  const tipAlign = {
    top: () => (contentCoords.y > targetRect.y ? "bottom" : align),
    right: () => (contentCoords.x < targetRect.x ? "left" : align),
    bottom: () => (contentCoords.y < targetRect.y ? "top" : align),
    left: () => (contentCoords.x > targetRect.x ? "right" : align),
  };

  const adjustedAlign = tipAlign[align]();

  return {
    ...alignedPosition[adjustedAlign](),
    rotate: rotate[adjustedAlign],
  };
};
