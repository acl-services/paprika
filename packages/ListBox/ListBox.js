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

import {
  getDOMAttributesForListBoxContainer,
  getDOMAttributesForListBox,
  getDOMAttributesForListBoxButton,
} from "./helpers/DOMAttributes";

import { PopoverStyled, ListBoxContainerStyled, ListBoxStyled } from "./ListBox.styles";
import useListBox from "./useListBox";

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
    ...moreProps
  } = props;

  const $refListBox = React.useRef();
  const $refListBoxContainer = React.useRef();
  const $refListBoxTrigger = React.useRef();
  const $refListBoxTriggerContainer = React.useRef();
  const $refListBoxFilterInput = React.useRef();
  const listBoxOptions = props.children;

  const {
    handleBlur,
    handleClickListBoxButton,
    handleClickListBoxIsMultiAccept,
    handleClickListBoxIsMultiCancel,
    handleClickListBoxOption,
    handleKeyDownListBoxContainer,
    set,
    state,
  } = useListBox({
    $refListBoxTrigger,
    $refListBoxContainer,
    $refListBoxTriggerContainer,
    $refListBoxFilterInput,
    $refListBox,
    hasFilter: props.hasFilter,
    isMulti: props.isMulti,
    listBoxOptions,
    placeholder: props.placeholder,
    isPopoverOpen: props.isPopoverOpen,
    renderLabel: props.renderLabel,
  });

  const { options: stateOptions, isPopoverOpen: stateIsPopoverOpen, hasNoResults: stateHasNoResults } = state;

  const renderLabelProps = {
    getDOMAttributesForListBoxButton,
    handleClickListBoxButton,
    handleKeyDownListBoxContainer,
    placeholder: props.placeholder,
    ref: $refListBoxTrigger,
  };

  return (
    <Provider
      {...props}
      options={props.children}
      refTrigger={$refListBoxTrigger}
      refListBoxContainer={$refListBoxContainer}
      refTriggerContainer={$refListBoxTriggerContainer}
      refFilterInput={$refListBoxFilterInput}
      refListBox={$refListBox}
    >
      <Popover {...moreProps} state={state}>
        <Trigger
          renderLabel={renderLabel}
          onClickTrigger={handleClickListBoxButton}
          onKeyDownTrigger={handleKeyDownListBoxContainer}
          refTriggerContainer={$refListBoxTriggerContainer}
          refTrigger={$refListBoxTrigger}
          renderLabelProps={renderLabelProps}
          state={state}
          set={set}
          isMulti={props.isMulti}
          placeholder={props.placeholder}
        />
        <Content onBlur={handleBlur} ref={$refListBoxContainer} onKeyDown={handleKeyDownListBoxContainer}>
          <Box state={state}>
            <Filter
              ref={$refListBoxFilterInput}
              set={set}
              state={state}
              options={stateOptions}
              hasGroupFilter={props.hasGroupFilter}
            />
            <List state={state} height={height} ref={$refListBox}>
              <Options state={state} onClickOption={handleClickListBoxOption} />
            </List>
            <NoResults noResultsMessage={props.noResultsMessage} state={state} />
            <Footer
              state={state}
              hasFooter={props.hasFooter}
              onClickCancel={handleClickListBoxIsMultiCancel}
              onClickAccept={handleClickListBoxIsMultiAccept}
              onClickClear={() => {}}
            />
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
