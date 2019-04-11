/* eslint-disable react/no-multi-comp, react/prop-types */
import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "@paprika/button";
import { Frame } from "../../stories.styles";
import ListBox from "../../../index";
import fixture from "./lazy.fixture";

// spider

async function fetchAPI(term) {
  const url = "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=";
  // low risk to share api key for now, I can invalidate it later and extracted it to an env variable
  const apiKey = "&apikey=ac7726775d7f6e56add4f57ed5cd9a6b";
  const stream = await fetch(`${url}${term}${apiKey}`);
  const data = await stream.json();
  return data;
}

function LazyListBox() {
  const [characters, setCharacters] = React.useState([]);

  // async function getCharacters(term) {
  //   const characters = await fetchAPI(term);
  //   return characters;
  // }

  React.useEffect(() => {
    // For reference only you would do something like this to get the characters from the API
    // Promise.all([getCharacters("n"), getCharacters("z"), getCharacters("s")]).then(values => {
    //   values;
    // });

    // I saved the initial load in a static fixture to prevent run out of the requests because the API limit
    const charactersFixture = fixture();
    setCharacters(charactersFixture);
  }, []);

  function renderOptions() {
    const characterOptions = characters.map(character => {
      return character.data.results.map(result => {
        return <ListBox.Option key={result.id}>{result.name}</ListBox.Option>;
      });
    });

    return (
      <React.Fragment>
        <ListBox.Group key="group_n" groupId="n" label="𝓝">
          {characterOptions[0]}
        </ListBox.Group>
        <ListBox.Group key="group_s" groupId="s" label="𝓢">
          {characterOptions[1]}
        </ListBox.Group>
        <ListBox.Group key="group_z" groupId="z" label="𝓩">
          {characterOptions[2]}
        </ListBox.Group>
      </React.Fragment>
    );
  }

  return (
    <Frame>
      <ListBox placeholder="Marvel API" isDisabled={!characters.length}>
        {characters.length ? renderOptions() : null}
      </ListBox>
    </Frame>
  );
}

storiesOf("ListBox / recipes", module).add("Lazy ListBox", () => <LazyListBox />);
