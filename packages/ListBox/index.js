import React from "react";
import ListBox, { propTypes, defaultProps } from "./ListBox";
import Provider from "./store/Provider";
import Group from "./components/Group";
import Option from "./components/Option";
import Footer from "./components/Footer";

const ListBoxWithProvider = React.forwardRef((props, ref) => {
  return (
    <Provider {...props} childrenOptions={props.children}>
      <ListBox {...props} ref={ref} />
    </Provider>
  );
});

export default ListBoxWithProvider;

ListBoxWithProvider.propTypes = propTypes;
ListBoxWithProvider.defaultProps = defaultProps;
ListBoxWithProvider.Option = Option;
ListBoxWithProvider.Group = Group;
ListBoxWithProvider.Footer = Footer;
