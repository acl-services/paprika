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

const propTypes = {
  children: node,
  hasFilter: bool,
  hasGroupFilter: bool,
  isHidden: bool,
  isMulti: bool,
  isPopoverOpen: bool,
  placeholder: string,
  renderLabel: func,
  height: number,
};

const defaultProps = {
  children: null,
  hasFilter: false,
  hasGroupFilter: false,
  isHidden: false,
  isMulti: false,
  isPopoverOpen: false,
  placeholder: "select one of the options",
  renderLabel: null,
  height: 200,
};

export default function ListBox(props) {
  const {
    children,
    hasFilter,
    hasGroupFilter,
    isHidden,
    isMulti,
    isPopoverOpen,
    placeholder,
    renderLabel,
    height,
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
  let lastGroupTitle = null;

  const renderLabelProps = {
    getDOMAttributesForListBoxButton,
    handleClickListBoxButton,
    handleKeyDownListBoxContainer,
    placeholder: props.placeholder,
    ref: $refListBoxTrigger,
  };
  return (
    <PopoverStyled {...moreProps} offset={0} maxWidth={state.triggerWidth} isOpen={stateIsPopoverOpen}>
      <ListBoxTriggerStyled innerRef={$refListBoxTriggerContainer}>
        {props.renderLabel ? (
          props.renderLabel(renderLabelProps, state, set)
        ) : (
          <button
            type="button"
            onClick={handleClickListBoxButton}
            ref={$refListBoxTrigger}
            onKeyDown={handleKeyDownListBoxContainer}
          >
            {getListboxLabel()}
          </button>
        )}
        <TriggerArrowStyled isOpen={isPopoverOpen} dangerouslySetInnerHTML={{ __html: "&#x25BC;" }} />
      </ListBoxTriggerStyled>

      <Popover.Content
        onBlur={handleBlur}
        innerRef={ref => {
          // https://github.com/reactjs/rfcs/blob/master/text/0017-new-create-ref.md#basic-example
          $refListBoxContainer.current = ref;
        }}
        {...getDOMAttributesForListBoxContainer()}
        listBoxHeight={listBoxHeight}
        onKeyDown={handleKeyDownListBoxContainer}
      >
        <ListBoxContainerStyled triggerWidth={state.triggerWidth}>
          {props.hasFilter && isPopoverOpen && (
            <Filter
              ref={$refListBoxFilterInput}
              set={set}
              state={state}
              options={stateOptions}
              hasGroupFilter={props.hasGroupFilter}
            />
          )}
          <ListBoxStyled
            hasNoResults={stateHasNoResults}
            height={height}
            innerRef={$refListBox}
            {...getDOMAttributesForListBox()}
          >
            {optionsArray.map(key => {
              let needsGroupTitle = false;
              if (stateOptions[key].groupTitle && lastGroupTitle !== stateOptions[key].groupTitle) {
                needsGroupTitle = true;
                lastGroupTitle = stateOptions[key].groupTitle;
              }

              return (
                <React.Fragment key={key}>
                  {needsGroupTitle && !stateHasNoResults ? (
                    <ListBoxOptionDividerStyled aria-hidden="true">
                      {stateOptions[key].groupTitle}
                    </ListBoxOptionDividerStyled>
                  ) : null}
                  {isOptionVisible(key)() ? (
                    <ListBoxOptionStyled
                      {...getDOMAttributesForListBoxOption(stateOptions[key].index)()}
                      id={stateOptions[key].id}
                      isActive={state.activeOption === stateOptions[key].index}
                      isSelected={isOptionSelected(stateOptions[key].index)()}
                      key={stateOptions[key].id}
                      onClick={handleClickListBoxOption(stateOptions[key].index)}
                      role="option"
                    >
                      {stateOptions[key].content}
                    </ListBoxOptionStyled>
                  ) : null}
                </React.Fragment>
              );
            })}
          </ListBoxStyled>
          {isPopoverOpen && stateHasNoResults && (
            <ListBoxOptionStyled>There is not results for your filter</ListBoxOptionStyled>
          )}
          {props.isMulti && isPopoverOpen && (
            <div>
              <button type="button" onClick={handleClickListBoxIsMultiCancel}>
                Cancel
              </button>
              <button type="button" onClick={handleClickListBoxIsMultiAccept}>
                Accept
              </button>
            </div>
          )}
        </ListBoxContainerStyled>
      </Popover.Content>
    </PopoverStyled>
  );
}

ListBox.propTypes = propTypes;
ListBox.defaultProps = defaultProps;
ListBox.Option = Option;
ListBox.Group = Group;
