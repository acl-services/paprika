import React from "react";
import ListBox, { propTypes, defaultProps } from "./ListBox";
import Footer from "./components/Footer";
import Group from "./components/Group";
import Option from "./components/Option";
import Provider from "./store/Provider";

const ListBoxWithProvider = React.forwardRef((props, ref) => {
  const { children, ...moreProps } = props;

  /*
  Assures the structure of the children is one of the following:

  <ListBox.Group>
    <ListBox.Option />
  </ListBox.Group>

  - OR -

  <React.Fragrment>
    <ListBox.Option />
  </React.Fragrment>

  - OR -
    [
      <React.Fragrment>
        <ListBox.Option />
      </React.Fragrment>,
      <React.Fragrment>
        <ListBox.Option />
      </React.Fragrment>
    ]
    */

  const extractedChildren = React.Children.map(children, child => {
    return child !== null && React.Fragment === child.type ? child.props.children : child;
  });

  return (
    <Provider {...moreProps} childrenOptions={extractedChildren}>
      <ListBox {...moreProps} ref={ref}>
        {extractedChildren}
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
