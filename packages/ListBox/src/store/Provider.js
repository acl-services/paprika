import React from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";
import reducer from "./reducer";
import { getDataOptions } from "../components/Option/helpers/optionState";

export const StoreContext = React.createContext();

function initializeState(props) {
  const {
    childrenOptions,
    height,
    isDisabled,
    isInline,
    isMulti,
    isOpen,
    onChange,
    placeholder,
    refFilterInput,
    refFooterContainer,
    refListBox,
    refListBoxContainer,
    refTrigger,
    refTriggerContainer,
    refLabel,
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
    idListBox: `listBoxId_${uuidv4()}`,
    activeOption,
    filteredOptions: [],
    hasFooter: false,
    hasPopupOpened: false,
    height,
    isDisabled,
    isInline,
    isMulti,
    isOpen,
    noResultsFound: false,
    onChange,
    options,
    placeholder,
    refFilterInput,
    refFooterContainer,
    refListBox,
    refListBoxContainer,
    refTrigger,
    refTriggerContainer,
    selectedOptions,
    shouldContentScroll: true,
    triggerWidth: 0,
    refLabel,
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
