export type TableDataItemType = Record<string, unknown>;

export type TableColumnsWidth = Record<string, number>;

// TODO use constants package
export const gridTypes = {
  GRID: "grid",
  NONE: "none",
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
};

export interface Theme {
  borderType: string;
  hasZebraStripes: boolean;
  isHeaderSticky: boolean;
}
