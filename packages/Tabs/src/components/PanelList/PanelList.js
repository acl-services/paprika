import React from "react";
import PropTypes from "prop-types";
import TabsContext from "../../TabsContext";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const PanelList = ({ children }) => {
  const context = React.useContext(TabsContext);

  const childrenWithProps = React.Children.map(children, (panel, index) => {
    const isSelected = context.activeIndex === index;

    return React.cloneElement(panel, {
      isSelected,
    });
  });

  return <div>{childrenWithProps}</div>;
};

PanelList.displayName = "Tabs.PanelList";
PanelList.propTypes = propTypes;
export default PanelList;
