import React from "react";
import PropTypes from "prop-types";
import TablePaprika from "@paprika/table";
import * as sc from "./Table.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {};

export const Editing = React.forwardRef((props, ref) => {
  const { children, cellProps, onEditing, onChange, getValue, getTableElement, nextData } = props;
  const [isEditing, setIsEditing] = React.useState(false);

  const { rowIndex, columnIndex, row } = cellProps;
  const id = `${rowIndex}-${columnIndex}`;

  const getCellElement = () =>
    getTableElement().querySelector(`[data-row-index='${rowIndex}'][data-column-index='${columnIndex}']`);

  console.log(`rendering-${id}`);
  React.useImperativeHandle(ref, () => {
    return {
      id,
      toggleIsEditing() {
        setIsEditing(prev => !prev);
      },
      setIsEditing,
    };
  });

  function handleFinish() {
    setIsEditing(false);
    getCellElement().focus();
  }

  function handleCancel() {
    setIsEditing(false);
  }

  function handleOnChange(args) {
    onChange(args);
  }

  if (isEditing) {
    let value = null;
    if (typeof getValue === "function") {
      value = getValue(cellProps);
    } else if (children === "string" || children === "number" || children === "boolean") {
      value = children;
    } else {
      throw Error(
        `We can't figure out what is the value for the cell ${id}, please use the getValue Props in your ColumnDefinition to resolve this issue`
      );
    }

    const Component = onEditing;
    return (
      <Component
        cancel={handleCancel}
        nextData={nextData}
        finish={handleFinish}
        value={value}
        onChange={handleOnChange}
        rowIndex={rowIndex}
        columnIndex={columnIndex}
        row={row}
        getCellElement={getCellElement}
      />
    );
  }

  return children;
});

export default function Table(props) {
  const { children, ...moreProps } = props;
  const refCells = React.useRef(new Map());
  const refTable = React.useRef(null);

  function handleKeyUp(event) {
    if (event.key === "Enter") {
      const { rowIndex, columnIndex } = event.target.dataset;
      const ref = refCells.current.get(`${rowIndex}${columnIndex}`);
      if (ref) ref.toggleIsEditing();
    }
  }

  function nextData({ nextValue, rowIndex, rowColumn }) {}

  const handleCell = ({ cell, onEditing, onChange, getValue }) => args => {
    const { rowIndex, columnIndex } = args;
    return (
      <Editing
        cellProps={args}
        getTableElement={() => {
          return refTable.current;
        }}
        nextData={nextData}
        getValue={getValue}
        onChange={onChange}
        onEditing={onEditing}
        ref={ref => refCells.current.set(`${rowIndex}${columnIndex}`, ref)}
      >
        <sc.CellOverflow>{cell(args)}</sc.CellOverflow>
      </Editing>
    );
  };

  const clonedColumnDefinition = React.useMemo(() => {
    const cloned = [];
    React.Children.forEach(children, child => {
      const { cell, onEditing, getValue, onChange } = child.props;

      cloned.push(
        React.cloneElement(child, {
          ...child.props,
          cell: handleCell({
            cell,
            getValue,
            onChange,
            onEditing,
          }),
        })
      );
    });

    return cloned;
  }, [children]);

  return (
    <TablePaprika ref={refTable} {...moreProps} enableArrowKeyNavigation onKeyUp={handleKeyUp}>
      {clonedColumnDefinition}
    </TablePaprika>
  );
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
Table.ColumnDefinition = TablePaprika.ColumnDefinition;

/**
 * Table cell={({ row, rowIndex, columnIndex }) => {
 *
 * }}
 *
 * InlineTable defaultValue = {({ row, rowIndex, columnIndex }) => {}}
 *
 * <Table data={data} />
 *
 * <ColumnDefinition
 *      cell={({ row, rowIndex, columnIndex }) => {}}
 *      widget={}
 *      type={}
 *      onChange={({ row, rowIndex, columnIndex, nextValue, nextData, finish }) => {
 *
 *      }}
 * />
 */
