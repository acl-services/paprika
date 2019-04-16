import React from "react";
import ListBox, { propTypes, defaultProps } from "./ListBox";
import Footer from "./components/Footer";
import Group from "./components/Group";
import Option from "./components/Option";
import groupSelectors from "./components/GroupSelectors";
import Provider from "./store/Provider";

const ListBoxWithProvider = React.forwardRef((props, ref) => {
  const { children, ...moreProps } = props;

  /*
  AssureS the structure of the children is one of the following:

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

  const extractedChildren = React.Children.toArray(children)
    .filter(child => child)
    .map(child => {
      return child !== null && React.Fragment === child.type ? child.props.children : child;
    });

  const childrenWithGroupSelectors = props.children
    ? [
        ...groupSelectors({
          children: extractedChildren,
          hasGroupSelection: props.hasGroupSelection,
        }),
        ...extractedChildren,
      ]
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
