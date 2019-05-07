import React from "react";
import Button from "@paprika/button";
import { Frame } from "../../stories.styles";
import ListBox from "../../../src";
import fixture from "./lazy.fixture";
import MarvelOption from "./MarvelOption";
import Results from "./Results";

import { debounce, fetchAPI, reducer, actionTypes } from "./helpers";

const limit = 20;

const charactersCache = {};

export default function LazyListBox() {
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

  const handleChange = (selected, options) => {
    if (!selected.length) return;

    selected.forEach(index => {
      const id = options[index].value.id;
      if (!Object.prototype.hasOwnProperty.call(charactersCache, id)) {
        charactersCache[id] = { ...options[index].value };
      }
    });
  };

  const handleClickAccept = (selected, options, selectedIndex, more) => {
    const selectedIds = selected.map(id => {
      return options[id].value.id;
    });

    const { dispatch: dispatchListBox, actionTypes: actionTypesListBox } = more;

    dispatch({
      type: actionTypes.addSelectedCharacters,
      payload: selectedIds,
    });

    dispatch({
      type: actionTypes.setSearch,
      payload: "",
    });

    dispatchListBox({
      type: actionTypesListBox.clear,
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
    return <ListBox.Footer onClickAccept={handleClickAccept} isDisabled={state.isDisabled} />;
  }

  function renderOptions() {
    const characterOptions = state.characters.map(character => {
      return character.data.results.map(result => {
        return (
          <ListBox.Option value={result} key={result.id} isHidden={state.selectedCharacters.includes(result.id)}>
            <MarvelOption result={result} />
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
        <ListBox.Option value={result} key={result.id} isHidden={state.selectedCharacters.includes(result.id)}>
          <MarvelOption result={result} />
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
      {state.selectedCharacters.length ? (
        <Results charactersCache={charactersCache} ids={state.selectedCharacters} />
      ) : null}
      <ListBox
        filter={handleFilter}
        hasFilter
        height={350}
        isDisabled={state.isDisabled}
        isMulti
        onChange={handleChange}
        placeholder="Marvel API"
        renderCheckbox={() => null}
        renderTrigger={renderTrigger}
      >
        <ListBox.Option preventDefaultOnSelect isHidden={!state.isLoading}>
          Fetching data ...
        </ListBox.Option>
        {state.searchedCharacters && state.search !== "" ? renderSearchedOptions() : null}
        {state.characters.length && state.search === "" ? renderOptions() : null}
      </ListBox>
    </Frame>
  );
}
