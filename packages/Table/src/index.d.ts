export default Table;

declare function Table(props: TableProps): JSX.Element;
interface TableProps {
  [x: string]: any;
  /** Define the look for borders in the table Table.types.GRID, Table.types.NONE, etc. */
  borderType?:
    | Table.types.border.GRID
    | Table.types.border.NONE
    | Table.types.border.HORIZONTAL
    | Table.types.border.VERTICAL;
  /** Accessible description of the table */
  a11yText: string;

  children: React.ReactNode;
  /** Add an alternating background on the table rows */
  hasZebraStripes?: boolean;
  /** Array of data to be stored in the Table */
  data?: shape[];
}
declare namespace Table {
  function ColumnDefinition(props: ColumnDefinitionProps): JSX.Element;
  interface ColumnDefinitionProps {
    [x: string]: any;

    cell: string | func;

    header: string | func;
  }
}
