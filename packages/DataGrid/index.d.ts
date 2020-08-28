export default DataGrid;

declare function DataGrid(props: DataGridProps): JSX.Element;
interface DataGridProps {
  /** If the data cell should automatically get focus */
  autofocus?: boolean;
  /** Define the look for borders in the table DataGrid.types.GRID, DataGrid.types.NONE, etc. */
  borderType?: types.GRID | types.NONE | types.HORIZONTAL | types.VERTICAL;

  children: node;
  /** This will force the table to include in the calculation of the table the scrollbar thickness */
  forceTableWidthWithScrollBars?: boolean;
  /** Add an alternate background on the DataGrid's rows */
  hasZebraStripes?: boolean;
  /** Array of data to be stored in the DataGrid */
  data?: arrayOf;
  /** Sets the height of the DataGrid */
  height?: number;
  /** Callback onClick */
  onClick?: func;
  /** Callback onKeyDown press */
  onKeyDown?: func;
  /** Callback when Enter key is pressed */
  onPressEnter?: func;
  /** Callback when Shift + Spacebar is pressed */
  onPressShiftSpaceBar?: func;
  /** Callback when Spacebar is pressed */
  onPressSpaceBar?: func;
  /** Callback when user click the f key. Might change in the future */
  onRowChecked?: func;
  /** Callback with information about the prev and next highlighted cell */
  onHighlighted?: func;
  /** Sets the row height */
  rowHeight?: number;
  /** Sets the DataGrid width */
  width?: number;
}
declare namespace DataGrid {
  function ColumnDefinition(props: ColumnDefinitionProps): JSX.Element;
  interface ColumnDefinitionProps {
    canGrow?: boolean;

    cell?: custom;

    cellA11yText?: func;

    cellProps?: func;

    cellPropsResetCSS?: boolean;

    header?: custom;

    headerA11yText?: func;

    headerProps?: func;

    isSticky?: boolean;

    onClick?: func;

    onPressEnter?: func;

    onPressShiftSpaceBar?: func;

    onPressSpaceBar?: func;

    width?: number;
  }
}
