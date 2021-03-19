import React from "react";
import ListBox from "../../src";

export const antiHeroesArray = [
  "Punisher",
  "Catwoman",
  "Venom",
  "Thunderbolts",
  "Suicide Squad",
  "Deadpool",
  "Spawn",
  "Wolverine",
];

export const villiansArray = [
  "The Joker",
  "Darth Vader",
  "Hannibal Lecter",
  "Lord Voldemort",
  "Freddy Krueger",
  "Palpatine",
  "Agent Smith",
];

export const heroesArray = [
  "Black Panther",
  "Wonder Woman",
  "Spiderman",
  "The Incredibles",
  "Thor",
  "Batman",
  "Iron Man",
  "Doctor Strange",
];

export const antiHeroes = antiHeroesArray.map(hero => <ListBox.Option key={hero}>{hero}</ListBox.Option>);
export const villians = villiansArray.map(villian => <ListBox.Option key={villian}>{villian}</ListBox.Option>);
export const heroes = heroesArray.map(hero => <ListBox.Option key={hero}>{hero}</ListBox.Option>);

export const antiHeroesRaw = [
  { label: "Black Panther", isSelected: false },
  { label: "Wonder Woman", isSelected: false },
  { label: "Spiderman", isSelected: false },
  { label: "The Incredibles", isSelected: false },
  { label: "Thor", isSelected: false },
  { label: "Batman", isSelected: false },
  { label: "Iron Man", isSelected: false },
  { label: "Doctor Strange", isSelected: false },
];
