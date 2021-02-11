/* eslint-disable */

export const actionTypes = {
  addSearchedCharacters: "addSearchedCharacters",
  addCharacters: "addCharacters",
  addSelectedCharacters: "addSelectedCharacters",
  updateActiveApiPage: "updateActiveApiPage",
  isDisabled: "isDisabled",
  setSearch: "setSearch",
  setSearchedCharacters: "setSearchedCharacters",
  isLoading: "isLoading",
};

export function reducer(state, { type, payload }) {
  switch (type) {
    case actionTypes.addCharacters: {
      return { ...state, characters: payload };
    }

    case actionTypes.isDisabled: {
      return { ...state, isDisabled: payload };
    }

    case actionTypes.addSelectedCharacters: {
      return { ...state, selectedCharacters: [...state.selectedCharacters, ...payload] };
    }

    case actionTypes.updateActiveApiPage: {
      return { ...state, activeApiPage: payload };
    }

    case actionTypes.setSearch: {
      return { ...state, search: payload };
    }

    case actionTypes.setSearchedCharacters: {
      return { ...state, searchedCharacters: payload };
    }

    case actionTypes.isLoading: {
      return { ...state, isLoading: payload };
    }

    default:
      return state;
  }
}

// from lodash
export const debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
/* eslint-enable */

export async function fetchAPI(term, offset = null, limit = 20) {
  const url = "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=";
  const offsetParameter = offset ? `&offset=${offset * limit}` : "";
  // low risk to share api key for now, I can invalidate it later and extracted it to an env variable
  const apiKey = "&apikey=ac7726775d7f6e56add4f57ed5cd9a6b";
  const stream = await fetch(`${url}${term}${offsetParameter}${apiKey}`);
  const data = await stream.json();
  return data;
}
