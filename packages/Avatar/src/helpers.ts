import React from "react";
import Tokens from "@paprika/tokens";

export function getAvatarColors(children: React.ReactNode): { fontColor: string; backgroundColor: string } {
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

  const reducer = (accumulator: number, letter: string) => accumulator + letter.charCodeAt(0);
  const textAsciiSum = (children as string).split("").reduce(reducer, 0);
  const index = textAsciiSum % COLORS.length;

  return {
    fontColor: COLORS[index].font,
    backgroundColor: COLORS[index].background,
  };
}

export function getInitialsFromText(text: string, length = 1): string {
  const initials = text.split(" ").map(word => word.charAt(0));
  return initials.join("").substr(0, length);
}
