/* eslint-disable react/no-multi-comp, react/prop-types */
import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "@paprika/button";
import { Frame } from "../../stories.styles";
import ListBox from "../../../index";
import fixture from "./lazy.fixture";

const limit = 20;

/* eslint-disable */
// from lodash
const debounce = function(func, wait, immediate) {
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

async function fetchAPI(term, offset = null, limit = 20) {
  const url = "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=";
  const offsetParameter = offset ? `&offset=${offset * limit}` : "";
  // low risk to share api key for now, I can invalidate it later and extracted it to an env variable
  const apiKey = "&apikey=ac7726775d7f6e56add4f57ed5cd9a6b";
  const stream = await fetch(`${url}${term}${offsetParameter}${apiKey}`);
  const data = await stream.json();
  return data;
}

const actionTypes = {
  addSearchedCharacters: "addSearchedCharacters",
  addCharacters: "addCharacters",
  addSelectedCharacters: "addSelectedCharacters",
  updateActiveApiPage: "updateActiveApiPage",
  isDisabled: "isDisabled",
  setSearch: "setSearch",
  setSearchedCharacters: "setSearchedCharacters",
  isLoading: "isLoading",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case actionTypes.addCharacters: {
      return { ...state, characters: payload };
    }

    case actionTypes.isDisabled: {
      return { ...state, isDisabled: payload };
    }

    case actionTypes.addSelectedCharacters: {
      return { ...state, selectedCharacters: payload };
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

function LazyListBox() {
  const [state, dispatch] = React.useReducer(reducer, {
    activeApiPage: [{ offset: 0, limit }, { offset: 0, limit }, { offset: 0, limit }],
    characters: [],
    isDisabled: true,
    isLoading: false,
    search: "",
    searchedCharacters: null,
    selectedCharacters: [],
  });

  const groups = ["n", "z", "s"];

  const handleOnChange = ({ selected, options }) => {
    const selectedIds = selected.map(index => options[index].value);

    dispatch({
      type: actionTypes.addSelectedCharacters,
      payload: selectedIds,
    });
  };

  const handleClickLoadMore = index => () => {
    if (state.isDisabled) {
      return;
    }

    dispatch({
      type: actionTypes.isDisabled,
      payload: true,
    });

    const offset = state.activeApiPage[index].offset + 1;
    const limit = state.activeApiPage[index].limit;
    fetchAPI(groups[index], offset, limit).then(response => {
      const resultsClone = [...state.characters[index].data.results, ...response.data.results];
      response.data.results = resultsClone;
      const charactersClone = state.characters.slice(0);
      charactersClone[index] = response;

      dispatch({
        type: actionTypes.addCharacters,
        payload: charactersClone,
      });

      dispatch({
        type: actionTypes.isDisabled,
        payload: false,
      });

      const cloneArray = [...state.activeApiPage];
      cloneArray[index] = { offset, limit };
      dispatch({
        type: actionTypes.updateActiveApiPage,
        payload: cloneArray,
      });
    });
  };

  const handleFilter = debounce(({ search }) => {
    dispatch({
      type: actionTypes.setSearch,
      payload: search,
    });

    if (search) {
      dispatch({
        type: actionTypes.isLoading,
        payload: true,
      });

      fetchAPI(search, 0, limit).then(response => {
        dispatch({
          type: actionTypes.setSearchedCharacters,
          payload: response,
        });

        dispatch({
          type: actionTypes.isLoading,
          payload: false,
        });
      });
    }
  }, 400);

  React.useEffect(() => {
    // Comments for reference only. Faking the initial fetch the following pseudo code should retrive the first load of data
    // Promise.all([getCharacters("n"), getCharacters("z"), getCharacters("s")]).then(values => {
    //   values;
    // });
    // I saved the initial load in a static fixture to prevent run out of requests (API limit)

    const charactersFixture = fixture();
    dispatch({
      type: actionTypes.addCharacters,
      payload: charactersFixture,
    });

    dispatch({
      type: actionTypes.isDisabled,
      payload: false,
    });
  }, []);

  function renderLoadMore(index) {
    const offset =
      state.activeApiPage[index].offset * state.activeApiPage[index].limit + state.activeApiPage[index].limit;
    const total = state.characters[index].data.total;

    return offset <= total ? (
      <ListBox.Option preventDefaultOnSelect onClick={handleClickLoadMore(index)}>
        Show more ({offset} / {total}) ...
      </ListBox.Option>
    ) : null;
  }

  function renderFooter() {
    return <ListBox.Footer isDisabled={state.isDisabled} />;
  }

  function renderOptions() {
    const characterOptions = state.characters.map(character => {
      return character.data.results.map(result => {
        return (
          <ListBox.Option value={result.id} key={result.id} isSelected={state.selectedCharacters.includes(result.id)}>
            {result.name}
          </ListBox.Option>
        );
      });
    });

    return (
      <React.Fragment>
        <ListBox.Group groupId="group_n" key="group_n" label="𝓝">
          {characterOptions[0]}
          {renderLoadMore(0)}
        </ListBox.Group>
        <ListBox.Group groupId="group_z" key="group_z" label="𝓩">
          {characterOptions[1]}
          {renderLoadMore(1)}
        </ListBox.Group>
        <ListBox.Group groupId="group_s" key="group_s" label="𝓢">
          {characterOptions[2]}
          {renderLoadMore(2)}
        </ListBox.Group>
        {renderFooter()}
      </React.Fragment>
    );
  }

  function renderSearchedOptions() {
    if (!state.searchedCharacters) return null;

    if (!state.searchedCharacters.data || !state.searchedCharacters.data.results.length)
      return <ListBox.Option preventDefaultOnSelect>No Results</ListBox.Option>;

    const Options = state.searchedCharacters.data.results.map(result => {
      return (
        <ListBox.Option value={result.id} key={result.id} isSelected={state.selectedCharacters.includes(result.id)}>
          {result.name}
        </ListBox.Option>
      );
    });

    return (
      <React.Fragment>
        <ListBox.Group groupId="group_results" label="Results">
          {Options}
        </ListBox.Group>
        {renderFooter()}
      </React.Fragment>
    );
  }

  const renderTrigger = (state, dispatch, { getDOMAttributesForListBoxButton }) => (
    <Button
      {...getDOMAttributesForListBoxButton()}
      ref={state.refTrigger}
      onClick={() => {
        dispatch({ type: "OPEN_POPOVER" });
      }}
    >
      Marvel API
    </Button>
  );

  return (
    <Frame>
      <ListBox
        onChange={handleOnChange}
        isMulti
        height={350}
        placeholder="Marvel API"
        isDisabled={state.isDisabled}
        hasFilter
        filter={handleFilter}
        renderTrigger={renderTrigger}
      >
        {state.isLoading ? <ListBox.Option preventDefaultOnSelect>Fetching data ...</ListBox.Option> : null}
        {state.searchedCharacters && state.search !== "" ? renderSearchedOptions() : null}
        {state.characters.length && state.search === "" ? renderOptions() : null}
      </ListBox>
    </Frame>
  );
}

storiesOf("ListBox / recipes", module).add("Lazy ListBox", () => <LazyListBox />);
