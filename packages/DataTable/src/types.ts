import { gridTypes } from "@paprika/constants";

export type TableDataItemType = Record<string, any>;

export type TableColumnsWidth = Record<string, number>;

export interface Theme {
  borderType: string;
  hasZebraStripes: boolean;
  isHeaderSticky: boolean;
}

// Need to be fixed in constants package
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export type BorderType = gridTypes.GRID | gridTypes.NONE | gridTypes.HORIZONTAL | gridTypes.VERTICAL;
