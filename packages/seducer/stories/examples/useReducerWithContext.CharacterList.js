/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import Button from "@paprika/button";
import Input from "@paprika/input";
import Card from "@paprika/card";
import Toast from "@paprika/toast";

import { Story } from "storybook/assets/styles/common.styles";

import { useSeducerWithContext, Provider } from "../../src";

const actions = {
  selected(state, payload) {
    return { ...state, selected: new Set(payload || []) };
  },
  characters(state, payload) {
    return { ...state, characters: new Set(payload || []) };
  },
  toggle(state, payload) {
    let removeFrom = new Set(state.characters);
    let moveTo = new Set(state.selected);

    if (state.selected.has(payload)) {
      removeFrom = new Set(state.selected);
      moveTo = new Set(state.characters);
      removeFrom.delete(payload);
      moveTo.add(payload);

      return {
        ...state,
        selected: removeFrom,
        characters: moveTo,
      };
    }

    removeFrom.delete(payload);
    moveTo.add(payload);

    return {
      ...state,
      selected: moveTo,
      characters: removeFrom,
    };
  },

  addCharacter(state, payload) {
    const next = new Set(state.characters);
    next.add(payload);
    return { ...state, characters: next };
  },
};

export function CharactersList() {
  const refInput = React.useRef(null);
  const [state, dispatch, types] = useSeducerWithContext();

  const handleToggle = value => () => {
    dispatch(types.toggle, value);
  };

  return (
    <div style={{ maxWidth: "35vw" }}>
      <form
        onSubmit={event => {
          event.preventDefault();

          if (refInput.current.value) {
            dispatch(types.addCharacter, refInput.current.value);
            refInput.current.value = "";
          }
        }}
      >
        <label htmlFor="new-character">Add character:</label>
        <Input id="new-character" ref={refInput} />
      </form>
      <br />
      <div style={{ display: "flex" }}>
        <div>
          <strong>Selected:</strong>
          <ul style={{ listStyle: "none", padding: "4px" }}>
            {Array.from(state.selected).map(character => (
              <li key={character} style={{ padding: "0 0 8px 0" }}>
                {character}
                <Button size={Button.types.size.SMALL} onClick={handleToggle(character)}>
                  remove
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <strong>Characters:</strong>
          <ul style={{ listStyle: "none", padding: "4px" }}>
            {Array.from(state.characters).map(character => (
              <li key={character} style={{ padding: "0 0 8px 0" }}>
                {character}
                <Button size={Button.types.size.SMALL} onClick={handleToggle(character)}>
                  select
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function CharacterListFeature({ initialSelected = [], initialCharacters = [] }) {
  const initialState = {
    selected: new Set(initialSelected),
    characters: new Set(initialCharacters),
  };

  // useReducerWithContext requires a Provider in order to use useSeducerWithContext
  return (
    <Provider initialState={initialState} actions={actions}>
      <Story>
        <Card style={{ padding: "16px", width: "320px" }}>
          <Toast hasCloseButton={false}>
            Add new characters{" "}
            <span role="img" aria-label="character">
              👩‍🎤
            </span>
          </Toast>
          <CharactersList />
        </Card>
      </Story>
    </Provider>
  );
}
