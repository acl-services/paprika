import React from "react";
import PropTypes from "prop-types";
import Table from "@paprika/table";
import * as sc from "./Table.styles";

function Editable({ children }) {
  const [isEditing, setIsEditing] = React.useState(false);
  return React.cloneElement(children, { ...children.props, isEditing, setIsEditing });
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

  return <sc.Table {...moreProps}>{clonedColumnDefinition}</sc.Table>;
}

const propTypes = {
  children: PropTypes.node.isRequired,
};

InlineEditingTable.propTypes = propTypes;
