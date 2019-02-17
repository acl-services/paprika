import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import ListBox from "../ListBox";
import ListBoxTags from "../ListBoxTags";

function OptionsDynamicallyAdding() {
  const [options, setOptions] = useState([
    <ListBox.Option key="0">
      <span role="img" aria-label="unicorn">
        🦄 unicorn
      </span>
    </ListBox.Option>,
  ]);

  const [optionText, setOptionText] = useState("");

  const handleAdd = () => {
    const optionsClone = options.slice();
    optionsClone.push(<span key="3">{`${optionText} [dynamic]`}</span>);
    setOptions(optionsClone);
  };

  const handleChange = event => {
    setOptionText(event.target.value);
  };

  return (
    <React.Fragment>
      <input value={optionText} onChange={handleChange} type="text" />
      <button type="button" onClick={handleAdd}>
        Add[+]
      </button>
      <ListBox>{options}</ListBox>
    </React.Fragment>
  );
}

const StoryContainerStyled = styled.div`
  padding: 25px;
`;
function addPadding(storyFn) {
  return <StoryContainerStyled>{storyFn()}</StoryContainerStyled>;
}

storiesOf("ListBox", module)
  .addDecorator(addPadding)
  .addDecorator(addPadding)
  .add("Is single selection", () => (
    <ListBox>
      <ListBox.Option>Punisher</ListBox.Option>
      <ListBox.Option>Catwoman</ListBox.Option>
      <ListBox.Option>Venom</ListBox.Option>
      <ListBox.Option>Thunderbolts</ListBox.Option>
      <ListBox.Option>Deadpool</ListBox.Option>
      <ListBox.Option>Spawn</ListBox.Option>
      <ListBox.Option>Wolverine</ListBox.Option>
    </ListBox>
  ));

storiesOf("ListBox", module)
  .addDecorator(addPadding)
  .add("Is multiple selection with Label CHILDREN prop in the selection", () => (
    <ListBox isMulti>
      <ListBox.Option>
        <span role="img" aria-label="unicorn">
          🦄 unicorn
        </span>
      </ListBox.Option>
      <ListBox.Option>
        <span role="img" aria-label="cat">
          😻 Cat in love
        </span>
      </ListBox.Option>
      <ListBox.Option>
        <span role="img" aria-label="mountain">
          🏔 Cypress
        </span>
      </ListBox.Option>
      <ListBox.Option>
        <span role="img" aria-label="rainbow">
          🌈 Rainbow
        </span>
      </ListBox.Option>
      <ListBox.Option>
        <span role="img" aria-label="cammel">
          🐪 Cammel{" "}
        </span>
      </ListBox.Option>
    </ListBox>
  ))
  .add("Is multiple selection with LABEL prop in the selection", () => (
    <ListBox isMulti>
      <ListBox.Option label="unicorn">
        <span role="img" aria-label="unicorn">
          🦄 unicorn
        </span>
      </ListBox.Option>
      <ListBox.Option label="cat">
        <span role="img" aria-label="cat">
          😻 Cat in love
        </span>
      </ListBox.Option>
      <ListBox.Option label="cypress">
        <span role="img" aria-label="mountain">
          🏔 Cypress
        </span>
      </ListBox.Option>
      <ListBox.Option label="rainbow">
        <span role="img" aria-label="rainbow">
          🌈 Rainbow
        </span>
      </ListBox.Option>
      <ListBox.Option label="Cammel">
        <span role="img" aria-label="cammel">
          🐪 Cammel{" "}
        </span>
      </ListBox.Option>
    </ListBox>
  ));

storiesOf("ListBox", module)
  .addDecorator(addPadding)
  .add("Is single selection with Filter", () => (
    <ListBox hasFilter>
      <ListBox.Option>unicorn</ListBox.Option>
      <ListBox.Option>Cat in love</ListBox.Option>
      <ListBox.Option>Cypress</ListBox.Option>
      <ListBox.Option>Rainbow</ListBox.Option>
      <ListBox.Option>Cammel</ListBox.Option>
    </ListBox>
  ));

storiesOf("ListBox", module)
  .addDecorator(addPadding)
  .add("Is single selection with DYNAMIC adding options", () => <OptionsDynamicallyAdding />);

storiesOf("ListBox", module)
  .addDecorator(addPadding)
  .add("Is single selection with Groups", () => (
    <ListBox hasFilter>
      <ListBox.Group title="antiheroes">
        <ListBox.Option>Punisher</ListBox.Option>
        <ListBox.Option>Catwoman</ListBox.Option>
        <ListBox.Option>Venom</ListBox.Option>
        <ListBox.Option>Thunderbolts</ListBox.Option>
        <ListBox.Option>Suicide Squad</ListBox.Option>
        <ListBox.Option>Deadpool</ListBox.Option>
        <ListBox.Option>Spawn</ListBox.Option>
        <ListBox.Option>Wolverine</ListBox.Option>
      </ListBox.Group>
      <ListBox.Group title="villians">
        <ListBox.Option>The Joker</ListBox.Option>
        <ListBox.Option>Darth Vader</ListBox.Option>
        <ListBox.Option>Hannibal Lecter</ListBox.Option>
        <ListBox.Option>Lord Voldemort</ListBox.Option>
        <ListBox.Option>Freddy Krueger</ListBox.Option>
        <ListBox.Option>Palpatine</ListBox.Option>
        <ListBox.Option>Agent Smith</ListBox.Option>
      </ListBox.Group>
      <ListBox.Group title="heroes">
        <ListBox.Option>Black Panther</ListBox.Option>
        <ListBox.Option>Wonder Woman</ListBox.Option>
        <ListBox.Option>Spiderman</ListBox.Option>
        <ListBox.Option>The Incredibles</ListBox.Option>
        <ListBox.Option>Thor</ListBox.Option>
        <ListBox.Option>Batman</ListBox.Option>
        <ListBox.Option>Iron Man</ListBox.Option>
        <ListBox.Option>Doctor Strange</ListBox.Option>
      </ListBox.Group>
    </ListBox>
  ));

storiesOf("ListBox", module)
  .addDecorator(addPadding)
  .add("Is multi selection with Groups", () => (
    <ListBox hasFilter isMulti>
      <ListBox.Group title="antiheroes">
        <ListBox.Option>Punisher</ListBox.Option>
        <ListBox.Option>Catwoman</ListBox.Option>
        <ListBox.Option>Venom</ListBox.Option>
        <ListBox.Option>Thunderbolts</ListBox.Option>
        <ListBox.Option>Suicide Squad</ListBox.Option>
        <ListBox.Option>Deadpool</ListBox.Option>
        <ListBox.Option>Spawn</ListBox.Option>
        <ListBox.Option>Wolverine</ListBox.Option>
      </ListBox.Group>
      <ListBox.Group title="villians">
        <ListBox.Option>The Joker</ListBox.Option>
        <ListBox.Option>Darth Vader</ListBox.Option>
        <ListBox.Option>Hannibal Lecter</ListBox.Option>
        <ListBox.Option>Lord Voldemort</ListBox.Option>
        <ListBox.Option>Freddy Krueger</ListBox.Option>
        <ListBox.Option>Palpatine</ListBox.Option>
        <ListBox.Option>Agent Smith</ListBox.Option>
      </ListBox.Group>
      <ListBox.Group title="heroes">
        <ListBox.Option>Black Panther</ListBox.Option>
        <ListBox.Option>Wonder Woman</ListBox.Option>
        <ListBox.Option>Spiderman</ListBox.Option>
        <ListBox.Option>The Incredibles</ListBox.Option>
        <ListBox.Option>Thor</ListBox.Option>
        <ListBox.Option>Batman</ListBox.Option>
        <ListBox.Option>Iron Man</ListBox.Option>
        <ListBox.Option>Doctor Strange</ListBox.Option>
      </ListBox.Group>
    </ListBox>
  ));

storiesOf("ListBox", module)
  .addDecorator(addPadding)
  .add("Is multi selection with Groups Filter", () => (
    <ListBox hasFilter hasGroupFilter isMulti isPopoverOpen>
      <ListBox.Group title="antiheroes">
        <ListBox.Option>Punisher</ListBox.Option>
        <ListBox.Option>Catwoman</ListBox.Option>
        <ListBox.Option>Venom</ListBox.Option>
        <ListBox.Option>Thunderbolts</ListBox.Option>
        <ListBox.Option>Suicide Squad</ListBox.Option>
        <ListBox.Option>Deadpool</ListBox.Option>
        <ListBox.Option>Spawn</ListBox.Option>
        <ListBox.Option>Wolverine</ListBox.Option>
      </ListBox.Group>
      <ListBox.Group title="villians">
        <ListBox.Option>The Joker</ListBox.Option>
        <ListBox.Option>Darth Vader</ListBox.Option>
        <ListBox.Option>Hannibal Lecter</ListBox.Option>
        <ListBox.Option>Lord Voldemort</ListBox.Option>
        <ListBox.Option>Freddy Krueger</ListBox.Option>
        <ListBox.Option>Palpatine</ListBox.Option>
        <ListBox.Option>Agent Smith</ListBox.Option>
      </ListBox.Group>
      <ListBox.Group title="heroes">
        <ListBox.Option>Black Panther</ListBox.Option>
        <ListBox.Option>Wonder Woman</ListBox.Option>
        <ListBox.Option>Spiderman</ListBox.Option>
        <ListBox.Option>The Incredibles</ListBox.Option>
        <ListBox.Option>Thor</ListBox.Option>
        <ListBox.Option>Batman</ListBox.Option>
        <ListBox.Option>Iron Man</ListBox.Option>
        <ListBox.Option>Doctor Strange</ListBox.Option>
      </ListBox.Group>
    </ListBox>
  ));

storiesOf("ListBoxWithTags", module).add("Is single selection with Tags Input", () => (
  <ListBoxTags hasFilter>
    <ListBoxTags.Option>Punisher</ListBoxTags.Option>
    <ListBoxTags.Option>Catwoman</ListBoxTags.Option>
    <ListBoxTags.Option>Venom</ListBoxTags.Option>
    <ListBoxTags.Option>Thunderbolts</ListBoxTags.Option>
    <ListBoxTags.Option>Suicide Squad</ListBoxTags.Option>
    <ListBoxTags.Option>Deadpool</ListBoxTags.Option>
    <ListBoxTags.Option>Spawn</ListBoxTags.Option>
    <ListBoxTags.Option>Wolverine</ListBoxTags.Option>
  </ListBoxTags>
));
