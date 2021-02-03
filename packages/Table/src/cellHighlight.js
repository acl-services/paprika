export function $getTable(tableId) {
  return document.getElementById(tableId);
}

export function $getCell({ rowIndex, columnIndex }, tableId) {
  const $table = $getTable(tableId);
  if ($table) {
    return $table.querySelector(`[data-row-index='${rowIndex}'][data-column-index='${columnIndex}']`);
  }
  return null;
}

export function addHighlightFocus({ rowIndex, columnIndex }, tableId, onFocus) {
  const $cell = $getCell({ rowIndex, columnIndex }, tableId);
  if ($cell) {
    $cell.classList.add("is-highlighted-focus");
    $cell.setAttribute("tabindex", 0);
    $cell.focus();
    onFocus({ rowIndex, columnIndex, tableId });
  }
}

export function removeHighlightFocus({ rowIndex, columnIndex }, tableId) {
  if (rowIndex === null && columnIndex === null) return;
  const $cell = $getCell({ rowIndex, columnIndex }, tableId);
  if ($cell) {
    $cell.classList.remove("is-highlighted-focus");
    $cell.setAttribute("tabindex", -1);
  }
}

export function addHighlightIdleClass({ rowIndex, columnIndex }, tableId) {
  const $cell = $getCell({ rowIndex, columnIndex }, tableId);
  return $cell && $cell.classList.add("is-highlighted-idle");
}

export function removeHighlightIdleClass(tableId) {
  const $table = $getTable(tableId);
  if ($table) {
    const $cell = $table.getElementsByClassName("is-highlighted-idle");
    return $cell.length && $cell[0].classList.remove("is-highlighted-idle");
  }

  return null;
}
