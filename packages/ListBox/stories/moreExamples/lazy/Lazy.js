import React from "react";
import Button from "@paprika/button";
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
      if (response && response.data) {
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
      } else {
        console.error("something went wrong with the Marvel API");
      }
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
      <ListBox.RawItem key={`RawItem_${index}`} onClick={handleClickLoadMore(index)}>
        Show more ({offset} / {total}) ...
      </ListBox.RawItem>
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
        <ListBox.Divider key="divider_1">Divider 1</ListBox.Divider>
        {characterOptions[0]}
        {renderLoadMore(0)}
        <ListBox.Divider key="divider_2">Divider 2</ListBox.Divider>
        {characterOptions[1]}
        {renderLoadMore(1)}
        <ListBox.Divider key="divider_3">Divider 3</ListBox.Divider>
        {characterOptions[2]}
        {renderLoadMore(2)}
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
        <ListBox.Divider>Results</ListBox.Divider>
        {Options}
        {renderFooter()}
      </React.Fragment>
    );
  }

  const renderTrigger = (state, dispatch, { types, refTrigger, propsForTrigger }) => (
    <Button
      {...propsForTrigger()}
      ref={refTrigger}
      onClick={() => {
        dispatch({ type: types.togglePopover });
      }}
    >
      Marvel API
    </Button>
  );

  return (
    <React.Fragment>
      {state.selectedCharacters.length ? (
        <Results charactersCache={charactersCache} ids={state.selectedCharacters} />
      ) : null}
      <ListBox height={350} isDisabled={state.isDisabled} isMulti onChange={handleChange} placeholder="Marvel API">
        <ListBox.Filter filter={handleFilter} />
        <ListBox.Trigger>{renderTrigger}</ListBox.Trigger>
        <ListBox.RawItem isHidden={!state.isLoading}>Fetching data ...</ListBox.RawItem>
        {state.searchedCharacters && state.search !== "" ? renderSearchedOptions() : null}
        {state.characters.length && state.search === "" ? renderOptions() : null}
      </ListBox>
    </React.Fragment>
  );
}
