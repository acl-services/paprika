import React from "react";
import PropTypes from "prop-types";
import TabsContext from "../../TabsContext";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Panels = ({ children }) => {
  const context = React.useContext(TabsContext);

  const childrenWithProps = React.Children.map(children, (panel, index) => {
    const isSelected = context.activeIndex === index;

    return React.cloneElement(panel, {
      isSelected,
    });
  });

  return <React.Fragment>{childrenWithProps}</React.Fragment>;
};

Panels.displayName = "Tabs.Panels";
Panels.propTypes = propTypes;
export default Panels;
