import React from "react";
import ListBox, { propTypes, defaultProps } from "./ListBox";
import Footer from "./components/Footer";
import Group from "./components/Group";
import Option from "./components/Option";
import groupSelectors from "./components/GroupSelectors";
import Provider from "./store/Provider";

const ListBoxWithProvider = React.forwardRef((props, ref) => {
  const { children, ...moreProps } = props;

  const ch = children !== null && React.Fragment === children.type ? children.props.children : children;

  debugger;

  const childrenWithGroupSelectors = props.children
    ? [...groupSelectors({ children, hasGroupSelection: props.hasGroupSelection }), ...ch]
    : [];

  return (
    <Provider {...moreProps} childrenOptions={childrenWithGroupSelectors}>
      <ListBox {...moreProps} ref={ref}>
        {childrenWithGroupSelectors}
      </ListBox>
    </Provider>
  );
});

export default ListBoxWithProvider;

ListBoxWithProvider.propTypes = propTypes;
ListBoxWithProvider.defaultProps = defaultProps;
ListBoxWithProvider.Option = Option;
ListBoxWithProvider.Group = Group;
ListBoxWithProvider.Footer = Footer;
