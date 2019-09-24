import React from "react";
import tokens from "@paprika/tokens";
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

export const ControlledIsSelected = () => {
  const [options, setOptions] = React.useState(characters.antiHeroesRaw);

  const handleClick = index => () => {
    setOptions(() => {
      const cloneOptions = options.slice(0);

      // when is a multi selection listbox we want to toggle the selection

      cloneOptions[index].isSelected = !cloneOptions[index].isSelected;

      return cloneOptions;
    });
  };

  function handleChange(selectedOptions) {
    setOptions(options => {
      console.log(selectedOptions);
      const cloneOptions = options.slice(0);
      cloneOptions.forEach((op, index) => {
        const option = op;
        if (selectedOptions.includes(index)) {
          option.isSelected = true;
        } else {
          option.isSelected = false;
        }
      });

      return cloneOptions;
    });
  }

  return (
    <React.Fragment>
      Click on any button to controlled the Listbox:
      <div
        css={`
          padding: 12px;
        `}
      >
        {options.map((item, index) => (
          <button
            css={`
              font-size: 16px;
              padding: 8px;
              margin: 2px;
              ${({ isSelected }) => {
                return isSelected ? `background: ${tokens.color.blue}; color: ${tokens.color.white}` : "";
              }}
            `}
            type="button"
            key={item.label}
            isSelected={options[index].isSelected}
            onClick={handleClick(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <hr />
      <h2>
        Controlling a Listbox with <strong>isInline={`{true}`}</strong>
      </h2>
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
