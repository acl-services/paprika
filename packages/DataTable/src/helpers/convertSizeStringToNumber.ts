const pxRegex = /^(?<numberInPx>\d+)px$/;
const vwRegex = /^(?<numberInVw>\d+)vw$/;
const vhRegex = /^(?<numberInVh>\d+)vh$/;
const calcWithVwRegex = /^calc\((?<numberInVw>\d+)vw(?<operator>(\+|-|\*|\/))(?<numberInPx>\d+)px\)$/;
const calcWithVhRegex = /^calc\((?<numberInVh>\d+)vh(?<operator>(\+|-|\*|\/))(?<numberInPx>\d+)px\)$/;

export enum Direction {
  width = "width",
  height = "height",
}

const DirectionToGroupSelector = {
  [Direction.width]: "numberInVw",
  [Direction.height]: "numberInVh",
};

const RegexSets = {
  [Direction.width]: [pxRegex, vwRegex, calcWithVwRegex],
  [Direction.height]: [pxRegex, vhRegex, calcWithVhRegex],
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

export default function convertSizeStringToNumber(sizeStr: string, direction: Direction): number {
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
        result = calculateCalcToPx(
          (window.visualViewport[direction] / 100) *
            Number.parseInt(match.groups[DirectionToGroupSelector[direction]], 10),
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
