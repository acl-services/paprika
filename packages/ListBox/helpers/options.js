export function isOptionSelected(state, index) {
  return state.selectedOptions.includes(index);
}

export function isOptionVisible(state, key) {
  const keyInt = Number.parseInt(key, 10);

  if (state.hideOptionOnSelected && state.selectedOptions.includes(keyInt)) {
    return false;
  }

  if (state.hasNoResults) {
    return false;
  }

  if (state.options[keyInt].isHidden) {
    return false;
  }

  return !state.filteredOptions.length || state.filteredOptions.includes(keyInt);
}

function isDisabled(state, key) {
  return state.options[key].isDisabled;
}

export function getNextOptionActiveIndex(state, isAscending = true) {
  if (state.hasNoResults) {
    return null;
  }

  if (state.activeOption === null && state.options[0].isInteractive) {
    return 0;
  }

  const optionsKeys = Object.keys(state.options);

  const { activeOption, filteredOptions, options } = state;
  let index = null;

  let keepIterating = true;
  let key = activeOption;

  while (keepIterating) {
    if (isAscending) {
      if (filteredOptions.length === 1) {
        keepIterating = false;
        return filteredOptions[0];
      }

      if ((filteredOptions.length && key + 1 > options.length) || key + 1 > optionsKeys.length - 1) {
        keepIterating = false;
        return null;
      }

      key++;
    } else {
      if ((filteredOptions.length && key - 1 < 0) || key - 1 < 0) {
        keepIterating = false;
        return null;
      }

      key--;
    }

    if (isOptionVisible(state, key) && !isDisabled(state, key) && state.options[key].isInteractive) {
      index = key;
      keepIterating = false;
    }
  }

  return index || 0;
}

export function getNextOptionActiveIndexLooping(state) {
  let activeIndex = getNextOptionActiveIndex(state);
  if (!activeIndex) {
    activeIndex = getNextOptionActiveIndex(state, false);
  }

  return activeIndex;
}
