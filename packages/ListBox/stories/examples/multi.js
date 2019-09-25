import React from "react";
import tokens from "@paprika/tokens";
import { css } from "styled-components";
import ListBox from "../../src";
import * as characters from "../fixtures/characters";

export const Basic = () => <ListBox isMulti>{characters.heroes}</ListBox>;

export const BasicWithPreselectedOptions = () => (
  <ListBox isMulti isOpen>
    <ListBox.Option isSelected>Venom</ListBox.Option>
    <ListBox.Option isSelected>Thunderbolts</ListBox.Option>
    {characters.villians}
    <ListBox.Option isSelected>Wolverine</ListBox.Option>
  </ListBox>
);

export const BasicIsDisabled = () => (
  <ListBox isMulti isDisabled>
    {characters.antiHeroes}
  </ListBox>
);

export const BasicIsDisabledWhileOpen = () => (
  <ListBox isMulti isDisabled isOpen>
    {characters.antiHeroes}
  </ListBox>
);

function OptionCustomCheckbox(props) {
  return (
    <span>
      <input tabIndex="-1" type="checkbox" checked={props.isSelected} />
      {props.character}
    </span>
  );
}

export const WithCustomCheckboxes = () => (
  <ListBox isMulti>
    {characters.villians.map(Option => (
      <ListBox.Option label={Option.props.children}>
        {({ isSelected }) => <OptionCustomCheckbox isSelected={isSelected} character={Option.props.children} />}
      </ListBox.Option>
    ))}
  </ListBox>
);

export const Footer = () => (
  <ListBox isMulti>
    {characters.antiHeroes}
    <ListBox.Footer
      onClickAccept={(indexes, options) => {
        console.log(indexes);
        console.log(options);
      }}
    />
  </ListBox>
);

export const WithGroups = () => (
  <ListBox isMulti>
    <ListBox.Divider>Anti-heroes III</ListBox.Divider>
    {characters.antiHeroes}

    <ListBox.Divider>Villians</ListBox.Divider>
    {characters.villians}

    <ListBox.Divider>Heroes</ListBox.Divider>
    {characters.heroes}
  </ListBox>
);

export const WithFilter = () => (
  <ListBox isMulti>
    <ListBox.Filter />
    {characters.antiHeroes}
    {characters.villians}
    {characters.heroes}
  </ListBox>
);

export const WithGroupsAndHaveSelectionByGroups = () => (
  <ListBox isMulti>
    <ListBox.Divider>Antiheroes</ListBox.Divider>
    {characters.antiHeroes}

    <ListBox.Divider>Villians</ListBox.Divider>
    {characters.villians}

    <ListBox.Divider>Heroes</ListBox.Divider>
    {characters.heroes}
  </ListBox>
);

export const WithGroupsAndHavePreselectedOptions = () => (
  <ListBox isMulti isOpen>
    <ListBox.Divider>Antiheroes</ListBox.Divider>
    <ListBox.Option isSelected>Michael Corleone</ListBox.Option>
    {characters.antiHeroes}
    <ListBox.Option isSelected>Mad Max</ListBox.Option>

    <ListBox.Divider>Villians</ListBox.Divider>
    {characters.villians}

    <ListBox.Divider>Heroes</ListBox.Divider>
    <ListBox.Option isSelected>Aquaman</ListBox.Option>
    {characters.heroes}
  </ListBox>
);

const styles = {
  container: css`
    padding: 12px;
  `,
  button: css`
    font-size: 16px;
    margin: 2px;
    padding: 8px;
    ${({ isSelected }) => {
      return isSelected ? `background: ${tokens.color.blue}; color: ${tokens.color.white}` : "";
    }}
  `,
};

export const ControlledIsSelected = () => {
  const [options, setOptions] = React.useState(characters.antiHeroesRaw);

  const handleClick = index => () => {
    setOptions(() => {
      const cloneOptions = options.slice(0);

      cloneOptions[index].isSelected = !cloneOptions[index].isSelected;

      return cloneOptions;
    });
  };

  function handleChange(selectedOptions) {
    /** this will be trigger when a uncontrolled change occurred inside the listbox
    let's sync our local state with the one on the listbox so we can turn on / off
    the buttons */

    setOptions(options => {
      const cloneOptions = options.slice(0);
      cloneOptions.forEach((op, index) => {
        cloneOptions[index].isSelected = selectedOptions.includes(index);
      });

      return cloneOptions;
    });
  }

  return (
    <React.Fragment>
      <div css={styles.container}>
        <p>Click on any button to controlled the Listbox:</p>
        {options.map((item, index) => (
          <button
            css={styles.button}
            type="button"
            key={item.label}
            isSelected={options[index].isSelected}
            onClick={handleClick(index)}
            data-pka-anchor={`button_${index}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <hr />
      <ListBox isInline isMulti onChange={handleChange}>
        {options.map(item => {
          return (
            <ListBox.Option key={item.label} isSelected={item.isSelected}>
              {item.label}
            </ListBox.Option>
          );
        })}
      </ListBox>
    </React.Fragment>
  );
};

export const DefaultIsSelected = () => {
  return (
    <ListBox
      isInline
      isMulti
      onChange={selectedOptions => {
        console.log(selectedOptions);
      }}
    >
      {characters.antiHeroesRaw.map((item, index) => {
        return (
          <ListBox.Option key={item.label} defaultIsSelected={Boolean(index % 2)}>
            {item.label}
          </ListBox.Option>
        );
      })}
    </ListBox>
  );
};
