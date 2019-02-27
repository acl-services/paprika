import React from "react";
import PropTypes from "prop-types";
import Provider from "./store/Provider";
import Content from "./components/Content";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Group from "./components/Group";
import NoResults from "./components/NoResults";
import Option from "./components/Option";
import Options from "./components/Options";
import Popover from "./components/Popover";
import Trigger from "./components/Trigger";
import Box from "./components/Box";
import List from "./components/List";

const propTypes = {
  children: PropTypes.node,
  hasFilter: PropTypes.bool,
  hasFooter: PropTypes.bool,
  hasGroupFilter: PropTypes.bool,
  height: PropTypes.number,
  isMulti: PropTypes.bool,
  isPopoverOpen: PropTypes.bool,
  noResultsMessage: PropTypes.node,
  placeholder: PropTypes.string,
  renderLabel: PropTypes.func,
  isDisabled: PropTypes.bool,
  typeOfChecker: PropTypes.oneOf(["checkbox", "plus-sign"]),
};

const defaultProps = {
  children: null,
  hasFilter: false,
  hasFooter: false,
  hasGroupFilter: false,
  height: 200,
  isMulti: false,
  isPopoverOpen: false,
  noResultsMessage: "There is not results for your filter",
  placeholder: "select one of the options",
  renderLabel: null,
  isDisabled: false,
  typeOfChecker: null,
};

export default function ListBox(props) {
  const {
    children,
    hasFilter,
    hasGroupFilter,
    isMulti,
    isPopoverOpen,
    placeholder,
    renderLabel,
    height,
    hasFooter,
    typeOfChecker,
    ...moreProps
  } = props;

  const refListBox = React.useRef();
  const refListBoxContainer = React.useRef();
  const refTrigger = React.useRef();
  const refTriggerContainer = React.useRef();
  const refFilterInput = React.useRef();

  return (
    <Provider
      {...props}
      options={props.children}
      refTrigger={refTrigger}
      refListBoxContainer={refListBoxContainer}
      refTriggerContainer={refTriggerContainer}
      refFilterInput={refFilterInput}
      refListBox={refListBox}
    >
      <Popover {...moreProps}>
        <Trigger
          renderLabel={renderLabel}
          refTriggerContainer={refTriggerContainer}
          refTrigger={refTrigger}
          placeholder={props.placeholder}
        />
        <Content ref={refListBoxContainer}>
          <Box>
            <Filter ref={refFilterInput} hasGroupFilter={props.hasGroupFilter} />
            <List height={height} ref={refListBox}>
              <Options />
            </List>
            <NoResults noResultsMessage={props.noResultsMessage} />
            <Footer hasFooter={props.hasFooter} onClickClear={() => {}} />
          </Box>
        </Content>
      </Popover>
    </Provider>
  );
}

ListBox.propTypes = propTypes;
ListBox.defaultProps = defaultProps;
ListBox.Option = Option;
ListBox.Group = Group;
