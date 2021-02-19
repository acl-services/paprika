import React from "react";
import PropTypes from "prop-types";
import Popover from "@paprika/popover";
import { TiEdit } from "react-icons/ti";

import * as sc from "./Editable.styles";
import types from "../../types";

const propTypes = {
  children: PropTypes.node.isRequired,
  rowIndex: PropTypes.number.isRequired,
  columnIndex: PropTypes.number.isRequired,
  refTable: PropTypes.shape({ current: PropTypes.any }).isRequired,
  getRect: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  columnWidth: PropTypes.number,
};

const defaultProps = {
  columnWidth: null,
};

function PopoverFocusOrEdit(props) {
  return (
    <Popover {...props} offset={props.offset()}>
      <Popover.Content>
        <sc.Card rect={props.rect}>{props.children}</sc.Card>
      </Popover.Content>
    </Popover>
  );
}

const Editable = React.forwardRef((props, ref) => {
  const { rowIndex, columnIndex, refTable, getRect, onChange, columnWidth } = props;
  const on = types.status;
  const [status, setStatus] = React.useState(on.IDLE);
  const [errorMessage, setErrorMessage] = React.useState(null);

  function error(msg = "") {
    setErrorMessage(msg);
  }

  function close() {
    setStatus(on.FOCUS);
    const $cell = refTable.current.querySelector(`[data-row-index="${rowIndex}"][data-column-index="${columnIndex}"]`);
    if ($cell) {
      window.requestAnimationFrame(() => {
        refTable.current.focus();
        $cell.focus();
      });
    }
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

  const rect = getRect();
  const popoverFocusOrEditProps = {
    edge: "left",
    isOpen: true,
    isPortal: false,
    offset: () => -getRect().height,
    shouldKeepFocus: false,
    getPositioningElement: () => {
      return refTable.current.querySelector(`[data-row-index="${rowIndex}"][data-column-index="${columnIndex}"]`);
    },
    onClose: () => {},
    refTable,
    rect,
  };

  const Cell = React.cloneElement(props.children, {
    status,
    setStatus,
    statusTypes: on,
    close,
    onChange,
    columnWidth,
    error,
    errorMessage,
    Popover: PopoverFocusOrEdit,
    popoverProps: popoverFocusOrEditProps,
    ...props.children.props,
  });

  if (status === on.EDITING) {
    return (
      <PopoverFocusOrEdit {...popoverFocusOrEditProps}>
        <sc.Edit rect={rect}>{Cell}</sc.Edit>
      </PopoverFocusOrEdit>
    );
  }

  return (
    <sc.CellOverflow hasError={errorMessage !== null} columnWidth={columnWidth}>
      {Cell}
      {status === on.FOCUS ? (
        <sc.EditIcon>
          <TiEdit />
        </sc.EditIcon>
      ) : null}
    </sc.CellOverflow>
  );
});

Editable.propTypes = propTypes;
Editable.defaultProps = defaultProps;
Editable.displayName = "Table.Editable";

export default Editable;
