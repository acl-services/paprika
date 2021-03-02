import React from "react";
import PropTypes from "prop-types";
import Table from "@paprika/table";

function Editable({ children }) {
  const [isEditing, setIsEditing] = React.useState(false);
  return React.cloneElement(children, { ...children.props, isEditing, setIsEditing });
}

export default function InlineEditingTable(props) {
  const { children, ...moreProps } = props;
  const clonedColumnDefinition = React.useMemo(() => {
    const cloned = [];
    React.Children.forEach(props.children, (child, index) => {
      const { cell: Component } = child.props;

      cloned.push(
        <Table.ColumnDefinition
          key={index}
          {...child.props}
          cell={args => (
            <Editable>
              <Component {...args} />
            </Editable>
          )}
        />
      );
    });

    return cloned;
  }, [props.children]);

  return <Table {...moreProps}>{clonedColumnDefinition}</Table>;
}

const propTypes = {
  children: PropTypes.node.isRequired,
};

InlineEditingTable.propTypes = propTypes;
