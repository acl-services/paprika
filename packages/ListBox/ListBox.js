import React from "react";
import Popover from "@paprika/popover";
import PropTypes from "prop-types";
import Option from "./components/Option";
import Options from "./components/Options";
import Filter from "./components/Filter";
import Trigger from "./components/Trigger";
import Group from "./components/Group";
import Footer from "./components/Footer";
import NoResults from "./components/NoResults";
import Provider from "./store/Provider";
import useStore from "./store/useStore";

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

  const $refListBox = React.createRef();
  const $refListBoxContainer = React.createRef();
  const $refListBoxTrigger = React.createRef();
  const $refListBoxTriggerContainer = React.createRef();
  const $refListBoxFilterInput = React.createRef();
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
      <PopoverStyled {...moreProps} offset={0} maxWidth={state.triggerWidth} isOpen={stateIsPopoverOpen}>
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
        <Popover.Content
          onBlur={handleBlur}
          ref={$refListBoxContainer}
          {...getDOMAttributesForListBoxContainer()}
          onKeyDown={handleKeyDownListBoxContainer}
        >
          <ListBoxContainerStyled triggerWidth={state.triggerWidth}>
            <Filter
              ref={$refListBoxFilterInput}
              set={set}
              state={state}
              options={stateOptions}
              hasGroupFilter={props.hasGroupFilter}
            />
            <ListBoxStyled
              hasNoResults={stateHasNoResults}
              height={height}
              ref={$refListBox}
              {...getDOMAttributesForListBox(state)}
            >
              <Options state={state} onClickOption={handleClickListBoxOption} />
            </ListBoxStyled>
            <NoResults noResultsMessage={props.noResultsMessage} state={state} />
            <Footer
              state={state}
              hasFooter={props.hasFooter}
              onClickCancel={handleClickListBoxIsMultiCancel}
              onClickAccept={handleClickListBoxIsMultiAccept}
              onClickClear={() => {}}
            />
          </ListBoxContainerStyled>
        </Popover.Content>
      </PopoverStyled>
    </Provider>
  );
}

ListBox.propTypes = propTypes;
ListBox.defaultProps = defaultProps;
ListBox.Option = Option;
ListBox.Group = Group;
