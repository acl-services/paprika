import React from "react";
import ListBoxComponent, { propTypes, defaultProps } from "./ListBox";
import Provider from "./store/Provider";
import Group from "./components/Group";
import Option from "./components/Option";
import Footer from "./components/Footer";

const ListBox = React.forwardRef((props, ref) => {
  return (
    <Provider {...props} childrenListBoxOptions={props.children}>
      <ListBoxComponent {...props} ref={ref} />
    </Provider>
  );
});

export default ListBox;

ListBox.propTypes = propTypes;
ListBox.defaultProps = defaultProps;
ListBox.Option = Option;
ListBox.Group = Group;
ListBox.Footer = Footer;
