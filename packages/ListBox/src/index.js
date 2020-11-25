import React from "react";
import ListBox, { propTypes, defaultProps } from "./ListBox";
import extractChildren from "./helpers/extractChildren";
import Divider from "./components/Divider";
import Box from "./components/Box/BoxShell";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Option from "./components/Option";
import Popover from "./components/Popover";
import RawItem from "./components/RawItem";
import Trigger from "./components/Trigger";
import Provider from "./store/Provider";
import OnChangeProvider from "./store/OnChangeProvider";
import * as types from "./types";

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
    "ListBox.Popover": popover,
    "ListBox.Trigger": trigger,
    "ListBox.Box": box,
    children: options,
  } = extractChildren(_children, [
    "ListBox.Filter",
    "ListBox.Footer",
    "ListBox.Popover",
    "ListBox.Trigger",
    "ListBox.Box",
  ]);

  return (
    <Provider {...moreProps} childrenOptions={options}>
      <OnChangeProvider onChange={props.onChange}>
        <ListBox {...moreProps} ref={ref} filter={filter} footer={footer} popover={popover} trigger={trigger} box={box}>
          {options}
        </ListBox>
      </OnChangeProvider>
    </Provider>
  );
});

export default ListBoxWithProvider;

ListBoxWithProvider.Box = Box;
ListBoxWithProvider.Divider = Divider;
ListBoxWithProvider.Filter = Filter;
ListBoxWithProvider.Footer = Footer;
ListBoxWithProvider.Option = Option;
ListBoxWithProvider.Popover = Popover;
ListBoxWithProvider.RawItem = RawItem;
ListBoxWithProvider.Trigger = Trigger;

ListBoxWithProvider.defaultProps = defaultProps;
ListBoxWithProvider.displayName = "ListBox";
ListBoxWithProvider.propTypes = propTypes;
ListBoxWithProvider.types = {
  size: {
    SMALL: types.SMALL,
    MEDIUM: types.MEDIUM,
    LARGE: types.LARGE,
  },
  kind: {
    MINOR: types.MINOR,
    PRIMARY: types.PRIMARY,
  },
};
