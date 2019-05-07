import React from "react";
import PropTypes from "prop-types";
import reducer from "./reducer";
import { getDataOptions } from "../components/Option/helpers/optionState";

export const StoreContext = React.createContext();

function initializeState(props) {
  const {
    childrenOptions,
    hasFilter,
    height,
    hideOptionOnSelected,
    isDisabled,
    isInline,
    isMulti,
    isPopoverEager,
    isPopoverOpen,
    onChange,
    onDeselected,
    onSelected,
    placeholder,
    preventOnBlurForTriggerListBox,
    refFilterInput,
    refFooterContainer,
    refListBox,
    refListBoxContainer,
    refTrigger,
    refTriggerContainer,
  } = props;

  // initialize state for options and groups
  const options = getDataOptions(childrenOptions);
  // const Footer = getFooter(childrenOptions);
  const selectedOptions = Object.keys(options)
    .filter(key => options[key].isSelected)
    .map(key => Number.parseInt(key, 10));

  let activeOption = null;
  if (selectedOptions.length && !props.isMulti) {
    activeOption = selectedOptions[0];
  }

  const initialState = {
    activeOption,
    filteredOptions: [],
    hasFilter,
    hasFooter: false,
    hasPopupOpened: false,
    height,
    hideOptionOnSelected,
    isDisabled,
    isInline,
    isMulti,
    isPopoverEager,
    isPopoverOpen,
    noResultsFound: false,
    onChange,
    onDeselected,
    onSelected,
    options,
    placeholder,
    preventOnBlurForTriggerListBox,
    refFilterInput,
    refFooterContainer,
    refListBox,
    refListBoxContainer,
    refTrigger,
    refTriggerContainer,
    renderCheckbox: props.renderCheckbox,
    selectedOptions,
    shouldContentScroll: true,
    triggerWidth: 0,
  };

  return {
    ...initialState,
    originalState: { ...initialState },
    lastKnownSelectedOptions: initialState.selectedOptions.slice(0),
  };
}

const propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Provider(props) {
  const refFilterInput = React.useRef(null);
  const refFooterContainer = React.useRef(null);
  const refListBox = React.useRef(null);
  const refListBoxContainer = React.useRef(null);
  const refTrigger = React.useRef(null);
  const refTriggerContainer = React.useRef(null);

  const [state, dispatch] = React.useReducer(
    reducer,
    {
      ...props,
      refFilterInput,
      refFooterContainer,
      refListBox,
      refListBoxContainer,
      refTrigger,
      refTriggerContainer,
    },
    initializeState
  );

  const value = { state, dispatch };

  return <StoreContext.Provider value={value}>{props.children}</StoreContext.Provider>;
}

Provider.propTypes = propTypes;
