import { Cell, ColumnInstance, Hooks, TableCellProps, TableCommonProps, TableHeaderProps } from "react-table";

const stickyCellStyles = {
  backgroundColor: "inherit",
  position: "sticky",
  zIndex: 1,
};

interface Column extends ColumnInstance {
  isSticky?: boolean;
}

function isColumnSticky(column: Column): boolean {
  if (column.isSticky) {
    return true;
  }

  if (column.parent) {
    return isColumnSticky(column.parent);
  }

  return false;
}

function getStickyProps(column: Column) {
  return {
    style: {
      ...stickyCellStyles,
      left: `${column.totalLeft}px`,
    },
  } as Partial<TableCommonProps>;
}

function useSticky(hooks: Hooks): void {
  hooks.getHeaderProps.push((props: Partial<TableHeaderProps>, { column }: { column: Column }) => {
    return isColumnSticky(column) ? [props, getStickyProps(column)] : props;
  });

  hooks.getCellProps.push((props: Partial<TableCellProps>, { cell }: { cell: Cell }) => {
    return isColumnSticky(cell.column) ? [props, getStickyProps(cell.column)] : props;
  });
}

export default useSticky;
