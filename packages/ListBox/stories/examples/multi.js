import React from "react";
import styled from "styled-components";
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

export const WithCheckboxAsPreBuiltInOption = () => (
  <ListBox isMulti renderCheckbox="checkbox">
    {characters.heroes}
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

export const WithCustomCheckers = () => (
  <ListBox
    isMulti
    renderCheckbox={isChecked => {
      return isChecked ? "✅" : "🙅‍";
    }}
  >
    {characters.antiHeroes}
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

const RootStyled = styled.span`
  text-align: left;
  font-weight: bold;
  font-size: 16px;
`;

const ParentStyled = styled.span`
  text-align: left;
  font-weight: 300;
  padding-left: 16px;
  font-size: 14px;
`;

const LeafStyled = styled.span`
  padding-left: 32px;
  position: relative;

  &:before {
    border-bottom: 1px solid #ccc;
    content: "";
    height: 1px;
    position: absolute;
    width: 8px;
    top: 6px;
    left: 20px;
  }

  &:after {
    border-left: 1px solid #ccc;
    content: "";
    height: 8px;
    position: absolute;
    width: 1px;
    top: 0;
    left: 20px;
    display: block;
  }
`;

export const WithCustomStyles = () => (
  <ListBox isMulti renderCheckbox={() => null}>
    <ListBox.RawItem>
      <RootStyled as="span">Marvel Universe</RootStyled>
    </ListBox.RawItem>
    <ListBox.RawItem>
      <ParentStyled as="span">AntiHeroes</ParentStyled>
    </ListBox.RawItem>
    <ListBox.Option>{isChecked => <LeafStyled>{isChecked ? "😇" : "🙅‍"} Render Prop</LeafStyled>}</ListBox.Option>
    <ListBox.Option>
      <LeafStyled>Catwoman</LeafStyled>
    </ListBox.Option>
    <ListBox.Option>
      <LeafStyled>Venom</LeafStyled>
    </ListBox.Option>
    <ListBox.Option>
      <LeafStyled>Thunderbolts</LeafStyled>
    </ListBox.Option>
    <ListBox.Option>
      <LeafStyled>Suicide Squad</LeafStyled>
    </ListBox.Option>
    <ListBox.Option>
      <LeafStyled>Deadpool</LeafStyled>
    </ListBox.Option>
    <ListBox.Option>
      <LeafStyled>Spawn</LeafStyled>
    </ListBox.Option>
    <ListBox.Option>
      <LeafStyled>Wolverine</LeafStyled>
    </ListBox.Option>
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
