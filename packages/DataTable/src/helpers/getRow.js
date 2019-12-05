export default function getRow({ row, refActivePage }) {
  return refActivePage.current.subset[row - refActivePage.current.from];
}

export function getCoordinatesByCellIndex(cellIndex) {
  const [, index] = cellIndex.split("DTCELL");
  const [row, column] = index.split("_");
  return { row: Number.parseInt(row, 10), column: Number.parseInt(column, 10) };
}
