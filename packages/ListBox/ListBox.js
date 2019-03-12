/**
 TODO:
 - height of the popover
 - isDisabled property
 - destructure ...moreProps
 -
* */

import React from "react";
import Popover from "@paprika/popover";
import { string, number, bool, node, func } from "prop-types";
import Option from "./components/Option";
import Filter from "./components/Filter";
import Group from "./components/Group";

import {
  PopoverStyled,
  ListBoxTriggerStyled,
  ListBoxContainerStyled,
  ListBoxStyled,
  ListBoxOptionStyled,
  ListBoxOptionDividerStyled,
  TriggerArrowStyled,
} from "./ListBox.styles";
import useListBox from "./useListBox";

export const propTypes = {
  children: PropTypes.node,
  hasFilter: PropTypes.bool,
  hasFooter: PropTypes.bool,
  hasGroupFilter: PropTypes.bool,
  height: PropTypes.number,
  isDisabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  isPopoverEager: PropTypes.bool,
  isPopoverOpen: PropTypes.bool,
  label: PropTypes.node,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  preventOnBlurOnTrigger: PropTypes.bool,
  renderLabel: PropTypes.func,
  typeOfChecker: PropTypes.oneOf(["checkbox"]),
  zIndex: PropTypes.number,
};

const defaultProps = {
  children: null,
  hasFilter: false,
  hasGroupFilter: false,
  isHidden: false,
  isMulti: false,
  isPopoverEager: true,
  isPopoverOpen: false,
  placeholder: "select one of the options",
  preventOnBlurOnTrigger: false,
  renderLabel: null,
  typeOfChecker: null,
  zIndex: null,
};

export default function ListBox(props) {
  const {
    children,
    hasFilter,
    hasFooter,
    hasGroupFilter,
    height,
    isMulti,
    isPopoverEager,
    isPopoverOpen,
    onChange,
    placeholder,
    zIndex,
    renderLabel,
    typeOfChecker,
    ...moreProps
  } = props;

  const $refListBox = React.createRef();
  const $refListBoxContainer = React.createRef();
  const $refListBoxTrigger = React.createRef();
  const $refListBoxTriggerContainer = React.createRef();
  const $refListBoxFilterInput = React.createRef();
  const listBoxHeight = $refListBox.current ? $refListBox.current.offsetHeight : 0;
  const listBoxOptions = props.children;

  const {
    getDOMAttributesForListBox,
    getDOMAttributesForListBoxButton,
    getDOMAttributesForListBoxContainer,
    getDOMAttributesForListBoxOption,
    getListboxLabel,
    handleBlur,
    handleClickListBoxButton,
    handleClickListBoxIsMultiAccept,
    handleClickListBoxIsMultiCancel,
    handleClickListBoxOption,
    handleKeyDownListBoxContainer,
    isOptionSelected,
    isOptionVisible,
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
  const optionsArray = Object.keys(stateOptions);
  const lastGroupTitle = null;

  const renderLabelProps = {
    getDOMAttributesForListBoxButton,
    handleClickListBoxButton,
    handleKeyDownListBoxContainer,
    placeholder: props.placeholder,
    ref: $refListBoxTrigger,
  };
  return (
    <Popover {...moreProps} zIndex={zIndex} isEager={isPopoverEager}>
      <Trigger renderLabel={renderLabel} placeholder={props.placeholder} />
      <Content>
        <Box>
          <Filter hasGroupFilter={props.hasGroupFilter} />
          <List height={height}>
            <Options />
          </List>
          <NoResults label={props.label} />
          <Footer hasFooter={props.hasFooter} onClickClear={() => {}} />
        </Box>
      </Content>
    </Popover>
  );
}

ListBox.propTypes = propTypes;
ListBox.defaultProps = defaultProps;
ListBox.Option = Option;
ListBox.Group = Group;
