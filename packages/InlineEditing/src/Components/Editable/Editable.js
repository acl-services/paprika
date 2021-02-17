import React from "react";
import PropTypes from "prop-types";
import Popover from "@paprika/popover";

import * as sc from "./Editable.styles";
import types from "../../types";

const Editable = React.forwardRef((props, ref) => {
  const { rowIndex, columnIndex, refTable, getRect } = props;
  const on = types.status;
  const [status, setStatus] = React.useState(on.IDLE);

  function close() {
    setStatus(on.FOCUS);
    const $cell = refTable.current.querySelector(`[data-row-index="${rowIndex}"][data-column-index="${columnIndex}"]`);
    if ($cell) $cell.focus();
  }

  React.useImperativeHandle(ref, () => ({
    onFocus: () => {
      setStatus(on.FOCUS);
    },
    onBlur: () => {
      setStatus(on.IDLE);
    },
    onInteraction: () => {
      setStatus(prev => {
        if (prev === on.FOCUS || prev === on.EDITING) {
          return on.EDITING;
        }

        return on.FOCUS;
      });
    },
  }));

  const Cell = React.cloneElement(props.children, {
    ...props.children.props,
    status,
    setStatus,
    statusTypes: on,
    close,
  });

  if (status === on.EDITING) {
    const rect = getRect();
    console.log(rect);
    return (
      <Popover
        isOpen
        getPositioningElement={() => {
          return refTable.current.querySelector(`[data-row-index="${rowIndex}"][data-column-index="${columnIndex}"]`);
        }}
        shouldKeepFocus={false}
        isPortal={false}
        onClose={() => {}}
        offset={-rect.height}
      >
        <Popover.Content>
          <sc.Edit rect={rect}>{Cell}</sc.Edit>
        </Popover.Content>
      </Popover>
    );
  }

  return <sc.CellOverflow status={on}>{Cell}</sc.CellOverflow>;
});

Editable.propTypes = {
  children: PropTypes.node.isRequired,
  rowIndex: PropTypes.number.isRequired,
  columnIndex: PropTypes.number.isRequired,
  refTable: PropTypes.shape({ current: PropTypes.any }).isRequired,
  getRect: PropTypes.func.isRequired,
};

Editable.displayName = "Table.Editable";

export default Editable;
