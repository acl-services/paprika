import React from "react";
import ListBox, { propTypes, defaultProps } from "./ListBox";
import extractChildren from "./helpers/extractChildren";
import Divider from "./components/Divider";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Option from "./components/Option";
import Popover from "./components/Popover";
import RawItem from "./components/RawItem";
import Trigger from "./components/Trigger";
import Provider from "./store/Provider";

const ListBoxWithProvider = React.forwardRef((props, ref) => {
  const { children, ...moreProps } = props;

  /*
  Assures the structure of the children is one of the following:

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

  const _children = React.Children.map(children, child => {
    return child !== null && React.Fragment === child.type ? child.props.children : child;
  });

  const {
    "ListBox.Filter": filter,
    "ListBox.Footer": footer,
    "ListBox.Option": options,
    "ListBox.Popover": popover,
    "ListBox.Trigger": trigger,
  } = extractChildren(_children, [
    "ListBox.Filter",
    "ListBox.Footer",
    "ListBox.Option",
    "ListBox.Popover",
    "ListBox.Trigger",
  ]);

  return (
    <Provider {...moreProps} childrenOptions={options}>
      <ListBox {...moreProps} ref={ref} filter={filter} footer={footer} popover={popover} trigger={trigger}>
        {options}
      </ListBox>
    </Provider>
  );
});

export default ListBoxWithProvider;

ListBoxWithProvider.propTypes = propTypes;
ListBoxWithProvider.defaultProps = defaultProps;
ListBoxWithProvider.Divider = Divider;
ListBoxWithProvider.Filter = Filter;
ListBoxWithProvider.Footer = Footer;
ListBoxWithProvider.Option = Option;
ListBoxWithProvider.Popover = Popover;
ListBoxWithProvider.RawItem = RawItem;
ListBoxWithProvider.Trigger = Trigger;
ListBoxWithProvider.displayName = "ListBox";
ListBoxWithProvider.componentType = "ListBox";
