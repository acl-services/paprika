export default Table;

declare function Table(props: TableProps): JSX.Element;
interface TableProps {
  /** Define the look for borders in the table Table.types.GRID, Table.types.NONE, etc. */
  borderType?: "grid" | "none" | "horizontal" | "vertical";
  /** Accessible description of the table */
  a11yText: string;

  children: node;
  /** Add an alternating background on the table rows */
  hasZebraStripes?: boolean;
  /** Array of data to be stored in the Table */
  data?: arrayOf;
}
declare namespace Table {
  function ColumnDefinition(props: ColumnDefinitionProps): JSX.Element;
  interface ColumnDefinitionProps {
    cell: string | func;

    header: string | func;
  }
}
