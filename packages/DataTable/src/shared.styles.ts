import { css, FlattenSimpleInterpolation } from "styled-components";
import tokens from "@paprika/tokens";
import { gridTypes } from "./types";

export function cellStyles({ borderType }: { borderType: string }): FlattenSimpleInterpolation {
  return css`
    overflow: hidden;
    padding: ${tokens.space};

    ${borderType in borderTypesStyles ? borderTypesStyles[borderType] : ""};

    &:last-child {
      border-right: 0;
    }
  `;
}

export const borderTypesStyles = {
  [gridTypes.NONE]: "",
  [gridTypes.VERTICAL]: css`
    border-color: ${tokens.border.color};
    border-style: solid;
    border-width: 0px 1px 0px 0px;
  `,
  [gridTypes.HORIZONTAL]: css`
    border-color: ${tokens.border.color};
    border-style: solid;
    border-width: 0px 0px 1px 0px;
  `,
  [gridTypes.GRID]: css`
    border-color: ${tokens.border.color};
    border-style: solid;
    border-width: 0px 1px 1px 0px;
  `,
};
