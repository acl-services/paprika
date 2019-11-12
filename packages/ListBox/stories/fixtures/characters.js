import React from "react";
import ListBox from "../../src";

export const antiHeroes = [
  "Punisher",
  "Catwoman",
  "Venom",
  "Thunderbolts",
  "Suicide Squad",
  "Deadpool",
  "Spawn",
  "Wolverine",
].map(hero => <ListBox.Option key={hero}>{hero}</ListBox.Option>);

export const villians = [
  "The Joker",
  "Darth Vader",
  "Hannibal Lecter",
  "Lord Voldemort",
  "Freddy Krueger",
  "Palpatine",
  "Agent Smith",
].map(villian => <ListBox.Option key={villian}>{villian}</ListBox.Option>);

export const heroes = [
  "Black Panther",
  "Wonder Woman",
  "Spiderman",
  "The Incredibles",
  "Thor",
  "Batman",
  "Iron Man",
  "Doctor Strange",
].map(hero => <ListBox.Option key={hero}>{hero}</ListBox.Option>);

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
