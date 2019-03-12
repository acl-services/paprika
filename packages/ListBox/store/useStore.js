import React from "react";
import { StoreContext } from "./Provider";
import * as effects from "./effects";

export default function useStore() {
  const { state, dispatch } = React.useContext(StoreContext);

  React.useEffect(effects.handleEffectIsPopOverOpen(state, dispatch), [state.isPopoverOpen]);
  React.useEffect(effects.handleEffectListBoxWidth(state, dispatch), [state.refTriggerContainer.current]);
  React.useEffect(effects.handleEffectListBoxScrolled(state), [state.activeOption]);
  return [state, dispatch];
}
