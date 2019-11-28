export default function getRow({ row, refActivePage }) {
  return refActivePage.current.subset[row - refActivePage.current.from];
}

export function getCoordinatesByCellIndex(cellIndex) {
  const coordinate = cellIndex.split("_");
  const row = coordinate[0];
  const cell = coordinate[1];
  return { row, cell };
}
