import React from "react";
import PropTypes from "prop-types";
import TablePaprika from "@paprika/table";
import * as sc from "./Table.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {};

// export const Editing = React.forwardRef((props, ref) => {
//   const { children, cellProps, onEditing, onChange, getValue, getTableElement, nextData } = props;
//   const [isEditing, setIsEditing] = React.useState(false);

//   const { rowIndex, columnIndex, row } = cellProps;
//   const id = `${rowIndex}-${columnIndex}`;

//   const getCellElement = () =>
//     getTableElement().querySelector(`[data-row-index='${rowIndex}'][data-column-index='${columnIndex}']`);

//   console.log(`rendering-${id}`);
//   React.useImperativeHandle(ref, () => {
//     return {
//       id,
//       toggleIsEditing() {
//         setIsEditing(prev => !prev);
//       },
//       setIsEditing,
//     };
//   });

//   function handleFinish() {
//     setIsEditing(false);
//     getCellElement().focus();
//   }

//   function handleCancel() {
//     setIsEditing(false);
//   }

//   function handleOnChange(args) {
//     onChange(args);
//   }

//   if (isEditing) {
//     let value = null;
//     if (typeof getValue === "function") {
//       value = getValue(cellProps);
//     } else if (children === "string" || children === "number" || children === "boolean") {
//       value = children;
//     } else {
//       throw Error(
//         `We can't figure out what is the value for the cell ${id}, please use the getValue Props in your ColumnDefinition to resolve this issue`
//       );
//     }

//     const Component = onEditing;
//     return (
//       <Component
//         cancel={handleCancel}
//         nextData={nextData}
//         finish={handleFinish}
//         value={value}
//         onChange={handleOnChange}
//         rowIndex={rowIndex}
//         columnIndex={columnIndex}
//         row={row}
//         getCellElement={getCellElement}
//       />
//     );
//   }

//   return children;
// });

function useStatus(initialStatus = "idle") {
  const [status, setStatus] = React.useState(initialStatus);

  const handleStatus = {
    onFocus: () => {
      setStatus("focus");
    },
    onBlur: () => {
      setStatus("idle");
    },
    onInteraction: () => {
      setStatus(prev => {
        if (prev === "focus" || prev === "editing") {
          return "editing";
        }

        return "focus";
      });
    },
  };

  const types = {
    IDLE: "idle",
    FOCUS: "focus",
    EDITING: "editing",
  };

  return { status, handleStatus, types, setStatus };
}

const Editable = React.forwardRef((props, ref) => {
  const { status, handleStatus, types } = useStatus();
  React.useImperativeHandle(ref, () => handleStatus);
  return React.cloneElement(props.children, { ...props.children.props, status, types: { types } });
});

export default function Table(props) {
  const { children, ...moreProps } = props;
  const refCells = React.useRef(new Map());
  const refTable = React.useRef(null);
  const cellKey = ({ rowIndex, columnIndex }) => `paprika.inline-editing.cell${rowIndex}-${columnIndex}`;

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

  function nextData({ nextValue, rowIndex, columnIndex }) {}

  const getCellElement = ({ rowIndex, columnIndex }) => () => {
    return (
      refTable.current &&
      refTable.current.querySelector(`[data-row-index='${rowIndex}'][data-column-index='${columnIndex}']`)
    );
  };

  const getBoundingClientRect = cellElement => () => cellElement().getBoundingClientRect();

  const handleCell = ({ cell, onChange }) => args => {
    const { rowIndex, columnIndex } = args;
    const cellElementBound = getCellElement({ rowIndex, columnIndex });
    const getRect = getBoundingClientRect(cellElementBound);

    // const cellRender = cell({
    //   ...args,
    //   getCellElement: cellElementBound,
    //   getRect,
    //   // this set the cell (provided by the consumer) component ref and its expect to have an imperative API
    //   // that we can manipulate, doing this way, we can modify and update a specific cell
    //   // without the need to execute any other function of the already rendered cells
    // });

    const Cell = cell;

    return (
      <sc.CellOverflow>
        <Editable {...args} ref={ref => refCells.current.set(cellKey({ rowIndex, columnIndex }), ref)}>
          <Cell {...args} />
        </Editable>
      </sc.CellOverflow>
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
            onChange,
          }),
        })
      );
    });

    return cloned;
  }, [children]);

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
