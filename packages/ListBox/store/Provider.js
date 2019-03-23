import React from "react";
import Proptypes from "prop-types";
import reducer from "./reducer";
import handleChange from "../helpers/handleChange";
import * as effects from "./effects";

import { getDataOptions, getDataGroups, getFooter } from "../helpers/dataStructure";

function initializeState(props) {
  const { childrenListBoxOptions, preventOnBlurOnTrigger, isInlineDisplay, height } = props;
  const groups = getDataGroups(childrenListBoxOptions);
  const options = getDataOptions(childrenListBoxOptions, groups, props.isMulti);
  const footer = getFooter(childrenListBoxOptions);

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
    footer,
    groups,
    hasNoResults: false,
    hasPopupOpened: false,
    height,
    isInlineDisplay,
    lastActiveOptionIndexAffected: null,
    options,
    preventOnBlurOnTrigger,
    renderChecker: props.renderChecker,
    selectedOptions,
    shouldListBoxContentScroll: true,
    triggerWidth: 0,
  };

  handleChange(initialState, { activeOptionIndex: activeOption }, selectedOptions, "load");

  return { ...initialState, originalState: { ...initialState } };
}

const propTypes = {
  children: Proptypes.node.isRequired,
};

export const StoreContext = React.createContext();

export default function Provider(props) {
  const refFilterInput = React.useRef(null);
  const refListBox = React.useRef(null);
  const refListBoxContainer = React.useRef(null);
  const refTrigger = React.useRef(null);
  const refTriggerContainer = React.useRef(null);

  const [state, dispatch] = React.useReducer(
    reducer,
    { ...props, refFilterInput, refListBox, refListBoxContainer, refTrigger, refTriggerContainer },
    initializeState
  );

  const value = { state, dispatch };

  React.useEffect(
    effects.handleEffectChildrenLengthChange({ props, dispatch, getDataGroups, getDataOptions }),
    [props.childrenListBoxOptions.length] // eslint-disable-line
  );

  React.useEffect(
    effects.handleEffectHeightChange({ props, dispatch }),
    [props.height] // eslint-disable-line
  );

  React.useEffect(
    effects.handleEffectIsDisabledChange({ dispatch }),
    [props.isDisabled] // eslint-disable-line
  );

  return <StoreContext.Provider value={value}>{props.children}</StoreContext.Provider>;
}

Provider.propTypes = propTypes;
