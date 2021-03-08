export default Table;

declare function Table(props: TableProps): JSX.Element;
interface TableProps {
  [x: string]: any;
  /** Define the look for borders in the table */
  borderType?:
    | Table.types.border.GRID
    | Table.types.border.NONE
    | Table.types.border.HORIZONTAL
    | Table.types.border.VERTICAL;
  /** Accessible description of the table */
  a11yText: string;
  /** 👶👶👶👶👶👶😸 */
  children: React.ReactNode;
  /** Add an alternating background on the table rows */
  hasZebraStripes?: boolean;
  /** Array of data to be stored in the Table */
  data?: shape[];
  /** For authors use only, use case: inline editing. */
  enableArrowKeyNavigation?: boolean;
  /** It will be call each time a new cell received the focus */
  onFocus?: (...args: any[]) => any;
  /** It will be call each time a current selected cell lose focus */
  onBlur?: (...args: any[]) => any;
  /** It will be fire each time an user click on a cell */
  onClick?: (...args: any[]) => any;
}

declare namespace Table {
  function ColumnDefinition(props: ColumnDefinitionProps): JSX.Element;
  interface ColumnDefinitionProps {
    [x: string]: any;

    cell: string | func;

    header: string | func;

    sticky?: number;
  }
}

declare namespace Table {
  namespace types {
    namespace border {
      const GRID: any;
      const NONE: any;
      const HORIZONTAL: any;
      const VERTICAL: any;
    }
  }
}
