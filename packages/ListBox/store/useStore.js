import React from "react";
import { StoreContext } from "./Provider";

export default function useStore() {
  const { state, dispatch } = React.useContext(StoreContext);
  return [state, dispatch];
}
