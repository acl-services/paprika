export const handleEffectValue = (props, applyFilter) => () => {
  if (!props.value) {
    applyFilter({ filteredOptions: [], noResultsFound: false });
  }
};

export const handleEffectIsPopOverOpen = (state, setTextSearch) => () => {
  if (!state.isPopoverOpen) {
    setTextSearch("");
  }
};

export const handleEffectTextSearch = (textSearch, applyFilter) => () => {
  if (!textSearch) {
    applyFilter({ filteredOptions: [], noResultsFound: false });
  }
};
