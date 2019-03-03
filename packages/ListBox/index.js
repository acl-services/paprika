import React from "react";
import ListBoxComponent, { propTypes, defaultProps } from "./ListBox";
import Provider from "./store/Provider";
import Group from "./components/Group";
import Option from "./components/Option";

export default function ListBox(props) {
  return (
    <Provider {...props} options={props.children}>
      <ListBoxComponent {...props} />
    </Provider>
  );
}

ListBox.propTypes = propTypes;
ListBox.defaultProps = defaultProps;
ListBox.Option = Option;
ListBox.Group = Group;
