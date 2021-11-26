export type TableDataItemType = Record<string, unknown>;

export type TableColumnsWidth = Record<string, number>;

export interface Theme {
  borderType: string;
  hasZebraStripes: boolean;
  isHeaderSticky: boolean;
}
