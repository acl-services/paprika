import React from "react";

export function extractChildren(children, types) {
  const _children = [];
  const components = {};
  if (Array.isArray(types)) {
    React.Children.toArray(children).forEach(child => {
      if (child.type && types.includes(child.type.displayName)) {
        if (Object.prototype.hasOwnProperty.call(components, child.type.displayName)) {
          const childs = Array.isArray(components[child.type.displayName])
            ? [...components[child.type.displayName], child]
            : [components[child.type.displayName], child];

          components[child.type.displayName] = childs;
        } else {
          components[child.type.displayName] = child;
        }
      } else {
        _children.push(child);
      }
    });

    return { ...components, children: _children };
  }

  throw new Error("extractChildren types parameter must be an Array");
}

export const arrowKeys = ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"];

export function handleArrowKeys({
  event,
  activeCell,
  rowsLength,
  refActivePage,
  columnsLength,
  refVirtualizeRows,
  rowHeight,
  setActiveCell,
}) {
  if (arrowKeys.includes(event.key)) {
    if (activeCell.index) {
      const keys = activeCell.index.split("_");
      const row = Number.parseInt(keys[0], 10);
      const cell = Number.parseInt(keys[1], 10);

      const boundaries = {
        start: 0,
        end: rowsLength,
        top: refActivePage.current.from,
        bottom: refActivePage.current.to,
        left: 0,
        right: columnsLength,
      };

      let nextIndex = activeCell.index;
      const actions = {
        ArrowUp: () => {
          const { top, start } = boundaries;
          const nextRow = row - 1;

          if (nextRow < start) {
            return;
          }

          nextIndex = `${nextRow}_${cell}`;

          // if we are approaching to the top start scrolling
          if (nextRow < top) {
            const $scrollableElement = refVirtualizeRows.current.getScrollableElement();
            // from + 3 indicate will show 4 new row once start navigating out of the area
            $scrollableElement.scrollTo({ top: rowHeight * top - 1 });
          }
          setActiveCell(activeCell => ({ ...activeCell, index: nextIndex }));
        },
        ArrowDown: () => {
          const { top, end, bottom } = boundaries;
          const nextRow = row + 1;

          if (nextRow >= end) {
            return;
          }

          nextIndex = `${nextRow}_${cell}`;

          // if we are approaching to the bottom start scrolling
          if (nextRow > bottom - 2) {
            const $scrollableElement = refVirtualizeRows.current.getScrollableElement();
            // from + 3 indicate will show 4 new row once start navigating out of the area
            $scrollableElement.scrollTo({ top: rowHeight * (top + 1) });
          }
          setActiveCell(activeCell => ({ ...activeCell, index: nextIndex }));
        },
        ArrowRight: () => {
          if (cell + 1 < boundaries.right) {
            nextIndex = `${row}_${cell + 1}`;
          }
          setActiveCell(activeCell => ({ ...activeCell, index: nextIndex }));
        },
        ArrowLeft: () => {
          if (cell - 1 >= boundaries.left) {
            nextIndex = `${row}_${cell - 1}`;
          }
          setActiveCell(activeCell => ({ ...activeCell, index: nextIndex }));
        },
      };

      actions[event.key]();
    }
  }
}
