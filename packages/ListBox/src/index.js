import React from "react";
import ListBox, { propTypes, defaultProps } from "./ListBox";
import { GetTypeOfChildren } from "./helpers/GetTypeOfChildren";
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

  const extractedChildren = React.Children.map(children, child => {
    return child !== null && React.Fragment === child.type ? child.props.children : child;
  });

  const { Filter, Footer, Options, Popover, Trigger } = GetTypeOfChildren(extractedChildren);

  return (
    <Provider {...moreProps} childrenOptions={Options}>
      <ListBox {...moreProps} Filter={Filter} Footer={Footer} Popover={Popover} Trigger={Trigger} ref={ref}>
        {Options}
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
