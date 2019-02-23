import React from "react";
import Proptypes from "prop-types";
import reducer from "./reducer";

const initialState = {
  activeOption: 0,
  filteredOptions: [],
  groups: [],
  hasFilter: false,
  hasNoResults: false,
  hasPopupOpened: false,
  isMulti: false,
  isPopoverOpen: false,
  options: [],
  selectedOptions: [],
  triggerWidth: 0,
};

const propTypes = {
  children: Proptypes.node.isRequired,
};

export const StoreContext = React.createContext();
const [state, dispatch] = React.useReducer(reducer, initialState);
const value = { state, dispatch };

export default function Context(props) {
  return <StoreContext.Provider value={value}>{props.children}</StoreContext.Provider>;
}

Context.propTypes = propTypes;
