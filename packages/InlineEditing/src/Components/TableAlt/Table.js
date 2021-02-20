import React from "react";
import PropTypes from "prop-types";
/** REMOVE THIS BEFORE MERGE */
/** REMOVE THIS BEFORE MERGE */
/** REMOVE THIS BEFORE MERGE */
/** REMOVE THIS BEFORE MERGE */
/** DO NOT MERGE IMPORTING THE COMPONENT WITH A RELATIVE PATH */
import TablePaprika from "../../../../Table/src";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {};
export default function Table(props) {
  const { children, ...moreProps } = props;
  const [isOnEditMode, setIsOnEditMode] = React.useState(false);

  const refCells = React.useRef(new Map());
  const refTable = React.useRef(null);
  const getCellKeyStr = ({ rowIndex, columnIndex }) => `paprika.inline-editing.cell${rowIndex}-${columnIndex}`;

  const clonedColumnDefinition = React.useMemo(() => {
    function close() {
      setIsOnEditMode(false);
    }

    const cloned = [];
    React.Children.forEach(children, child => {
      const { cell } = child.props;

      cloned.push(
        React.cloneElement(child, {
          ...child.props,
        })
      );
    });

    return cloned;
  }, [children]);

  debugger;

  return <TablePaprika {...props} />;
}

// Table.propTypes = propTypes;
// Table.defaultProps = defaultProps;
// Table.ColumnDefinition = TablePaprika.ColumnDefinition;

// export default function Switcher(props) {
//   const { onEdit: onEditProps } = props;
//   const [onEdit, setOnEdit] = React.useState(false);
//   const { "Switcher.Value": value, "Switcher.Edit": edit } = extractChildren(props.children, [
//     "Switcher.Value",
//     "Switcher.Edit",
//   ]);

//   React.useEffect(() => {
//     if (onEdit) {
//       onEditProps();
//     }
//   }, [onEdit, onEditProps]);

//   return onEdit ? (
//     React.Children.map(edit.props.children, child => {
//       return React.cloneElement(child, { ...child.props, setOnEdit, onEdit });
//     })
//   ) : (
//     <RawButton onClick={() => setOnEdit(true)}>{value.props.children}</RawButton>
//   );
// }

// Switcher.Value = () => {
//   return <></>;
// };
// Switcher.Value.displayName = "Switcher.Value";

// Switcher.Edit = () => {
//   return <></>;
// };
// Switcher.Edit.displayName = "Switcher.Edit";
