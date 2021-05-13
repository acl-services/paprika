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
  /** Will fire each time a new cell receives focus */
  onFocus?: (...args: any[]) => any;
  /** Will fire each time a selected cell loses focus */
  onBlur?: (...args: any[]) => any;
  /** Will fire each time user clicks on a cell */
  onClick?: (...args: any[]) => any;
}

declare namespace Table {
  function ColumnDefinition(props: ColumnDefinitionProps): JSX.Element;
  interface ColumnDefinitionProps {
    [x: string]: any;
    /** Each time a cell is renderer this prop will be call either to read a string value or to execute a cell function */
    cell: string | func;
    /** Give you access to return an object (styles, className, data-qa, etc) to render on top of each <td /> element */
    cellProps?: (...args: any[]) => any;
    /** Represent the header for the column can either be a string or a function */
    header: string | func;
    /** Determine if a column should behave as a sticky column or not, received a number representing the space between the left side and the column pixels
 internally the default value is zero */
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
