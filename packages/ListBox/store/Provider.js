import React from "react";
import Proptypes from "prop-types";
import reducer from "./reducer";
import handleChange from "../helpers/handleChange";
import * as effects from "./effects";

import { getDataOptions, getDataGroups } from "../helpers/dataStructure";

function initializeState(props) {
  const groups = getDataGroups(props.options);
  const options = getDataOptions(props.options, groups, props.isMulti);

  const selectedOptions = Object.keys(options)
    .filter(key => options[key].isSelected)
    .map(key => Number.parseInt(key, 10));

  let activeOption = null;
  if (selectedOptions.length && !props.isMulti) {
    activeOption = selectedOptions[0];
  }

  const initialState = {
    ...props,
    activeOption,
    filteredOptions: [],
    groups,
    hasNoResults: false,
    hasPopupOpened: false,
    height: props.height,
    isInlineDisplay: props.isInlineDisplay,
    lastActiveOptionIndexAffected: null,
    options,
    preventOnBlurOnTrigger: props.preventOnBlurOnTrigger,
    renderChecker: props.renderChecker,
    selectedOptions,
    shouldListBoxContentScroll: true,
    triggerWidth: 0,
  };

  handleChange(initialState, { activeOptionIndex: initialState.activeOption }, initialState.selectedOptions, "load");

  return { ...initialState, originalState: { ...initialState } };
}

const propTypes = {
  children: Proptypes.node.isRequired,
};

export const StoreContext = React.createContext();

export default function Provider(props) {
  const refFilterInput = React.useRef();
  const refListBox = React.useRef();
  const refListBoxContainer = React.useRef();
  const refTrigger = React.useRef();
  const refTriggerContainer = React.useRef();

  const [state, dispatch] = React.useReducer(
    reducer,
    { ...props, refFilterInput, refListBox, refListBoxContainer, refTrigger, refTriggerContainer },
    initializeState
  );
  const value = { state, dispatch };

  React.useEffect(
    effects.handleEffectChildrenChange({ props, state, dispatch, getDataGroups, getDataOptions }),
    [props.options] // eslint-disable-line
  );

  return <StoreContext.Provider value={value}>{props.children}</StoreContext.Provider>;
}

Provider.propTypes = propTypes;
