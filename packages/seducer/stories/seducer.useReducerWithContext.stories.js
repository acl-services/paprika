import React from "react";
import { getStoryName } from "storybook/storyTree";
import BasicWithContext from "./examples/useReducerWithContext.basic";
import CharacterList from "./examples/useReducerWithContext.CharacterList";

const storyName = getStoryName("seducer");

export default {
  title: storyName,
};

export const useReducerWithContextBasic = () => <BasicWithContext />;

export const useReducerWithContextCharacterList = () => <CharacterList />;
