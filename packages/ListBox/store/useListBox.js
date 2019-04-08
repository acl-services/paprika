import React from "react";
import { StoreContext } from "./Provider";
import * as types from "./actionTypes";

export default function useListBox() {
  const { state, dispatch } = React.useContext(StoreContext);
  return [state, dispatch];
}

useListBox.types = types;

// activeOption,                               ====> ✅ highlightedOption | state
// filteredOptions: [],                        ====> ✅👩‍💻 filteredOptions | addFilterOption, removeFilterOption | state
// Footer,                                     ====> 🙅‍ this is a prop
// groups,                                     ====> 🙅 this is a prop
// hasFilter: props.hasFilter,                 ====> ✅ hasFilter | state
// hasNoResults: false,                        ====> ✅ hasFilteredResults | state
// hasPopupOpened: false,                      ====> ✅ isMounted | state
// height,                                     ====> ✅ height | state
// hideOptionOnSelected,                       ====> ✅👩‍💻 hiddenOptions: [] <- should an array | addHiddentOption | removeHiddenOption
// isDisabled,                                 ====> ✅ isDisabled
// isInlineDisplay,                            ====> 👩‍💻 isInline
// isMulti,                                    ====> isMulti
// isPopoverEager,                             ====> "isPopoverEager"
// lastActiveOptionIndexAffected: null,        ====> 🙅
// onChange,                                   ====> onChange
// options,                                    ====> options
// placeholder,                                ====> placeholder
// preventOnBlurForTriggerListBox,             ====> 👩‍💻 preventOnBlurForTriggerListBox
// refFilterInput,
// refListBox,
// refListBoxContainer,
// refTrigger,
// refTriggerContainer,
// renderChecker: props.renderChecker,          ====> 👩‍💻 renderCheckmark
// selectedOptions,                             ====> selectedOptions | addSelectOption | removeSelectOption
// shouldListBoxContentScroll: true,            ====> 👩‍💻 shouldContentScroll
// triggerWidth: 0,                             ====>

// const ListBox = (props) => {return (
//   <ListBox>
//     <ListBox.Filter />
//     <ListBox.Selector byGroup="" />
//     <ListBox.Divider label="" />
//     <ListBox.Option
//       group=""
//       isSelected
//       isHidden
//       IsClickable
//       onClick={}
//       value=""
//       label=""
//       render={({isSelected, isHidden, IsClickable, label, value,}) => {}}
//     />
//     <ListBox.Footer />
//   </ListBox>
// )}

// TODO:
// - [] clean state since I removed the rendering process from state to props
// - [] document the double render of the state and the options, how we can do it better
// - [] add support for the footer again
// - [] write example with lazy loading
// - [] document support for multi selects
// - [] add story with pre created filters for groups
// - [] where should onChange be fired on the reducer? in what file?
// - [] add useEffect for props on children :P since I removed the effect for tracking children changes
// - [] replace actionTypes import for useListBox.types.

// CURRENT keep working on footer has footer and make it block any other action unless the buttons are clicked
