import React from "react";
import { v4 as uuidv4 } from "uuid";
import useI18n from "@paprika/l10n/lib/useI18n";
import { extractChildrenProps, extractChildren } from "@paprika/helpers";
import ListBox, { propTypes, defaultProps } from "./ListBox";
import Box from "./components/Box/BoxShell";
import Divider from "./components/Divider";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import InfiniteScroll from "./components/InfiniteScroll";
import Option from "./components/Option";
import Popover from "./components/Popover";
import RawItem from "./components/RawItem";
import Trigger from "./components/Trigger";
import A11y from "./components/A11y";
import Provider from "./store/Provider";
import OnChangeProvider from "./store/OnChangeProvider";
import PropsProvider from "./store/PropsProvider";
import * as types from "./types";

const ListBoxWithProvider = React.forwardRef((props, ref) => {
  const { children, hasError, isDisabled, isInline, isReadOnly, placeholder, size, ...moreProps } = props;

  const I18n = useI18n();

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
    "ListBox.InfiniteScroll": infiniteScroll,
    "ListBox.Popover": popover,
    "ListBox.Trigger": trigger,
    children: options,
  } = extractChildren(_children, [
    "ListBox.Box",
    "ListBox.Filter",
    "ListBox.Footer",
    "ListBox.InfiniteScroll",
    "ListBox.Popover",
    "ListBox.Trigger",
  ]);

  const a11yProps = extractChildrenProps(_children, A11y);
  const { id, refLabel, ...moreA11yProps } = a11yProps;
  const providedProps = {
    a11yProps: moreA11yProps,
    hasError,
    idListBox: id || `list-box_${uuidv4()}`,
    isDisabled,
    isInline,
    isReadOnly,
    placeholder: placeholder || I18n.t("listBox.trigger.placeholder"),
    refLabel,
    size,
  };

  return (
    <Provider {...moreProps} childrenOptions={options}>
      <OnChangeProvider onChange={props.onChange}>
        <PropsProvider {...providedProps}>
          <ListBox
            {...moreProps}
            box={box}
            filter={filter}
            footer={footer}
            infiniteScroll={infiniteScroll}
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

ListBoxWithProvider.A11y = A11y;
ListBoxWithProvider.Box = Box;
ListBoxWithProvider.Divider = Divider;
ListBoxWithProvider.Filter = Filter;
ListBoxWithProvider.Footer = Footer;
ListBoxWithProvider.InfiniteScroll = InfiniteScroll;
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
