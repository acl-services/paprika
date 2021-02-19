import React from "react";
import PropTypes from "prop-types";
/** REMOVE THIS BEFORE MERGE */
/** REMOVE THIS BEFORE MERGE */
/** REMOVE THIS BEFORE MERGE */
/** REMOVE THIS BEFORE MERGE */
/** DO NOT MERGE IMPORTING THE COMPONENT WITH A RELATIVE PATH */
import TablePaprika from "../../../../Table/src";
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
  const getCellKeyStr = ({ rowIndex, columnIndex }) => `paprika.inline-editing.cell${rowIndex}-${columnIndex}`;

  const clonedColumnDefinition = React.useMemo(() => {
    const handleCell = ({ cell: Cell, onChange, columnWidth }) => args => {
      const { rowIndex, columnIndex } = args;
      const cellElementBound = getCellElement({ refTable, rowIndex, columnIndex });
      const getRect = getBoundingClientRect(cellElementBound);

      return (
        <Editable
          refTable={refTable}
          ref={ref => refCells.current.set(getCellKeyStr({ rowIndex, columnIndex }), ref)}
          getRect={getRect}
          onChange={onChange}
          columnWidth={columnWidth}
          {...args}
        >
          <Cell {...args} />
        </Editable>
      );
    };

    const cloned = [];
    React.Children.forEach(children, child => {
      const { cell, onChange, width } = child.props;

      cloned.push(
        React.cloneElement(child, {
          ...child.props,
          cell: handleCell({
            cell,
            onChange,
            columnWidth: Number.parseInt(width, 10) || null,
          }),
        })
      );
    });

    return cloned;
  }, [children]);

  function handleFocus({ rowIndex, columnIndex }) {
    const instance = refCells.current.get(getCellKeyStr({ rowIndex, columnIndex }));
    if (instance && "onFocus" in instance) {
      instance.onFocus();
    }
  }

  function handleBlur({ rowIndex, columnIndex }) {
    const instance = refCells.current.get(getCellKeyStr({ rowIndex, columnIndex }));
    if (instance && "onBlur" in instance) {
      instance.onBlur();
    }
  }

  function handleKeyUp(event) {
    if (event.key === "Enter") {
      const { rowIndex, columnIndex } = event.target.dataset;
      const ref = refCells.current.get(getCellKeyStr({ rowIndex, columnIndex }));
      if (ref) ref.onInteraction();
    }
  }

  function handleClick({ rowIndex, columnIndex }) {
    const ref = refCells.current.get(getCellKeyStr({ rowIndex, columnIndex }));
    if (ref) ref.onInteraction();
  }

  return (
    <sc.Wrapper>
      <TablePaprika
        enableArrowKeyNavigation
        onBlur={handleBlur}
        onClick={handleClick}
        onFocus={handleFocus}
        onKeyUp={handleKeyUp}
        ref={refTable}
        cellPropsResetCSS
        {...moreProps}
      >
        {clonedColumnDefinition}
      </TablePaprika>
    </sc.Wrapper>
  );
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
Table.ColumnDefinition = TablePaprika.ColumnDefinition;
