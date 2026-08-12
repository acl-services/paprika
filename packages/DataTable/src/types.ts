import { gridTypes } from "@paprika/constants";

export type TableDataItemType = Record<string, unknown>;

export type TableColumnsWidth = Record<string, number>;

export interface Theme {
  borderType: string;
  hasZebraStripes: boolean;
  isHeaderSticky: boolean;
}

// Need to be fixed in constants package
// oxlint-disable-next-line typescript/ban-ts-comment
// @ts-ignore
export type BorderType = gridTypes.GRID | gridTypes.NONE | gridTypes.HORIZONTAL | gridTypes.VERTICAL;
