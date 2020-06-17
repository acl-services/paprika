import Tokens from "@paprika/tokens";

export default function calculateAvatarColors(text) {
  const COLORS = [
    { background: Tokens.color.chartColor01, font: Tokens.color.white },
    { background: Tokens.color.chartColor02, font: Tokens.color.white },
    { background: Tokens.color.chartColor03, font: Tokens.color.black },
    { background: Tokens.color.chartColor04, font: Tokens.color.black },
    { background: Tokens.color.chartColor05, font: Tokens.color.white },
    { background: Tokens.color.chartColor06, font: Tokens.color.white },
    { background: Tokens.color.chartColor07, font: Tokens.color.black },
    { background: Tokens.color.chartColor08, font: Tokens.color.white },
    { background: Tokens.color.chartColor09, font: Tokens.color.white },
    { background: Tokens.color.chartColor10, font: Tokens.color.white },
    { background: Tokens.color.chartColor11, font: Tokens.color.black },
    { background: Tokens.color.chartColor12, font: Tokens.color.black },
  ];

  const reducer = (accumulator, letter) => accumulator + letter.charCodeAt(0);
  const textAsciiSum = text.split("").reduce(reducer, 0);
  const index = textAsciiSum % COLORS.length;

  return {
    fontColor: COLORS[index].font,
    backgroundColor: COLORS[index].background,
  };
}
