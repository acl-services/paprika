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
    placeholder,
    refFilterInput,
    refFooterContainer,
    refListBox,
    refListBoxContainer,
    refTrigger,
    refTriggerContainer,
    refLabel,
    size,
  } = props;
  const formElementId = props.id;
  const formElementLabelDescribedBy = props["aria-describedby"];

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
    formElementId,
    formElementLabelDescribedBy,
    hasFilter: false,
    hasFooter: false,
    hasPopupOpened: false,
    height,
    idListBox: `listBoxId_${uuidv4()}`,
    isDisabled,
    isInline,
    isMulti,
    isOpen,
    lastKnownSelectedOptions: selectedOptions.slice(0),
    listBoxHasFocus: true,
    noResultsFound: false,
    onChangeFn: null,
    options,
    placeholder,
    refFilterInput,
    refFooterContainer,
    refLabel,
    refListBox,
    refListBoxContainer,
    refTrigger,
    refTriggerContainer,
    selectedOptions,
    size,
    triggerWidth: 0,
  };

  return {
    ...initialState,
    originalState: { ...initialState },
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
