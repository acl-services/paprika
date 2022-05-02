const pxRegex = /^(?<numberInPx>\d+)px$/;
const vwRegex = /^(?<numberInVw>\d+)vw$/;
const vhRegex = /^(?<numberInVh>\d+)vh$/;
const pct = /^(?<numberInPct>\d+)%$/;
const calcWithVwRegex = /^calc\((?<numberInVw>\d+)vw(?<operator>(\+|-|\*|\/))(?<numberInPx>\d+)px\)$/;
const calcWithVhRegex = /^calc\((?<numberInVh>\d+)vh(?<operator>(\+|-|\*|\/))(?<numberInPx>\d+)px\)$/;
const calcWithPctRegex = /^calc\((?<numberInPct>\d+)%(?<operator>(\+|-|\*|\/))(?<numberInPx>\d+)px\)$/;

export enum Direction {
  width = "width",
  height = "height",
}

const DirectionToGroupSelector = {
  [Direction.width]: "numberInVw",
  [Direction.height]: "numberInVh",
};

const RegexSets = {
  [Direction.width]: [pxRegex, vwRegex, pct, calcWithVwRegex, calcWithPctRegex],
  [Direction.height]: [pxRegex, vhRegex, pct, calcWithVhRegex, calcWithPctRegex],
};

function calculateViewportSizeToPx(viewportSize: number, direction: Direction) {
  return (window.visualViewport[direction] / 100) * viewportSize;
}

function calculateCalcToPx(left: number, right: number, operator: string) {
  switch (operator) {
    case "+":
      return left + right;
    case "-":
      return left - right;
    default:
      return left;
  }
}

function calculatePctSizeToPx(pct: number, direction: Direction, tableRef: React.RefObject<HTMLDivElement> | null) {
  if (!tableRef || !tableRef.current) {
    return calculateViewportSizeToPx(pct, direction);
  }

  const parentElement = tableRef.current.parentElement;
  if (!parentElement) {
    return calculateViewportSizeToPx(pct, direction);
  }

  const parentSize = Number.parseInt(
    getComputedStyle(parentElement, null)
      .getPropertyValue(direction)
      .replace("px", ""),
    10
  );
  return (parentSize / 100) * pct;
}

export default function convertSizeStringToNumber(
  sizeStr: string,
  direction: Direction,
  tableRef: React.RefObject<HTMLDivElement>
): number {
  const regexSet = RegexSets[direction];
  let result = 0;

  regexSet.find((regex, index) => {
    const match = regex.exec(sizeStr);

    if (!match || !match.groups) return false;

    switch (index) {
      case 0:
        result = Number.parseInt(match.groups.numberInPx, 10);
        break;
      case 1:
        result = calculateViewportSizeToPx(
          Number.parseInt(match.groups[DirectionToGroupSelector[direction]], 10),
          direction
        );
        break;
      case 2:
        result = calculatePctSizeToPx(Number.parseInt(match.groups.numberInPct, 10), direction, tableRef);
        break;
      case 3:
        result = calculateCalcToPx(
          (window.visualViewport[direction] / 100) *
            Number.parseInt(match.groups[DirectionToGroupSelector[direction]], 10),
          Number.parseInt(match.groups.numberInPx, 10),
          match.groups.operator
        );
        break;
      case 4:
        result = calculateCalcToPx(
          calculatePctSizeToPx(Number.parseInt(match.groups.numberInPct, 10), direction, tableRef),
          Number.parseInt(match.groups.numberInPx, 10),
          match.groups.operator
        );
        break;
      default:
        break;
    }

    return result;
  });

  return result || window.visualViewport[direction];
}
