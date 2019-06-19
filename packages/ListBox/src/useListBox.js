import React from "react";
import { StoreContext } from "./store/Provider";
import * as types from "./store/actionTypes";

export default function useListBox() {
  const { state, dispatch } = React.useContext(StoreContext);
  return [state, dispatch];
}

useListBox.types = types;
