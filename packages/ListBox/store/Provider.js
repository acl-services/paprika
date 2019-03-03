// - [x] height of the popover
// - [1/2] isDisabled property
//    - on isDisabled be sure all interaction like keyup keydown don't trigger any interaction
// - [] destructuring ...moreProps
// - [] implementing blank option
// - [] testing
// - [] code cleaning
// - [] style cleaning
// - [] documentation
// - [] Bugs
//   - [] When selecting the last option and pressing enter on the accept button
//        the option toggle their selection
//   - [] while navigating with the keyboard if you are in the last option
//        and close the listbox, clicking arrow key, not longer open the
//        listbox though, click up will do it.
import React from "react";
import Proptypes from "prop-types";
import reducer from "./reducer";
import * as actionTypes from "./actionTypes";

import { getDataOptions, getDataGroups } from "../helpers/dataStructure";

function initializeState(props) {
  const groups = getDataGroups(props.options);
  const options = getDataOptions(props.options, groups);

  return {
    ...props,
    activeOption: null,
    filteredOptions: [],
    groups,
    hasNoResults: false,
    hasPopupOpened: false,
    height: props.height,
    options,
    preventOnBlur: false,
    renderChecker: props.renderChecker,
    selectedOptions: [],
    shouldListBoxContentScroll: true,
    triggerWidth: 0,
  };
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

  React.useEffect(() => {
    if (state.hasPopupOpened) {
      const groups = getDataGroups(props.options);
      dispatch({
        type: actionTypes.updateOptions,
        payload: getDataOptions(props.options, groups),
      });
    }
  }, props.options); // eslint-disable-line

  return <StoreContext.Provider value={value}>{props.children}</StoreContext.Provider>;
}

Provider.propTypes = propTypes;
