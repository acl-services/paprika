import React from "react";
import PropTypes from "prop-types";
import TabsContext from "../../TabsContext";
import Panel from "../Panel/Panel";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Panels = props => {
  const { children, ...moreProps } = props;
  const { activeIndex } = React.useContext(TabsContext);

  const childrenWithProps = React.Children.toArray(children)
    .filter(child => {
      return child !== null && child.type.displayName === Panel.displayName;
    })
    .map((panel, index) => {
      if (!panel) return;

      return React.cloneElement(panel, {
        isSelected: activeIndex === index,
      });
    });

  return <div {...moreProps}>{childrenWithProps}</div>;
};

Panels.displayName = "Tabs.Panels";
Panels.propTypes = propTypes;
export default Panels;
