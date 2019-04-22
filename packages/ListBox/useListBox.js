import React from "react";
import { StoreContext } from "./store/Provider";
import * as types from "./store/actionTypes";

export default function useListBox() {
  const { state, dispatch } = React.useContext(StoreContext);
  return [state, dispatch];
}

useListBox.types = types;

// activeOption,                               ====> ✅ highlightedOption | state
// filteredOptions: [],                        ====> ✅👩‍💻 filteredOptions | addFilterOption, removeFilterOption | state
// hasPopupOpened: false,                      ====> ✅ isMounted | state
// height,                                     ====> ✅ height | state
// hideOptionOnSelected,                       ====> ✅👩‍💻 hiddenOptions: [] <- should an array | addHiddentOption | removeHiddenOption
// isDisabled,                                 ====> ✅ isDisabled

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
// - [x] bug can't select first filtered element when there is only 1 result on lazy loading story
// - [x] bug isInline the Trigger component shouldn't allowed to have focus
// - [] bug when click on delete tag popover close automatically
// - [] clean and use best practice for the reducer, implmente Kent dods approach for reducer
// - [] clean state since I removed the rendering process from state to props
// - [] document the double render of the state and the options, how we can do it better?
// - [] documentation support for multi selects
// - [] implemented the reset button on Filter Select story
// - [] isPending/isIdle state would need to be work on
// - [] organize stories under example directory on single/multi/recipes
// - [] tokens cleaning process
// - [/] - wont do - add useEffect for individual <Option /> :P since I removed the effect for tracking children changes
// - [/] add story with filters groups // this has been removed from the code since is not use in the ecosystem
// - [/] create onClose onAdd onRemove there are not need right now
// - [~] - won't do this version - DOMAttributes.js cleaning will do next version with screen reader a11y clean file
// - [~] - won't do this version - pixel perfect style implementation won't do this version
// - [~] - won't do this version - react window implementation won't do this version
// - [~] - won't do this version - renderFooter for Footer component
// - [~] - won't do this version - when clicking esc should reset to the lastKnownSelectedOptions in Single and Multi currently is just closing
// - [x] ~where should onChange be fired on the reducer? in what file?~ this occurs where the event happens using applyCallback.js method
// - [x] add support for the footer again
// - [x] bug no rendering groupName on dynamic appending groups with children
// - [x] bug when closing a listbox with filter there is a flickering effect
// - [x] change isInteractive for preventDefaultOnSelect
// - [x] change the name dataStructure.js to something related to optionStateStructure, move it to another folder
// - [x] clean onClick and onKey Enter/Space events
// - [x] fix footer event issue tab and press enter
// - [x] GroupFilter
// - [x] handle support for adding new children to the ListBox.
// - [x] limited the state properties pass on options, currently I'm sending the whole options coming from states
// - [x] make all callback use applyCallback method from helpers
// - [x] might be too expensive to sanitize option by option :/ but might be easier as well
// - [x] move useListBox to the root away from store folder
// - [x] replace actionTypes import for useListBox.types.
// - [x] write example with lazy loading
