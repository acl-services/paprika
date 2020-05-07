// this might be better using _.escapeRegExp by lodash. But good enough for now
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

export const filter = ({ state, textSearchValue }) => {
  const { options } = state;
  const keys = Object.keys(options);

  if (keys.length) {
    const filteredOptions = keys.filter(key => {
      const hasLabel = typeof options[key].content === "string" || options[key].label || null;

      if (hasLabel) {
        const label = options[key].content === "string" || options[key].label;

        const filterRegExp = new RegExp(escapeRegExp(textSearchValue), "gi");
        return label.match(filterRegExp);
      }

      return false;
    });

    if (!filteredOptions.length) {
      return [];
    }

    return filteredOptions.map(key => Number.parseInt(key, 10));
  }

  return [];
};

export const applyFilter = (dispatch, type) => (filteredOptions, noResultsFound) => {
  dispatch({
    type,
    payload: {
      filteredOptions,
      noResultsFound,
    },
  });
};
