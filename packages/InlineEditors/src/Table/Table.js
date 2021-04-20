import React from "react";
import PropTypes from "prop-types";
import Table from "@paprika/table";
import { useSeducerWithContext, Provider } from "@paprika/seducer";
import * as sc from "./Table.styles";
import { status as statusType } from "../types";

const initialState = {
  status: new Map(),
};

export function useTable({ rowIndex, columnIndex } = {}) {
  const [state, dispatch, actionsTypes] = useSeducerWithContext();
  function setStatus(nextStatus) {
    dispatch(actionsTypes.setStatus, { status: nextStatus, rowIndex, columnIndex });
  }

  return {
    setStatus,
    statusType,
    getStatus: () => {
      return state.status.get(`${rowIndex}-${columnIndex}`);
    },
    status: state.status,
  };
}

const actions = {
  setStatus(state, { rowIndex, columnIndex, status }) {
    const nextStatus = new Map(state.status);
    nextStatus.set(`${rowIndex}-${columnIndex}`, status);
    return { ...state, status: nextStatus };
  },
};

function TableProvider(props) {
  return (
    /* eslint-disable react/prop-types */
    <Provider initialState={initialState} actions={actions}>
      {props.children}
    </Provider>
    /* eslint-enable react/prop-types */
  );
}

function Editable({ children }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const { status } = useTable();

  const cellStatus = status.get(`${children.props.rowIndex}-${children.props.columnIndex}`);

  const handleClose = React.useCallback(() => {
    setIsEditing(false);
  }, []);

  const handleEditing = React.useCallback(() => {
    setIsEditing(true);
  }, []);

  return React.cloneElement(children, {
    ...children.props,
    isEditing,
    onClose: handleClose,
    onStart: handleEditing,
    status: cellStatus ? cellStatus.status : statusType.IDLE,
  });
}

export default function InlineEditingTable(props) {
  const { children, ...moreProps } = props;

  const clonedColumnDefinition = React.useMemo(() => {
    const cloned = [];

    React.Children.forEach(props.children, (child, index) => {
      const { cell: Component, width } = child.props;
      cloned.push(
        <Table.ColumnDefinition
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          {...child.props}
          cell={args => {
            return typeof width === "undefined" ? (
              <Editable>
                <Component {...args} />
              </Editable>
            ) : (
              // We can't simply pass the width to the TD since components like
              // ListBox will push the content of the TD depending of the value of the option
              // with this approach we force the inner component to no expand more of this width
              <div style={{ maxWidth: `${width}px` }}>
                <Editable>
                  <Component {...args} />
                </Editable>
              </div>
            );
          }}
        />
      );
    });

    return cloned;
  }, [props.children]);

  return (
    <TableProvider>
      <sc.Table {...moreProps}>{clonedColumnDefinition}</sc.Table>
    </TableProvider>
  );
}

const propTypes = {
  children: PropTypes.node.isRequired,
};

InlineEditingTable.propTypes = propTypes;
