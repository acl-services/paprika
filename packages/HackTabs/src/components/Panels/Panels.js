import React from "react";
import PropTypes from "prop-types";
import TabsContext from "../../TabsContext";
import Panel from "../Panel/Panel";

export default function Panels(props) {
  const { children, ...moreProps } = props;
  const { activeIndex, idTabs } = React.useContext(TabsContext);

  const childrenWithProps = React.Children.toArray(children)
    .filter(child => child !== null && child.type.displayName === Panel.displayName)
    .map((panel, index) =>
      React.cloneElement(panel, {
        "aria-labelledby": `${idTabs}-tab-${index}`,
        isSelected: activeIndex === index,
        id: `${idTabs}-panel-${index}`,
      })
    );

  return <div {...moreProps}>{childrenWithProps}</div>;
}

Panels.propTypes = {
  /** List of Tabs.Panel elements. */
  children: PropTypes.node.isRequired,
};

Panels.displayName = "Tabs.Panels";
