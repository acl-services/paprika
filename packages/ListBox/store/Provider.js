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

import { getDataOptions, getDataGroups } from "../helpers/dataStructure";

function initializeState(props) {
  const options = getDataOptions(props.options, props.isMulti);
  const groups = getDataGroups(props.options, props.isMulti);

  return {
    ...props,
    height: props.height,
    renderChecker: props.renderChecker,
    shouldListBoxContentScroll: true,
    activeOption: null,
    filteredOptions: [],
    groups,
    hasNoResults: false,
    hasPopupOpened: false,
    options,
    selectedOptions: [],
    triggerWidth: 0,
  };
}

const propTypes = {
  children: Proptypes.node.isRequired,
};

export const StoreContext = React.createContext();

export default function Provider(props) {
  const [state, dispatch] = React.useReducer(reducer, { ...props }, initializeState);
  const value = { state, dispatch };

  return <StoreContext.Provider value={value}>{props.children}</StoreContext.Provider>;
}

Provider.propTypes = propTypes;
