import React from "react";
import PropTypes from "prop-types";
import TabsContext from "../../TabsContext";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Panels = props => {
  const context = React.useContext(TabsContext);

  const { children, ...moreProps } = props;

  const childrenWithProps = React.Children.map(children, (child, index) => {
    const isSelected = context.activeIndex === index;

    return child === null
      ? null
      : React.cloneElement(child, {
          isSelected,
        });
  });

  return <div {...moreProps}>{childrenWithProps}</div>;
};

Panels.displayName = "Tabs.Panels";
Panels.propTypes = propTypes;
export default Panels;
