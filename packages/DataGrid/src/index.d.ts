export default DataGrid;

declare function DataGrid(props: DataGridProps): JSX.Element;
interface DataGridProps {
  [x: string]: any;
  /** If the data cell should automatically get focus */
  autofocus?: boolean;
  /** Define the look for borders in the table types.DataGrid.GRID, types.DataGrid.NONE, etc. */
  borderType?:
    | DataGrid.types.border.GRID
    | DataGrid.types.border.NONE
    | DataGrid.types.border.HORIZONTAL
    | DataGrid.types.border.VERTICAL;

  children: React.ReactNode;
  /** This will force the table to include in the calculation of the table the scrollbar thickness */
  forceTableWidthWithScrollBars?: boolean;
  /** Add an alternate background on the DataGrid's rows */
  hasZebraStripes?: boolean;
  /** Array of data to be stored in the DataGrid */
  data?: shape[];
  /** Sets the height of the DataGrid */
  height?: number;
  /** Callback onClick */
  onClick?: (...args: any[]) => any;
  /** Callback onKeyDown press */
  onKeyDown?: (...args: any[]) => any;
  /** Callback when Enter key is pressed */
  onPressEnter?: (...args: any[]) => any;
  /** Callback when Shift + Spacebar is pressed */
  onPressShiftSpaceBar?: (...args: any[]) => any;
  /** Callback when Spacebar is pressed */
  onPressSpaceBar?: (...args: any[]) => any;
  /** Callback when user click the f key. Might change in the future */
  onRowChecked?: (...args: any[]) => any;
  /** Callback with information about the prev and next highlighted cell */
  onHighlighted?: (...args: any[]) => any;
  /** Sets the row height */
  rowHeight?: number;
  /** Sets the DataGrid width */
  width?: number;
}
declare namespace DataGrid {
  function ColumnDefinition(props: ColumnDefinitionProps): JSX.Element;
  interface ColumnDefinitionProps {
    [x: string]: any;

    canGrow?: boolean;

    cell?: custom;

    cellA11yText?: (...args: any[]) => any;

    cellProps?: (...args: any[]) => any;

    cellPropsResetCSS?: boolean;

    header?: custom;

    headerA11yText?: (...args: any[]) => any;

    headerProps?: (...args: any[]) => any;

    isSticky?: boolean;

    onClick?: (...args: any[]) => any;

    onPressEnter?: (...args: any[]) => any;

    onPressShiftSpaceBar?: (...args: any[]) => any;

    onPressSpaceBar?: (...args: any[]) => any;

    width?: number;
  }
}
