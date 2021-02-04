import React from "react";
import PropTypes from "prop-types";
import TablePaprika from "@paprika/table";
import Editable from "../Editable";
import { getCellElement, getBoundingClientRect } from "./helpers";
import * as sc from "./Table.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {};
export default function Table(props) {
  const { children, ...moreProps } = props;
  const refCells = React.useRef(new Map());
  const refTable = React.useRef(null);
  const cellKey = ({ rowIndex, columnIndex }) => `paprika.inline-editing.cell${rowIndex}-${columnIndex}`;

  const clonedColumnDefinition = React.useMemo(() => {
    const handleCell = ({ cell: Cell /* onChange */ }) => args => {
      const { rowIndex, columnIndex } = args;
      const cellElementBound = getCellElement({ refTable, rowIndex, columnIndex });
      const getRect = getBoundingClientRect(cellElementBound);

      return (
        <sc.CellOverflow>
          <Editable ref={ref => refCells.current.set(cellKey({ rowIndex, columnIndex }), ref)}>
            <Cell {...args} getRect={getRect} />
          </Editable>
        </sc.CellOverflow>
      );
    };

    const cloned = [];
    React.Children.forEach(children, child => {
      const { cell, onChange } = child.props;

      cloned.push(
        React.cloneElement(child, {
          ...child.props,
          cell: handleCell({
            cell,
            onChange,
          }),
        })
      );
    });

    return cloned;
  }, [children]);

  function handleFocus({ rowIndex, columnIndex }) {
    const instance = refCells.current.get(cellKey({ rowIndex, columnIndex }));
    if ("onFocus" in instance) {
      instance.onFocus();
    }
  }

  function handleBlur({ rowIndex, columnIndex }) {
    const instance = refCells.current.get(cellKey({ rowIndex, columnIndex }));
    if ("onBlur" in instance) {
      instance.onBlur();
    }
  }

  function handleKeyUp(event) {
    if (event.key === "Enter") {
      const { rowIndex, columnIndex } = event.target.dataset;
      const ref = refCells.current.get(cellKey({ rowIndex, columnIndex }));
      if (ref) ref.onInteraction();
    }
  }

  function handleClick({ rowIndex, columnIndex }) {
    const ref = refCells.current.get(cellKey({ rowIndex, columnIndex }));
    if (ref) ref.onInteraction();
  }

  return (
    <TablePaprika
      enableArrowKeyNavigation
      onBlur={handleBlur}
      onClick={handleClick}
      onFocus={handleFocus}
      onKeyUp={handleKeyUp}
      ref={refTable}
      {...moreProps}
    >
      {clonedColumnDefinition}
    </TablePaprika>
  );
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
Table.ColumnDefinition = TablePaprika.ColumnDefinition;
