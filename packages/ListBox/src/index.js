import React from "react";
import { v4 as uuidv4 } from "uuid";
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
import PropsProvider from "./store/PropsProvider";
import * as types from "./types";

const ListBoxWithProvider = React.forwardRef((props, ref) => {
  const { children, id, isReadOnly, ...moreProps } = props;

  const providedProps = {
    idListBox: id || `list-box-trigger_${uuidv4()}`,
    isReadOnly,
  };

  /*
    Assures the structure of the children is one of the following:

    <React.Fragment>
      <ListBox.Option />
    </React.Fragment>

    - OR -

    [
      <React.Fragment>
        <ListBox.Option />
      </React.Fragment>,
      <React.Fragment>
        <ListBox.Option />
      </React.Fragment>
    ]
  */

  const _children = React.Children.map(children, child => {
    return child !== null && React.Fragment === child.type ? child.props.children : child;
  });

  const {
    "ListBox.Box": box,
    "ListBox.Filter": filter,
    "ListBox.Footer": footer,
    "ListBox.Popover": popover,
    "ListBox.Trigger": trigger,
    children: options,
  } = extractChildren(_children, [
    "ListBox.Box",
    "ListBox.Filter",
    "ListBox.Footer",
    "ListBox.Popover",
    "ListBox.Trigger",
  ]);

  return (
    <Provider {...moreProps} childrenOptions={options}>
      <OnChangeProvider onChange={props.onChange}>
        <PropsProvider {...providedProps}>
          <ListBox
            {...moreProps}
            box={box}
            filter={filter}
            footer={footer}
            popover={popover}
            trigger={trigger}
            ref={ref}
          >
            {options}
          </ListBox>
        </PropsProvider>
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

ListBoxWithProvider.displayName = "ListBox";
ListBoxWithProvider.propTypes = propTypes;
ListBoxWithProvider.defaultProps = defaultProps;

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
